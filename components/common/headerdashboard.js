import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "./logo/logodashboard";
import { Logout } from "../../helpers/helper";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

class Headerdashboard extends React.Component {
  state = {
    user: {},
  };
  componentDidMount() {
    const { user } = this.props;
    this.setState({ user });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { user } = prevState;
    if (nextProps.user !== user) {
      return { user: nextProps.user };
    }
    return null;
  }
  render() {
    const {
      user: { first_name },
    } = this.state;

    return (
      <>
        <header class=" header bg-grey p-0">
          <div className="container pt-5">
            <div className="d-flex">
              <div className="col col-md-3 col-lg-2 ps-2">
                <Logo />
              </div>
              <div className="col col-md-9 col-lg-10 bg-white rounded-top-25 d-flex justify-content-end">
                <Navbar collapseOnSelect expand="lg">
                  <Navbar.Toggle
                    className="me-3"
                    aria-controls="responsive-navbar-nav"
                  />
                  <Navbar.Collapse
                    className=" justify-content-end"
                    id="responsive-navbar-nav"
                  >
                    <Nav>
                      <Nav.Link href="#" className="nav-link">
                        Community
                      </Nav.Link>
                      <Nav.Link href="#" className="nav-link">
                        {" "}
                        <span className="text-dark">{first_name}</span>{" "}
                        <FontAwesomeIcon
                          className="AuserNoMargin text-primary position-relative"
                          icon={faCircleUser}
                        />
                        <span className="Indicator position-absolute translate-left p-1 bg-success border border-light rounded-circle">
                          <span className="visually-hidden">New alerts</span>
                        </span>{" "}
                      </Nav.Link>
                      <Nav.Link onClick={() => Logout()}>
                        Logout
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </div>
          </div>
        </header>

        {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container className=" my-5 border-radius-60 pb-2 mb-4 border p-2 border-opacity-10 shadow-sm bg-white">
            <Navbar.Brand className="py-1 ps-3" href="#home">
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle
              className="me-3"
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse
              className=" justify-content-end"
              id="responsive-navbar-nav"
            >
              <Nav>
                <Nav.Link href="#" className="nav-link">
                  Community
                </Nav.Link>
                <Nav.Link href="#" className="nav-link">
                  {" "}
                  <span className="text-dark">{first_name}</span>{" "}
                  <FontAwesomeIcon
                    className="AuserNoMargin text-primary position-relative"
                    icon={faCircleUser}
                  />
                  <span className="Indicator position-absolute translate-left p-1 bg-success border border-light rounded-circle">
                    <span className="visually-hidden">New alerts</span>
                  </span>{" "}
                </Nav.Link>
                <Nav.Link href={"#"} onClick={() => Logout()}>
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}
      </>
    );
  }
}

export default Headerdashboard;
