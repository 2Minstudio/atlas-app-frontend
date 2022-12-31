import React from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LayoutDashboard from "../../../../components/layout/layout-dashboard";
import { isClientLoggedin, getUser } from "../../../../helpers/helper";
import { getCourse, getCourseModules } from "../../../../helpers/admin";
import { withCookies } from "react-cookie";
import { withRouter } from "next/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Link from "next/link";
import ModuleForm from "../../../../components/form/module";

class CourseDetail extends React.Component {
  state = {
    user: {},
    deleteId: null,
    modelshow: false,
    editId: null,
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
        const { data: course } = await getCourse(courseid);
        const { data } = await getCourseModules(courseid);
        this.setState({ user, data, course });
      }
    } else {
      Router.push("/");
    }
  }
  render() {
    const { user, data, modelshow, editId, deleteId, course } = this.state;
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
          <h1>{course?.name}</h1>
          <h2>{course?.cost}</h2>
          <h3>{course?.status ? "Publishd": "Draft"}</h3>
          <p>{course?.description}</p>
          <p>{course?.notes}</p>
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
            <ModuleForm id={editId} closeTrigger={this.handleClose} />
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

export default withCookies(withRouter(CourseDetail));
