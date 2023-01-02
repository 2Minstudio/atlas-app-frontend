import React from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LayoutDashboard from "../../../../../components/layout/layout-dashboard";
import { isClientLoggedin, getUser } from "../../../../../helpers/helper";
import {
  getCourse,
  getModule,
  getModelChapters,
  deleteChapter,
} from "../../../../../helpers/admin";
import { withCookies } from "react-cookie";
import { withRouter } from "next/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Link from "next/link";
import ChapterForm from "../../../../../components/form/chapter";
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
    console.log("???", this.props?.router);
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
    return (
      <LayoutDashboard user={user}>
        <Modal
          size="sm"
          show={deleteId}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Are you sure want to delete this model?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button variant="light">Cancel</Button>
            <Button variant="danger" onClick={this.delete}>
              Delete
            </Button>
          </Modal.Body>
        </Modal>
        <Row>
          <p>Course Information</p>
          <h2>{course?.name}</h2>
          <h3>{course?.cost}</h3>
          <h3>{course?.status ? "Publishd" : "Draft"}</h3>
          <p>{course?.description}</p>
          <p>{course?.notes}</p>
        </Row>
        <Row>
          <p>Module Information</p>
          <h2>{module?.name}</h2>
          <h3>{module?.attend_type}</h3>
          <h3>{course?.status ? "Publishd" : "Draft"}</h3>
        </Row>
        <Row>
          <Col>
            <h2>Chapters</h2>
          </Col>
          <Col className="text-end">
            <Button variant="primary" onClick={() => this.handleShow()}>
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
              <th>#</th>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.results.map((d) => {
              return (
                <>
                  <tr>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.status ? "Published" : "Draft"}</td>
                    <td>
                      <Stack direction="horizontal" gap={0}>
                        <Button size="sm" onClick={() => this.edit(d.id)}>
                          Edit
                        </Button>
                        <div className="vr" />
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => this.deleteConfirm(d.id)}
                        >
                          Delete
                        </Button>
                        <div className="vr" />
                        <Link
                          href={`/admin/courses/${courseid}/${moduleid}/${d.id}`}
                        >
                          <Button size="sm">View</Button>
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
      </LayoutDashboard>
    );
  }
}

export default withCookies(withRouter(ModuleDetails));
