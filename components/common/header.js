import Image from "next/image";
import React from "react";
import Hamburger from "./hambuger";
import styles from "../../styles/Home.module.css";

const Header = () => {
  return (
    <header className="bg-light pb-1">
      <div className="container pt-5">
        <div className="d-flex flex-column flex-md-row align-items-center pb-2 mb-4 border p-2 border-opacity-10 rounded-pill shadow-sm bg-white">
          <a
            href="index.html"
            className="d-flex align-items-center text-dark text-decoration-none"
          ><span className="ps-5">
<Image
              width="120"
              height="65"
              alt="Logo"
              src="/image/logo.png"
            />
          </span>
            
            <span className="pt-4 text-success">
              <b>Academy</b>
            </span>
          </a>

          <p className="pt-3 ms-md-auto pe-4 text-success">
            
            <ul className="nav align-items-center">
            
              <li className="nav-item mdClose">
                <a className="nav-link active" aria-current="page" href="#">
                  {" "}
                  Take Eligibility Test{" "}
                </a>
              </li>
              <li className="nav-item mdClose">
                <a className="nav-link" href="#">
                  {" "}
                  Enquire Now{" "}
                </a>
              </li>
              <li className="nav-item mdClose">
                <a className="nav-link" href="#">
                  <button className="btn px-4 btn-md btn-outline-success rounded-pill">
                    {" "}
                    Login{" "}
                  </button>
                </a>
              </li>
              <li className="nav-item mdClose">
                <a className="nav-link" href="#">
                  <button className="btn px-4 btn-md btn-success rounded-pill">
                    {" "}
                    Sign Up{" "}
                  </button>
                </a>
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
