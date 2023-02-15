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

class TestQuestions extends React.Component {
  state = {
    user: {},
    deleteId: null,
    modelshow: false,
    editId: null,
    testid: null,
  };

  loadData = async (page = 1) => {
    const { testid } = this.state;
    if (testid) {
      await getCourse(testid).then(async (courseresp) => {
        const { data: course } = courseresp;
        await getCourseModules(testid, page).then((resp) => {
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
        query: { course: testid },
      },
    } = this.props;

    if (token) {
      const {
        state,
        data: { user },
      } = await getUser(token);
      if (state) {
        this.setState({ user, testid }, async () => {
          if (testid) await this.loadData();
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
          query: { course: proptestid },
        },
      } = nextProps;
      return { testid: proptestid };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.testid !== this.state.testid) {
      this.loadData();
    }
  }

  closeConfirm = () => {
    this.setState({ deleteId: null });
  };

  render() {
    const { user, data, modelshow, editId, deleteId, course, testid } =
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
              user={user}
              testid={testid}
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
              variant: "outline-success",
              key: "id",
            },
            {
              type: "button",
              label: "Delete",
              onclick: this.deleteConfirm,
              variant: "outline-success",
              key: "id",
            },
            {
              type: "link",
              label: "View",
              link: `/admin/courses/${testid}/$id`,
              variant: "success",
              replacetokens: { $id: "id" },
            },
          ]}
        />
      </LayoutAdminDashboard>
    );
  }
}

export default withCookies(withRouter(TestQuestions));
