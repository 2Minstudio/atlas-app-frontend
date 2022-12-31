import React from "react";
import LayoutDashboard from "../../../../../components/layout/layout-dashboard";
import { isClientLoggedin } from "../../../../../helpers/helper";
import { withCookies } from "react-cookie";
import { withRouter } from "next/router";
class ModuleDetails extends React.Component {
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
      const resp = await getCourses();
      const { data } = resp;
      if (state) {
        this.setState({ user, data });
      }
    } else {
      Router.push("/");
    }
  }
  render() {
    const { user } = this.state;
    return <LayoutDashboard user={user}>Single Module</LayoutDashboard>;
  }
}

export default withCookies(withRouter(ModuleDetails));
