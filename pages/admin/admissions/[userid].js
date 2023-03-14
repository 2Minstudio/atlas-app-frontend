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
import {StudentInfo, PaymentInfo, ResultInfo} from "../../../components/detail";

class Admissions extends React.Component {
  state = {
    user: {},
    userid: null,
  };

  loaddata = async () => {
    const { userid } = this.state;
    console.log("load", userid);
    if (userid) {
      await getAdmissionDetail(userid).then(async (resp) => {
        const { data } = resp;
        this.setState({ data });
      });
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.router !== prevState.router) {
      const {
        router: {
          query: { userid: propuserid },
        },
      } = nextProps;
      return { userid: propuserid };
    } else return null;
  }

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
          //Get student info
          await this.loaddata();
        });
      }
    } else {
      Router.push("/");
    }
  }

  render() {
    const { user, data } = this.state;
    console.log(data, "data?");
    return (
      <LayoutAdminDashboard user={user}>
        <Row>
          <Col>
            <h2>Admission Detail</h2>

            <h4>Student Information</h4>
            <StudentInfo student={data} />
            <h4>Payment History</h4>
            <PaymentInfo transactions={data?.transactions}/>
            <h4>Test Results</h4>
            <ResultInfo results={data?.usertests}/>
          </Col>
        </Row>
      </LayoutAdminDashboard>
    );
  }
}

export default withCookies(withRouter(Admissions));
