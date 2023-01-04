import React from "react";
import { withCookies } from "react-cookie";
import Router, { withRouter } from "next/router";
import { isClientLoggedin, getUser } from "../../helpers/helper";
import LayoutDashboard from "../../components/layout/layoutAdminDashboard";
class Admin extends React.Component {
  state = {
    user: {},
  };
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
    const paths = {};
    return (
      <LayoutDashboard user={user} paths={paths}>
        <h1>Welcome to admin dashboard</h1>
      </LayoutDashboard>
    );
  }
}

export default withCookies(withRouter(Admin));
