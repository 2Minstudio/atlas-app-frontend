import React from "react";
import { withCookies } from "react-cookie";
import { withRouter } from "next/router";
import LayoutDashboard from "../../components/layout/layout-dashboard";
class Admin extends React.Component {
  async componentDidMount() {
    const response = await Action();
    console.log(response);
    // const {cookies} =this.props;
    // Router.push("/");
  }
  render() {
    return <LayoutDashboard><h1>Welcome to admin dashboard</h1></LayoutDashboard>;
  }
}

export default withCookies(withRouter(Admin));
