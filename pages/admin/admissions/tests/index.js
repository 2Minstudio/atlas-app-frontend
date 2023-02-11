import React from "react";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import LayoutAdminDashboard from "../../../../components/layout/adminDashboard";
import { isClientLoggedin, getUser } from "../../../../helpers/helper";
import DataList from "../../../../components/datalist";
import { getExams } from "../../../../helpers/admissions";

class ManageTest extends React.Component {
  state = {};

  loaddata = async (page = 1) => {
    const { data, state } = await getExams(page);
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

  render() {
    const { user, data } = this.state;
    return (
      <LayoutAdminDashboard user={user}>
        <h2>Manage Tests</h2>
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
              type: "button",
              label: "Delete",
              onclick: this.deleteConfirm,
              variant: "outline-success",
              key: "id",
            },
            {
              type: "link",
              label: "View",
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
