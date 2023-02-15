import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "./logo/logo";
import { Logout } from "../../helpers/helper";
import { config } from "../../config/config";

function MenuBar(props) {
  const { user = {} } = props;
  const roleId = user?.groups && user?.groups[0];
  const roleName = roleId && config?.roles[roleId]?.name;

  return (
    <>
      <Navbar key={"lg"} bg="light" expand={"lg"} className="header pb-1">
        <Container className="d-flex d-flex justify-content-between align-items-center mb-4 border p-3 border-opacity-10 rounded-pill shadow-sm bg-white">
          <Navbar.Brand href="#">
            <Logo />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                ATLAS Academy
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end d-flex align-items-center flex-grow-1 pe-3">
                {roleName !== "admin" && (
                  <>
                    <Nav.Link
                      href={"/register"}
                      className=""
                      aria-current="page"
                    >
                      <b>Take Eligibility Test</b>
                    </Nav.Link>
                    <Nav.Link href="#" className="">
                      <b>Enquire Now </b>
                    </Nav.Link>
                  </>
                )}
                {!user?.first_name && (
                  <>
                    <Nav.Link href="/login">
                      <Button  className="btn px-4 btn-md btn-outline-success rounded-pill"
                      variant="outline-success">
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
                    <FontAwesomeIcon
                      className="AuserNoMargin text-primary position-relative"
                      icon={faCircleUser}
                    >{user.first_name}</FontAwesomeIcon>

                    <NavDropdown
                      title={user.first_name}
                      id={`offcanvasNavbarDropdown-expand-lg`}
                    >
                      <NavDropdown.Item href="#action3">
                        My Account
                      </NavDropdown.Item>
                      {roleName == "admin" && (
                        <>
                          <NavDropdown.Item href={"/admin"}>
                            <b>Admin Dashboard</b>
                          </NavDropdown.Item>
                        </>
                      )}
                      {roleName == "student" && (
                        <>
                          <NavDropdown.Item href={"/dashboard"}>
                            <b>Dashboard</b>
                          </NavDropdown.Item>
                        </>
                      )}

                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#" onClick={() => Logout()}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MenuBar;
