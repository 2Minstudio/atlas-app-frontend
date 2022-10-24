import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hamburger from "./hambuger";
import styles from "../../styles/Home.module.css";
import Logo from "./logo/logo";

const Header = () => {
  return (
    <header className="bg-light pb-1">
      <div className="container pt-5">
        <div className="d-flex flex-column flex-md-row align-items-center pb-2 mb-4 border p-2 border-opacity-10 rounded-pill shadow-sm bg-white">
          <Logo/>
          <p className="pt-3 ms-md-auto pe-4 text-success">
            <ul className="nav align-items-center">
              <li className="nav-item mdClose">
                <Link href={"/course/test"}>
                  <a className="nav-link active" aria-current="page">
                    Take Eligibility Test
                  </a>
                </Link>
              </li>
              <li className="nav-item mdClose">
                <Link href={"tel:+916382143394"}>
                  <a className="nav-link"> Enquire Now </a>
                </Link>
              </li>
              <li className="nav-item mdClose">
                <Link href={"login"}>
                  <a className="nav-link">
                    <button className="btn px-4 btn-md btn-outline-success rounded-pill">
                      Login
                    </button>
                  </a>
                </Link>
              </li>
              <li className="nav-item mdClose">
                <Link href={"register"}>
                  <a className="nav-link" href="#">
                    <button className="btn px-4 btn-md btn-success rounded-pill">
                      {" "}
                      Sign Up{" "}
                    </button>
                  </a>
                </Link>
              </li>
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
