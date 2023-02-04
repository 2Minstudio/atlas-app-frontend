import React from "react";
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
import ConfirmBox from "../../../components/modal/confirm";
import DataList from "../../../components/datalist";

class Courses extends React.Component {
  state = {
    courses: {},
    modelshow: false,
    editId: null,
    deleteId: null,
  };

  loaddata = async (page = 1) => {
    const { data, state } = await getCourses(page);
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
          text={"Are you sure to delete this Course?"}
          okayText={"Delete"}
          okayAction={this.delete}
          cancelAction={this.closeConfirm}
        />
        <Row className="d-flex align-items-center pt-4 pb-5">
          <Col>
            <h2 className="m-0">Courses</h2>
          </Col>
          <Col className="text-end">
            <Button
              className="btn btn-success rounded-pill p-3 me-3"
              variant="success"
              onClick={this.handleShow}
            >
              Add New Course
            </Button>
          </Col>
        </Row>
        <Modal size="lg" show={modelshow} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>{editId ? "Edit" : "New"} Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CourseForm user={user} id={editId} closeTrigger={this.handleClose} />
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
              variant: 'outline-success',
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
              link: "/admin/courses/$id",
              variant: "success",
              replacetokens: { $id: "id" },
            },
          ]}
        />
      </LayoutAdminDashboard>
    );
  }
}

export default withCookies(withRouter(Courses));
