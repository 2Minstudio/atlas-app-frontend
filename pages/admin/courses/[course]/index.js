import React from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LayoutDashboard from "../../../../components/layout/layout-dashboard";
import { isClientLoggedin, getUser } from "../../../../helpers/helper";
import {
  deleteModule,
  getCourse,
  getCourseModules,
} from "../../../../helpers/admin";
import { withCookies } from "react-cookie";
import { withRouter } from "next/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Link from "next/link";
import ModuleForm from "../../../../components/form/module";
import Image from "next/image";
import CourseInfo from "../../../../components/detail/course";

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
    // if (window.confirm("Are you sure to delete this record?")) {
    this.setState({ deleteId: id });
    // }
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
      //Perform some operation here
      // this.setState({courseid: someValue});
      this.loadData(this.state.courseid);
    }
  }

  render() {
    const { user, data, modelshow, editId, deleteId, course, courseid } =
      this.state;
    const paths = { "/admin/courses": "Courses","#": course?.name };
    return (
      <LayoutDashboard user={user} paths={paths}>
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
          <Col>
            <CourseInfo course={course} showImage={true} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Modules</h2>
          </Col>
          <Col className="text-end">
            <Button variant="primary" onClick={() => this.handleShow()}>
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
              <th>#</th>
              <th>Name</th>
              <th>Type</th>
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
                    <td>{d.attend_type}</td>
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
                        <Link href={`/admin/courses/${courseid}/${d.id}`}>
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

export default withCookies(withRouter(CourseDetail));
