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
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

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
    const { user } = this.state;

    return (
      <>
        <header class=" header bg-grey p-0">
          <div className="container pt-5">
            <div className="d-flex">
              <div className="col col-md-3 col-lg-2 ps-2">
                <Logo />
              </div>
              <div className="col col-md-9 col-lg-10 bg-white rounded-top-25 d-flex justify-content-end align-items-sm-start align-items-lg-center">
                <>
                  <Navbar
                    key={"lg"}
                    bg=""
                    expand={"lg"}
                    className="header pb-1 rounded-top-25"
                  >
                    <Container className="d-flex d-flex justify-content-between align-items-center mb-4  p-3 border-opacity-10">
                      <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-lg`}
                      />
                      <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                      >
                        <Offcanvas.Header closeButton>
                          <Offcanvas.Title
                            id={`offcanvasNavbarLabel-expand-lg`}
                          >
                          
                          </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                          <Nav className="justify-content-md-end d-flex align-items-sm-start align-items-lg-center flex-grow-1 pe-3">
                            {/* <Nav.Link
                              href={"/register"}
                              className=""
                              aria-current="page"
                            >
                              <b>Take Eligibility Test</b>
                            </Nav.Link>
                            <Nav.Link href="#" className="">
                              <b>Enquire Now </b>
                            </Nav.Link> */}

                            {!user?.first_name && (
                              <>
                                <Nav.Link href="/login">
                                  <Button
                                    variant="outline-success"
                                    className="btn px-4 btn-md rounded-pill"
                                  >
                                    <b>Login</b>
                                  </Button>
                                </Nav.Link>
                                <Nav.Link href="/register">
                                  <Button className="btn px-4 btn-md btn-success rounded-pill">
                                    <b> Sign Up</b>
                                  </Button>
                                </Nav.Link>
                              </>
                            )}
                            {user?.first_name && (
                              <>
                                <Nav.Link>
                                  <FontAwesomeIcon
                                    className="AuserNoMargin text-primary position-relative"
                                    icon={faCircleUser}
                                  />{" "}
                                  <b>{user.first_name}</b>
                                </Nav.Link>

                                <Nav.Link href="/dashboard"><b>Dashboard</b></Nav.Link>

                                <Nav.Link href="#" onClick={() => Logout()}>
                                <b>Logout</b>
                                </Nav.Link>
                              </>
                            )}
                          </Nav>
                        </Offcanvas.Body>
                      </Navbar.Offcanvas>
                    </Container>
                  </Navbar>
                </>

                {/* <Navbar collapseOnSelect expand="lg">
                  <Navbar.Toggle
                    className="me-3"
                    aria-controls="responsive-navbar-nav"
                  />
                  <Navbar.Collapse
                    className=" justify-content-end"
                    id="responsive-navbar-nav"
                  >
                    <Nav className=" pt-3 pe-5">
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
                </Navbar> */}
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
