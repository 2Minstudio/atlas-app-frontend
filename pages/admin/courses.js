import React from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import LayoutDashboard from "../../components/layout/layout-dashboard";
import { getCourses } from "../../helpers/admin";
import CourseForm from "../../components/form/course";
import { isClientLoggedin, getUser } from "../../helpers/helper";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Courses extends React.Component {
  state = {
    courses: {},
    modelshow: false,
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
    this.setState({ modelshow: false });
  };

  edit = (id) => {
    console.log(id);
  };

  delete = (id) => {
    console.log(id);
  };

  render() {
    const { user, data, modelshow } = this.state;
    return (
      <LayoutDashboard user={user}>
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
            <Modal.Title>New Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CourseForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleClose()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
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
                      <Button size="sm" onClick={() => this.edit(d.id)}>
                        Edit
                      </Button>{" "}
                      |{" "}
                      <Button size="sm" onClick={() => this.delete(d.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </LayoutDashboard>
    );
  }
}

export default withCookies(withRouter(Courses));
