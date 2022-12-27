import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hamburger from "./hambuger";
import styles from "../../styles/Home.module.css";
import Logo from "./logo/logo";
import { Logout } from "../../helpers/helper";

const Header = (props) => {
  const { user = {} } = props;
  return (
    <header className="bg-light pb-1">
      <div className="container pt-5">
        <div className="d-flex flex-column flex-sm-row align-items-center pb-2 mb-4 border p-2 border-opacity-10 rounded-pill shadow-sm bg-white">
          <Logo />
          <p className="pt-3 ms-sm-auto pe-4 text-success">
            <ul className="nav align-items-center">
              <li className="nav-item mdClose">
                <Link
                  href={"/course/test"}
                  className="nav-link active"
                  aria-current="page"
                >
                  Take Eligibility Test
                </Link>
              </li>
              <li className="nav-item mdClose">
                <Link href={"tel:+916382143394"} className="nav-link">
                  Enquire Now
                </Link>
              </li>
              {Object.keys(user).length == 0 && (
                <>
                  <li className="nav-item mdClose">
                    <Link href={"login"} className="nav-link">
                      <button className="btn px-4 btn-md btn-outline-success rounded-pill">
                        Login
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item mdClose">
                    <Link href={"register"} className="nav-link">
                      <button className="btn px-4 btn-md btn-success rounded-pill">
                        {" "}
                        Sign Up{" "}
                      </button>
                    </Link>
                  </li>
                </>
              )}
              {Object.keys(user).length > 0 && (
                <>
                  <li>
                    <Link href={"/profile"} className="nav-link">
                      {user.first_name}
                    </Link>
                  </li>
                  <li>
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
              <li className="nav-item mdOpen">
                <Hamburger></Hamburger>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
