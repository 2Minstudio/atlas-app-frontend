import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "./logo/logo";
import { Logout } from "../../helpers/helper";

function MenuBar(props) {
  const { user = {} } = props;
  return (
    <>
      <Navbar key={"lg"} bg="light" expand={"lg"} className="header mb-3 pb-1">
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
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/register">Take Eligibility Test</Nav.Link>
                <Nav.Link href="#">Enquire Now</Nav.Link>
                {!user?.first_name && (
                  <>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Sign Up</Nav.Link>
                  </>
                )}
                {user?.first_name && (
                  <NavDropdown
                    title={user.first_name}
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="#action3">My Account</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">My Dashboard</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Admin</NavDropdown.Item>
                  
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#" onClick={() => Logout()}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
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
