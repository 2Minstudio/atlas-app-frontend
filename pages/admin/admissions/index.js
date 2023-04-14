import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Table, Stack, Button } from "react-bootstrap";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import LayoutAdminDashboard from "../../../components/layout/adminDashboard";
import { isClientLoggedin, getUser } from "../../../helpers/helper";
import { getAdmissions, sendAction } from "../../../helpers/admissions";
import DataPagination from "../../../components/datalist/pagination";
import Dropdown from "react-bootstrap/Dropdown";
import AutoHideAlert from "../../../components/common/autoHideAlert";

class Admissions extends React.Component {
  state = {};

  loaddata = async (page = 1) => {
    const { data, state } = await getAdmissions(page);
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
  send = async (id, type) => {
    //type = retry, reminder, invite, payment
    const resp = await sendAction(id, type);
    console.log(resp);
    this.setState({ showSuccess: resp?.state });
  };

  render() {
    const { user, data, showSuccess } = this.state;
    return (
      <LayoutAdminDashboard user={user}>
        <Row>
          <Col>
            <h2>Admissions</h2>
          </Col>
        </Row>
        {showSuccess && (
          <AutoHideAlert message={`Notification sentsuccessfully!`} onClose={()=>this.setState({showSuccess:false})} />
        )}
        {data && (
          <>
            <Table className="table-hover" responsive="sm">
              <thead>
                <tr>
                  <th className="col">Id</th>
                  <th className="col">Name</th>
                  <th className="col">Test Status</th>
                  {/* <th className="col">Payment Status</th> */}
                  {/* <th className="col">Exam</th> */}
                  <th className="col">Result </th>
                  <th className="col"></th>
                </tr>
              </thead>
              <tbody>
                {data?.results?.map((d) => {
                  // const tlen = d?.transactions.length;
                  const last_transaction = d?.transactions[0];
                  // console.log("last_transaction", d, last_transaction);
                  const retry = d?.retry_enabled;
                  const is_paid = last_transaction?.status == "success";
                  // const elen = last_transaction?.user_exam.length;
                  const last_exam = last_transaction?.user_exam[0];
                  const is_test_taken = last_exam?.id;
                  const is_passed = last_exam?.result;
                  const result = retry ? "Retry" : is_passed;
                  return (
                    <>
                      <tr>
                        <td className="py-3">{d?.id}</td>
                        <td className="py-3">{d?.first_name}</td>
                        <td>{is_test_taken ? "Submitted" : "Not Taken"}</td>
                        {/* <td className="py-3">
                          {last_transaction?.status
                            ? last_transaction?.status
                            : "Not paid"}
                        </td> */}
                        {/* <td className="py-3">{last_transaction?.exam?.name}</td> */}
                        <td
                          className="py-3"
                          style={{ textTransform: "capitalize" }}
                        >
                          {result}
                        </td>
                        {/* <td className="py-3">
                          {last_transaction?.user_exam?.score}
                        </td> */}
                        <td>
                          {
                            <>
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="success"
                                  id="dropdown-basic"
                                >
                                  Action
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  {is_test_taken &&
                                    !retry &&
                                    result == "fail" && (
                                      <Dropdown.Item
                                        onClick={() => this.send(d.id, "retry")}
                                      >
                                        Send Retry
                                      </Dropdown.Item>
                                    )}
                                  {is_paid && !is_test_taken && (
                                    <Dropdown.Item
                                      onClick={() =>
                                        this.send(d.id, "reminder")
                                      }
                                    >
                                      Send Reminder
                                    </Dropdown.Item>
                                  )}
                                  {result == "pass" && (
                                    <Dropdown.Item
                                      onClick={() => this.send(d.id, "invite")}
                                    >
                                      Send Invite
                                    </Dropdown.Item>
                                  )}
                                  {!is_paid && (
                                    <Dropdown.Item
                                      onClick={() => this.send(d.id, "payment")}
                                    >
                                      Invite to Pay
                                    </Dropdown.Item>
                                  )}
                                  {is_test_taken && (
                                    <Dropdown.Item
                                      href={`/admin/admissions/${d?.id}`}
                                    >
                                      View Result
                                    </Dropdown.Item>
                                  )}
                                </Dropdown.Menu>
                              </Dropdown>
                            </>
                          }
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
              <tfoot>
                <DataPagination
                  pagination={data?.pagination}
                  pagecallback={this.loaddata}
                />
              </tfoot>
            </Table>
          </>
        )}
      </LayoutAdminDashboard>
    );
  }
}

export default withCookies(withRouter(Admissions));
