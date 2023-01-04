import { Logout as Action } from "../helpers/helper";
import React from "react";
import { withCookies } from "react-cookie";
import { withRouter } from "next/router";
class Logout extends React.Component {
    async componentDidMount() {
        const response = await Action();
        console.log(response);
        // const {cookies} =this.props;
        // Router.push("/");
    }
    render(){
        return <>Please wait...</>;
    }
}

export default withCookies(withRouter(Logout));