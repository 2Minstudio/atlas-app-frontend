import React from "react";
import { withCookies } from "react-cookie";
import Router, { withRouter } from "next/router";
import { isClientLoggedin, getUser } from "../../helpers/helper";
import LayoutAdminDashboard from "../../components/layout/adminDashboard";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
      <LayoutAdminDashboard user={user} paths={paths}>
        <h2 className="pb-4">Welcome to admin dashboard</h2>
        <Row xs={1} md={3} className="g-4">
          {[
            "Primary",
            "Secondary",
            "Success",
            "Danger",
            "Warning",
            "Info",
            "Light",
            "Dark",
          ].map((variant) => (
            <Col key={variant}>
              <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === "light" ? "dark" : "white"}
                style={{ width: "18rem" }}
                className="mb-2"
              >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>{variant} Card Title </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </LayoutAdminDashboard>
    );
  }
}

export default withCookies(withRouter(Admin));
