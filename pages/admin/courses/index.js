import React from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import LayoutDashboard from "../../../components/layout/layout-dashboard";
import { getCourses, deleteCourse } from "../../../helpers/admin";
import CourseForm from "../../../components/form/course";
import { isClientLoggedin, getUser } from "../../../helpers/helper";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Stack from "react-bootstrap/Stack";

class Courses extends React.Component {
  state = {
    courses: {},
    modelshow: false,
    editId: null,
    deleteId: null,
  };

  async componentDidMount() {
    const token = isClientLoggedin(this.props);
    if (token) {
      const {
        state,
        data: { user },
      } = await getUser(token);
      const resp = await getCourses();
      const { data } = resp;
      if (state) {
        this.setState({ user, data });
      }
    } else {
      Router.push("/");
    }
  }

  handleShow = () => {
    this.setState({ modelshow: true });
  };

  handleClose = () => {
    this.setState({ modelshow: false, editId: null });
  };

  edit = (id) => {
    console.log(id);
    this.setState({ editId: id, modelshow: true });
  };

  deleteConfirm = (id) => {
    // if (window.confirm("Are you sure to delete this record?")) {
    this.setState({ deleteId: id });
    // }
  };

  delete = async () => {
    const { deleteId } = this.state;
    await deleteCourse(deleteId).then((resp) => {
      const { state, data } = resp;
      if (state) {
        this.setState({ deleteId: null });
        this.render();
      }
    });
  };

  render() {
    const { user, data, modelshow, editId, deleteId } = this.state;
    return (
      <LayoutDashboard user={user}>
        <Modal
          size="sm"
          show={deleteId}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Are you sure want to delete this course?
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
            <h2>Courses</h2>
          </Col>
          <Col className="text-end">
            <Button variant="primary" onClick={() => this.handleShow()}>
              Add New Course
            </Button>
          </Col>
        </Row>
        <Modal size="lg" show={modelshow} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>{editId ? "Edit" : "New"} Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CourseForm id={editId} closeTrigger={this.handleClose} />
          </Modal.Body>
        </Modal>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>UserActions</th>
            </tr>
          </thead>
          <tbody>
            {data?.results.map((d) => {
              return (
                <>
                  <tr>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.description}</td>
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
                        <Link href={`/admin/courses/${d.id}`}>
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

export default withCookies(withRouter(Courses));
