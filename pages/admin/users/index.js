import React from "react";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import LayoutAdminDashboard from "../../../components/layout/layoutAdminDashboard";
import { isClientLoggedin, getUser } from "../../../helpers/helper";

class Users extends React.Component {
  state = {};
  async componentDidMount() {
    const token = isClientLoggedin(this.props);
    if (token) {
      const {
        state,
        data: { user },
      } = await getUser(token);
      if (state) {
        this.setState({ user });
      }
    } else {
      Router.push("/");
    }
  }
  render() {
    const { user } = this.state;
    return (
      <LayoutAdminDashboard user={user}>Coming soon Users</LayoutAdminDashboard>
    );
  }
}

export default withCookies(withRouter(Users));
