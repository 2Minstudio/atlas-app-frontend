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
import { getUsers, getRoles, deleteUser } from "../../../helpers/admin";
import ConfirmBox from "../../../components/modal/confirm";
import ToolTip from "../../../components/common/toolTip";
import UserForm from "../../../components/form/user";
import DataList from "../../../components/datalist";

class Users extends React.Component {
  state = {
    data: {},
    modelshow: false,
    editId: null,
    deleteId: null,
    roles: {},
  };

  loaddata = async (page = 1) => {
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
    await deleteUser(deleteId).then((resp) => {
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
    const roles_obj = {};
    for (let k in roles) {
      roles_obj[roles[k].id] = roles[k].name;
    }

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
        <DataList
          data={data}
          headings={[
            { id: "#" },
            { first_name: "Name" },
            { email: "Email" },
            { phone_number: "Phone Number" },
            { groups: "Role" },
          ]}
          pagecallback={this.loaddata}
          sourcemapper={{ groups: roles_obj }}
          buttons={[
            {
              type: "button",
              label: "Edit",
              onclick: this.edit,
              variant: "primary",
              key: "id",
            },
            {
              type: "button",
              label: "Delete",
              onclick: this.deleteConfirm,
              variant: "danger",
              key: "id",
            },
          ]}
        />
      </LayoutAdminDashboard>
    );
  }
}

export default withCookies(withRouter(Users));
