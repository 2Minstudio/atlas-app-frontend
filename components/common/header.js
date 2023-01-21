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
          <Nav className="align-items-lg-center">
            {roleName == "admin" ? (
              <>
                <Nav.Link href={"/admin"} className="" aria-current="page">
                  Admin
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href={"/register"} className="" aria-current="page">
                  Take Eligibility Test
                </Nav.Link>
                <Nav.Link href="#" className="">
                  {" "}
                  Enquire Now{" "}
                </Nav.Link>
              </>
            )}
            {!user?.first_name && (
              <>
                <Nav.Link href={"/login"} className="nav-link">
                  <button className="btn px-4 btn-md btn-outline-success rounded-pill">
                    Login
                  </button>
                </Nav.Link>
                <Nav.Link href={"/register"} className="nav-link">
                  <button className="btn px-4 btn-md btn-success rounded-pill">
                    Sign Up
                  </button>
                </Nav.Link>
              </>
            )}
            {user?.first_name && (
              <>
                <Nav.Link href={"#"} className="nav-link">
                  <b>{user.first_name} </b>
                  <FontAwesomeIcon
                    className="Auser text-primary position-relative"
                    icon={faCircleUser}
                  />
                </Nav.Link>

                <Nav.Link
                  href={"#"}
                  onClick={() => Logout()}
                  className="nav-link"
                >
                  Logout
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
