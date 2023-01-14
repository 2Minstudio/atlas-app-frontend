import React from "react";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Stack from "react-bootstrap/Stack";
import LayoutAdminDashboard from "../../../components/layout/adminDashboard";
import { isClientLoggedin, getUser } from "../../../helpers/helper";
import { getUsers, getRoles } from "../../../helpers/admin";
import ConfirmBox from "../../../components/modal/confirm";
import ToolTip from "../../../components/common/toolTip";
import UserForm from "../../../components/form/user";

class Users extends React.Component {
  state = {
    data: {},
    modelshow: false,
    editId: null,
    deleteId: null,
    roles: {},
  };

  loaddata = async () => {
    const { data, state } = await getUsers();
    const {
      data: { results: roles },
    } = await getRoles();
    if (state) {
      this.setState({ data, roles });
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

  getGroupName = (id) => {
    const { roles } = this.state;
    if (id && id.length > 0) {
      const res = roles.find((elem) => elem.id === id[0]);
      return res.name;
    }
    return "";
  };

  render() {
    const { user, data, modelshow, editId, deleteId, roles } = this.state;
    return (
      <LayoutAdminDashboard user={user}>
        <ConfirmBox
          isShow={deleteId}
          text={"Are you sure want to delete this User?"}
          okayText={"Delete"}
          okayAction={this.delete}
          cancelAction={this.closeConfirm}
        />
        <Row>
          <Col>
            <h2>Users</h2>
          </Col>
        </Row>
        <Modal size="lg" show={modelshow} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>{editId ? "Edit" : "New"} User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UserForm
              roles={roles}
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
              <th>Email</th>
              <th>Phone Number</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.results?.map((d) => {
              return (
                <>
                  <tr>
                    <td>{d.id}</td>
                    <td>{d.first_name}</td>
                    <td>{d.email}</td>
                    <td>{d.phone_number}</td>
                    <td>{this.getGroupName(d.groups)}</td>
                    <td>
                      <Stack direction="horizontal" gap={0}>
                        <Button size="sm" onClick={() => this.edit(d.id)}>
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => this.deleteConfirm(d.id)}
                        >
                          Delete
                        </Button>
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

export default withCookies(withRouter(Users));
