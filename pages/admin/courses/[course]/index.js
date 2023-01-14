import React from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
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
import Stack from "react-bootstrap/Stack";
import Link from "next/link";
import ModuleForm from "../../../../components/form/module";
import Image from "next/image";
import CourseInfo from "../../../../components/detail/course";
import ConfirmBox from "../../../../components/modal/confirm";
import ToolTip from "../../../../components/common/toolTip";

class CourseDetail extends React.Component {
  state = {
    user: {},
    deleteId: null,
    modelshow: false,
    editId: null,
    courseid: null,
  };

  loadData = async (courseid) => {
    await getCourse(courseid).then(async (courseresp) => {
      const { data: course } = courseresp;
      await getCourseModules(courseid).then((resp) => {
        const { data } = resp;
        this.setState({ data, course });
      });
    });
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
        this.setState({ user }, async () => {
          if (courseid) await this.loadData(courseid);
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
    const { courseid } = this.state;
    this.setState({ modelshow: false, editId: null }, () => {
      this.loadData(courseid);
    });
  };

  edit = (id) => {
    this.setState({ editId: id, modelshow: true });
  };

  deleteConfirm = (id) => {
    this.setState({ deleteId: id });
  };

  delete = async () => {
    const { deleteId, courseid } = this.state;
    await deleteModule(deleteId).then(async (resp) => {
      const { state, data } = resp;
      if (state) {
        this.setState({ deleteId: null });
        await this.loadData(courseid);
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
      this.loadData(this.state.courseid);
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
            <Button className="btn btn-success rounded-pill p-3 me-3" variant="success" onClick={this.handleShow}>
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
        <Table responsive="sm">
          <thead>
            <tr>
              <th className="col">#</th>
              <th className="col-3">Name</th>
              <th className="col-2">Type</th>
              <th className="col">Status</th>
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
                    <td className="py-3">{d.attend_type}</td>
                    <td className="py-3">{d.status ? "Published" : "Draft"}</td>
                    <td>
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
                       
                        <Link href={`/admin/courses/${courseid}/${d.id}`}>
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

export default withCookies(withRouter(CourseDetail));
