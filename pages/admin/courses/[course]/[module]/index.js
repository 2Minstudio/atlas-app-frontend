import React from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
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
import Stack from "react-bootstrap/Stack";
import Link from "next/link";
import ChapterForm from "../../../../../components/form/chapter";
import CourseInfo from "../../../../../components/detail/course";
import ModuleInfo from "../../../../../components/detail/module";
import ConfirmBox from "../../../../../components/modal/confirm";
import ToolTip from "../../../../../components/common/toolTip";
class ModuleDetails extends React.Component {
  state = {
    user: {},
    deleteId: null,
    modelshow: false,
    editId: null,
    courseid: null,
    moduleid: null,
  };

  loadData = async (courseid, moduleid) => {
    await getCourse(courseid).then(async (courseresp) => {
      const { data: course } = courseresp;
      await getModule(moduleid).then(async (moduleresp) => {
        const { data: module } = moduleresp;
        await getModelChapters(moduleid).then((resp) => {
          const { data } = resp;
          this.setState({ data, module, course });
        });
      });
    });
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
          if (courseid) await this.loadData(courseid, moduleid);
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
    const { courseid, moduleid } = this.state;
    this.setState({ modelshow: false, editId: null }, () => {
      this.loadData(courseid, moduleid);
    });
  };

  edit = (id) => {
    this.setState({ editId: id, modelshow: true });
  };

  deleteConfirm = (id) => {
    this.setState({ deleteId: id });
  };

  delete = async () => {
    const { deleteId, courseid, moduleid } = this.state;
    await deleteChapter(deleteId).then(async (resp) => {
      const { state, data } = resp;
      if (state) {
        this.setState({ deleteId: null });
        await this.loadData(courseid, moduleid);
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
      this.loadData(this.state.courseid, this.state.moduleid);
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
            <Button className="btn btn-success rounded-pill p-3 me-3" variant="success" onClick={this.handleShow}>
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
        <Table responsive="sm">
          <thead>
            <tr>
              <th className="col">#</th>
              <th className="col-3">Name</th>
              <th className="col-4">Status</th>
              <th className="col-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.results.map((d) => {
              return (
                <>
                  <tr>
                    <td className="py-3">{d.id}</td>
                    <td className="py-3">{d.name}</td>
                    <td className="py-3">{d.status ? "Published" : "Draft"}</td>
                    <td className="py-3">
                      <Stack className="d-flex justify-content-start align-items-center" direction="horizontal" gap={3}>
                        <Button className="btn btn-info rounded-pill px-3" size="md" onClick={() => this.edit(d.id)}>
                          Edit
                        </Button>
                        
                        <Button className="btn rounded-pill px-3"
                          size="md"
                          variant="danger"
                          onClick={() => this.deleteConfirm(d.id)}
                        >
                          Delete
                        </Button>
                        
                        <Link
                          href={`/admin/courses/${courseid}/${moduleid}/${d.id}`}
                        >
                          <Button className="btn rounded-pill px-3" size="md">View</Button>
                          
                        </Link>
                      </Stack>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
          <tfoot>
            <Pagination></Pagination>
          </tfoot>
        </Table>
      </LayoutAdminDashboard>
    );
  }
}

export default withCookies(withRouter(ModuleDetails));
