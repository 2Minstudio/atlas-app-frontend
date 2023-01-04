import Link from "next/link";
import React, { useState } from "react";
import Hamburger from "./hambuger";
import Logo from "./logo/logo";
import { Logout } from "../../helpers/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const { user = {} } = props;
  console.log(user, "user");
  return (
    <header className=" header bg-light pb-1">
      <div className="container pt-5">
        <div className="d-flex d-flex justify-content-between align-items-center mb-4 border p-3 border-opacity-10 rounded-pill shadow-sm bg-white">
          <Logo />
          <nav className="navigation pe-1">
            <input type="checkbox" className="toggle-menu"></input>
            <div className="hamburger"></div>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link
                  href={"/register"}
                  className="nav-link active"
                  aria-current="page"
                >
                  Take Eligibility Test
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  {" "}
                  Enquire Now{" "}
                </a>
              </li>
              {!user?.first_name && (
                <>
                  <li className="nav-item">
                    <Link href={"/login"} className="nav-link">
                      <button className="btn px-4 btn-md btn-outline-success rounded-pill">
                        Login
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href={"/register"} className="nav-link">
                      <button className="btn px-4 btn-md btn-success rounded-pill">
                        Sign Up
                      </button>
                    </Link>
                  </li>
                </>
              )}
              {user?.first_name && (
                <>
                  <li className="nav-item">
                    <Link href={"#"} className="nav-link">
                      {user.first_name}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href={"#"}
                      onClick={() => Logout()}
                      className="nav-link"
                    >
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
