import Link from "next/link";
import React from "react";
import Hamburger from "./hambuger";
import Logo from "./logo/logo";
import { Logout } from "../../helpers/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const { user = {} } = props;
  return (
    <header class= " header bg-light pb-1">
      <div className="container pt-5">
        <div className="d-flex d-flex justify-content-between align-items-center pb-2 mb-4 border p-2 border-opacity-10 rounded-pill shadow-sm bg-white">
        <Logo />       
<nav class="navigation pe-3">

<input type="checkbox" className="toggle-menu"></input>
<div className="hamburger"></div>
<ul class="nav-menu">
<li class="nav-item">
<Link href={"/course/test"}>
<a class="nav-link active" aria-current="page"> Take Eligibility Test </a>
</Link>
</li>
<li class="nav-item">
<a href="#" class="nav-link"> Enquire Now  </a>
</li>
<li class="nav-item">
<a href="#" class="nav-link"> <button className="btn px-4 btn-md btn-outline-success rounded-pill">
                          Login
                        </button> </a>
</li>
<li class="nav-item">
<a href="#" class="nav-link">  <button className="btn px-4 btn-md btn-success rounded-pill">
                          {" "}
                          Sign Up{" "}
                        </button> </a>
</li>
</ul>
</nav>
</div>
</div>
</header>
  );
};

export default Header;
