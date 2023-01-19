import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LayoutAdminDashboard from "../../../../../components/layout/adminDashboard";
import { isClientLoggedin, getUser } from "../../../../../helpers/helper";
import {
  getCourse,
  getModule,
  getModelChapters,
  deleteChapter,
} from "../../../../../helpers/admin";
import { withCookies } from "react-cookie";
import Router, { withRouter } from "next/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ChapterForm from "../../../../../components/form/chapter";
import CourseInfo from "../../../../../components/detail/course";
import ModuleInfo from "../../../../../components/detail/module";
import ConfirmBox from "../../../../../components/modal/confirm";
import DataList from "../../../../../components/datalist";
class ModuleDetails extends React.Component {
  state = {
    user: {},
    deleteId: null,
    modelshow: false,
    editId: null,
    courseid: null,
    moduleid: null,
  };

  loadData = async (page = 1) => {
    const { courseid, moduleid } = this.state;
    if (courseid && moduleid) {
      await getCourse(courseid).then(async (courseresp) => {
        const { data: course } = courseresp;
        await getModule(moduleid).then(async (moduleresp) => {
          const { data: module } = moduleresp;
          await getModelChapters(moduleid, page).then((resp) => {
            const { data } = resp;
            this.setState({ data, module, course });
          });
        });
      });
    }
  };

  async componentDidMount() {
    const token = isClientLoggedin(this.props);
    const {
      router: {
        query: { course: courseid, module: moduleid },
      },
    } = this.props;
    if (token) {
      const {
        state,
        data: { user },
      } = await getUser(token);
      if (state) {
        this.setState({ user, courseid, moduleid }, async () => {
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
    await deleteChapter(deleteId).then(async (resp) => {
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
          query: { course: courseid, module: moduleid },
        },
      } = nextProps;
      return { courseid, moduleid };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.courseid !== this.state.courseid &&
      prevState.moduleid !== this.state.moduleid
    ) {
      this.loadData();
    }
  }

  closeConfirm = () => {
    this.setState({ deleteId: null });
  };

  render() {
    const {
      user,
      data,
      modelshow,
      editId,
      deleteId,
      course,
      courseid,
      moduleid,
      module,
    } = this.state;
    const coursepath = `/admin/courses/${course?.id}`;
    const paths = {
      "/admin/courses": "Courses",
      [coursepath]: course?.name,
      "#": module?.name,
    };
    return (
      <LayoutAdminDashboard user={user} paths={paths}>
        <ConfirmBox
          isShow={deleteId}
          text={"Are you sure want to delete this Chapter?"}
          okayText={"Delete"}
          okayAction={this.delete}
          cancelAction={this.closeConfirm}
        />

        <Row className="d-flex align-items-center pt-4 pb-5">
          <Col>
            <h2>Course Information</h2>
            <CourseInfo course={course} showImage={false} />
          </Col>
        </Row>
        <Row className="d-flex align-items-center pt-4 pb-5">
          <Col>
            <h2>Module Information</h2>
            <ModuleInfo module={module} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Chapters</h2>
          </Col>
          <Col className="text-end">
            <Button
              className="btn btn-success rounded-pill p-3 me-3"
              variant="success"
              onClick={this.handleShow}
            >
              Add New Chapter
            </Button>
          </Col>
        </Row>
        <Modal size="lg" show={modelshow} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>{editId ? "Edit" : "New"} Chapter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ChapterForm
              courseId={courseid}
              moduleId={moduleid}
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
            { cost: "Cost" },
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
              link: `/admin/courses/${courseid}/${moduleid}/$id`,
              variant: "primary",
              replacetokens: { $id: "id" },
            },
          ]}
        />
      </LayoutAdminDashboard>
    );
  }
}

export default withCookies(withRouter(ModuleDetails));
