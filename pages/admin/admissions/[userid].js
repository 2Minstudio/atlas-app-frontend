import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Table, Stack, Button } from "react-bootstrap";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import LayoutAdminDashboard from "../../../components/layout/adminDashboard";
import { isClientLoggedin, getUser } from "../../../helpers/helper";
import { getAdmissionDetail } from "../../../helpers/admissions";
import DataPagination from "../../../components/datalist/pagination";
import Dropdown from "react-bootstrap/Dropdown";
import StudentInfo from "../../../components/detail/student";

class Admissions extends React.Component {
  state = {
    user: {},
    userid: null,
  };

  loaddata = async () => {
    const { userid } = this.state;
    if (userid) {

    }
    if (userid) {
      await getAdmissionDetail(userid).then(async (resp) => {
        const { data } = resp;
        this.setState({ data });
      });
    }
    
  };

  async componentDidMount() {
    const token = isClientLoggedin(this.props);

    const {
      router: {
        query: { userid },
      },
    } = this.props;

    if (token) {
      const {
        state,
        data: { user },
      } = await getUser(token);
      if (state) {
        this.setState({ user, userid }, async () => {
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
        <Row>
          <Col>
            <h2>Admission Detail</h2>
            <h4>Student Information</h4>
            <StudentInfo/>
            <h4>Payment History</h4>
            <h4>Test Results</h4>
          </Col>
        </Row>
        
      </LayoutAdminDashboard>
    );
  }
}

export default withCookies(withRouter(Admissions));
