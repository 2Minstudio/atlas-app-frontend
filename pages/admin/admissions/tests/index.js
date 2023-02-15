import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import TestForm from "../../../../components/form/test";
import LayoutAdminDashboard from "../../../../components/layout/adminDashboard";
import { isClientLoggedin, getUser } from "../../../../helpers/helper";
import DataList from "../../../../components/datalist";
import { getTests } from "../../../../helpers/admissions";

class ManageTest extends React.Component {
  state = {
    modelshow: false,
    editId: null,
  };

  loaddata = async (page = 1) => {
    const { data, state } = await getTests(page);
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

  render() {
    const { user, data, modelshow, editId } = this.state;
    return (
      <LayoutAdminDashboard user={user}>
        <h2>Manage Tests</h2>
        <Modal size="lg" show={modelshow} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>{editId ? "Edit" : "New"} Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TestForm
              user={user}
              id={editId}
              closeTrigger={this.handleClose}
            />
          </Modal.Body>
        </Modal>
        <DataList
          data={data}
          headings={[
            { id: "#" },
            { name: "Name" },
            { price: "Price" },
            { status: "Status" },
          ]}
          pagecallback={this.loaddata}
          sourcemapper={{ status: { true: "Published", false: "Draft" } }}
          buttons={[
            {
              type: "button",
              label: "Edit",
              onclick: this.edit,
              variant: "outline-success",
              key: "id",
            },
            {
              type: "link",
              label: "Manage Questions",
              link: "/admin/admissions/tests/$id",
              variant: "success",
              replacetokens: { $id: "id" },
            },
          ]}
        />
      </LayoutAdminDashboard>
    );
  }
}

export default withCookies(withRouter(ManageTest));
