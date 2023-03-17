import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Table, Stack, Button } from "react-bootstrap";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import LayoutAdminDashboard from "../../../components/layout/adminDashboard";
import { isClientLoggedin, getUser } from "../../../helpers/helper";
import { getAdmissions } from "../../../helpers/admissions";
import DataPagination from "../../../components/datalist/pagination";
import Dropdown from "react-bootstrap/Dropdown";

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
  sendRetry = (id) => {};
  sendReminder = (id) => {};

  render() {
    const { user, data } = this.state;
    return (
      <LayoutAdminDashboard user={user}>
        <Row>
          <Col>
            <h2>Admissions</h2>
          </Col>
        </Row>
        {data && (
          <>
            <Table className="table-hover" responsive="sm">
              <thead>
                <tr>
                  <th className="col">Id</th>
                  <th className="col">Name</th>
                  <th className="col">Payment Status</th>
                  <th className="col">Exam</th>
                  <th className="col">Exam Score </th>
                  <th className="col"></th>
                </tr>
              </thead>
              <tbody>
                {data?.results?.map((d) => {
                  const last_transaction = d?.transactions[0];
                  const is_paid = last_transaction?.status == "success";
                  const is_test_taken = last_transaction?.user_exam?.id;
                  const is_passed = last_transaction?.user_exam?.result;
                  return (
                    <>
                      <tr>
                        <td className="py-3">{d?.id}</td>
                        <td className="py-3">{d?.first_name}</td>
                        <td className="py-3">
                          {last_transaction?.status
                            ? last_transaction?.status
                            : "Not paid"}
                        </td>
                        <td className="py-3">{last_transaction?.exam?.name}</td>
                        <td className="py-3">
                          {last_transaction?.user_exam?.score}
                        </td>
                        <td>
                          {(is_test_taken || is_paid) && (
                            <>
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="success"
                                  id="dropdown-basic"
                                >
                                  Action
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  {is_test_taken && (
                                    <Dropdown.Item onClick={this.sendRetry}>
                                      Send Retry
                                    </Dropdown.Item>
                                  )}
                                  {is_paid && !is_test_taken && (
                                    <Dropdown.Item onClick={this.sendRetry}>
                                      Send Reminder
                                    </Dropdown.Item>
                                  )}

                                  <Dropdown.Item href={`/admin/admissions/${d?.id}`}>
                                    View Result
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </>
                          )}
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
