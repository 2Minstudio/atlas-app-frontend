import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LayoutAdminDashboard from "../../../../components/layout/adminDashboard";
import { isClientLoggedin, getUser } from "../../../../helpers/helper";
import {
  deleteModule,
  getCourse,
  getCourseModules,
} from "../../../../helpers/admin";
import { withCookies } from "react-cookie";
import Router, { withRouter } from "next/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ModuleForm from "../../../../components/form/module";
import CourseInfo from "../../../../components/detail/course";
import ConfirmBox from "../../../../components/modal/confirm";
import DataList from "../../../../components/datalist";

class CourseDetail extends React.Component {
  state = {
    user: {},
    deleteId: null,
    modelshow: false,
    editId: null,
    courseid: null,
  };

  loadData = async (page = 1) => {
    const { courseid } = this.state;
    if (courseid) {
      await getCourse(courseid).then(async (courseresp) => {
        const { data: course } = courseresp;
        await getCourseModules(courseid, page).then((resp) => {
          const { data } = resp;
          this.setState({ data, course });
        });
      });
    }
  };

  async componentDidMount() {
    const token = isClientLoggedin(this.props);

    const {
      router: {
        query: { course: courseid },
      },
    } = this.props;

    if (token) {
      const {
        state,
        data: { user },
      } = await getUser(token);
      if (state) {
        this.setState({ user, courseid }, async () => {
          if (courseid) await this.loadData();
        });
      }
    } else {
      Router.push("/");
    }
  }

  handleShow = () => {
    this.setState({ modelshow: true });
  };

  handleClose = () => {
    this.setState({ modelshow: false, editId: null }, () => {
      this.loadData();
    });
  };

  edit = (id) => {
    this.setState({ editId: id, modelshow: true });
  };

  deleteConfirm = (id) => {
    this.setState({ deleteId: id });
  };

  delete = async () => {
    const { deleteId } = this.state;
    await deleteModule(deleteId).then(async (resp) => {
      const { state, data } = resp;
      if (state) {
        this.setState({ deleteId: null });
        await this.loadData();
      }
    });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.router !== prevState.router) {
      const {
        router: {
          query: { course: propcourseid },
        },
      } = nextProps;
      return { courseid: propcourseid };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.courseid !== this.state.courseid) {
      this.loadData();
    }
  }

  closeConfirm = () => {
    this.setState({ deleteId: null });
  };

  render() {
    const { user, data, modelshow, editId, deleteId, course, courseid } =
      this.state;
    const paths = { "/admin/courses": "Courses", "#": course?.name };
    return (
      <LayoutAdminDashboard user={user} paths={paths}>
        <ConfirmBox
          isShow={deleteId}
          text={"Are you sure want to delete this Module?"}
          okayText={"Delete"}
          okayAction={this.delete}
          cancelAction={this.closeConfirm}
        />

        <Row>
          <Col>
            <CourseInfo course={course} showImage={true} />
          </Col>
        </Row>
        <Row className="d-flex align-items-center pt-4 pb-5">
          <Col>
            <h2>Modules</h2>
          </Col>
          <Col className="text-end">
            <Button
              className="btn btn-success rounded-pill p-3 me-3"
              variant="success"
              onClick={this.handleShow}
            >
              Add New Module
            </Button>
          </Col>
        </Row>
        <Modal size="lg" show={modelshow} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>{editId ? "Edit" : "New"} Module</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ModuleForm
              courseId={courseid}
              id={editId}
              closeTrigger={this.handleClose}
            />
          </Modal.Body>
        </Modal>
        <DataList
          data={data}
          headings={[
            { id: "#" },
            { name: "Name" },
            { attend_type: "Type" },
            { status: "Status" },
          ]}
          pagecallback={this.loaddata}
          sourcemapper={{ status: { true: "Published", false: "Draft" } }}
          buttons={[
            {
              type: "button",
              label: "Edit",
              onclick: this.edit,
              variant: "primary",
              key: "id",
            },
            {
              type: "button",
              label: "Delete",
              onclick: this.deleteConfirm,
              variant: "danger",
              key: "id",
            },
            {
              type: "link",
              label: "View",
              link: `/admin/courses/${courseid}/$id`,
              variant: "primary",
              replacetokens: { $id: "id" },
            },
          ]}
        />
      </LayoutAdminDashboard>
    );
  }
}

export default withCookies(withRouter(CourseDetail));
