import React from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LayoutAdminDashboard from "../../../components/layout/adminDashboard";
import { getCourses, deleteCourse } from "../../../helpers/admin";
import CourseForm from "../../../components/form/course";
import { isClientLoggedin, getUser } from "../../../helpers/helper";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Stack from "react-bootstrap/Stack";
import ConfirmBox from "../../../components/modal/confirm";
import ToolTip from "../../../components/common/toolTip";

class Courses extends React.Component {
  state = {
    courses: {},
    modelshow: false,
    editId: null,
    deleteId: null,
  };

  loaddata = async () => {
    const { data, state } = await getCourses();
    if (state) {
      this.setState({ data });
    }
  };

  async componentDidMount() {
    const token = isClientLoggedin(this.props);
    if (token) {
      const {
        state,
        data: { user },
      } = await getUser(token);
      if (state) {
        this.setState({ user }, async () => {
          await this.loaddata();
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
    this.setState({ modelshow: false, editId: null }, async () => {
      await this.loaddata();
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
    await deleteCourse(deleteId).then((resp) => {
      const { state, data } = resp;
      if (state) {
        this.setState({ deleteId: null }, async () => {
          await this.loaddata();
        });
      }
    });
  };

  closeConfirm = () => {
    this.setState({ deleteId: null });
  };

  render() {
    const { user, data, modelshow, editId, deleteId } = this.state;
    const paths = { "#": "Courses" };
    return (
      <LayoutAdminDashboard user={user} paths={paths}>
        <ConfirmBox
          isShow={deleteId}
          text={"Are you sure want to delete this Course?"}
          okayText={"Delete"}
          okayAction={this.delete}
          cancelAction={this.closeConfirm}
        />
        <Row className="d-flex align-items-center pt-4 pb-5">
          <Col>
            <h2 className="m-0">Courses</h2>
          </Col>
          <Col className="text-end">
            <Button className="btn btn-success rounded-pill p-3 me-3" variant="success" onClick={this.handleShow}>
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
        <Table className="table-hover" responsive="sm">
          <thead>
            <tr>
              <th className="col">#</th>
              <th className="col-3">Name</th>
              <th className="col-2">Cost</th>
              <th className="col">Status</th>
              <th className="col-4">UserActions</th>
            </tr>
          </thead>
          <tbody>
            {data?.results.map((d) => {
              return (
                <>
                  <tr>
                    <td className="py-3">{d.id}</td>
                    <td className="py-3">{d.name}</td>
                    <td className="py-3">{d.cost}</td>
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
                       
                        <Link href={`/admin/courses/${d.id}`}>
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

export default withCookies(withRouter(Courses));
