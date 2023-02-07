import Link from "next/link";
import React, { useState } from "react";
import Hamburger from "./hambuger";
import Logo from "./logo/logo";
import { Logout } from "../../helpers/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { config } from "../../config/config";
const Header = (props) => {
  const { user = {} } = props;
  const roleId = user?.groups && user?.groups[0];
  const roleName = roleId && config?.roles[roleId]?.name;

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className=" my-5 border-radius-60 pb-2 mb-4 border p-2 border-opacity-10 shadow-sm bg-white">
        <Navbar.Brand className="py-1 ps-3" href="#home">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle className="me-3" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end p-0 m-0"
          id="responsive-navbar-nav"
        >
          <Nav className="align-items-center">
            {roleName == "admin" ? (
              <>
                <Nav.Link href={"/admin"} className="position-relative mt-n5" aria-current="page">
                <b>admin</b>
                </Nav.Link>
              </>
            ) : (
              <>
                {roleName == "student" && (
                  <Nav.Link
                    href={"/dashboard"}
                    className=""
                    aria-current="page"
                  >
                   <b> Dashboard</b>
                  </Nav.Link>
                )}
                <Nav.Link href={"/register"} className="" aria-current="page">
                <b>Take Eligibility Test</b>
                </Nav.Link>
                <Nav.Link href="#" className="">
                  {" "}
                  <b>Enquire Now{" "}</b>
                </Nav.Link>
              </>
            )}
            {!user?.first_name && (
              <>
                <Nav.Link href={"/login"} >
                  <button className="btn px-4 btn-md btn-outline-success rounded-pill">
                    <b>Login</b>
                  </button>
                </Nav.Link>
                <Nav.Link href={"/register"} >
                  <button className="btn px-4 btn-md btn-success rounded-pill">
                   <b> Sign Up</b>
                  </button>
                </Nav.Link>
              </>
            )}
            {user?.first_name && (
              <>
                <Nav.Link href={"#"} >
                  <b>{user.first_name} </b>
                  <FontAwesomeIcon
                    className="AuserNoMargin text-primary position-relative"
                    icon={faCircleUser}
                  />
                </Nav.Link>

                <Nav.Link
                  href={"#"}
                  onClick={() => Logout()}
                  className="me-2"
                >
                  <b>Logout</b>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
