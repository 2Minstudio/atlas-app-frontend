import Image from "next/image";
import React from "react";

import styles from "../../styles/Home.module.css";


const Header = () => {
  return (
    <header class="bg-light pb-1">
      
  <div class="container pt-5">
     
      <div class="d-flex flex-column flex-md-row align-items-center pb-2 mb-4 border p-2 border-opacity-10 rounded-pill shadow-sm bg-white">
          <a href="index.html" class="d-flex align-items-center text-dark text-decoration-none">
            <Image width="100" height="100" class="ps-5 myLogo" alt="Logo" src="/image/logo.png"/> 
            <span class="pt-4 text-success"><b>Academy</b></span>
          </a>

          <p class="pt-3 ms-md-auto pe-4 text-success">
            <ul class="nav">
              <li class="nav-item"><a class="nav-link active" aria-current="page" href="#"> Take Eligibility Test </a></li>
              <li class="nav-item"><a class="nav-link" href="#"> Enquire Now </a></li>
              <li class="nav-item"><a class="nav-link" href="#"><button class="btn px-4 btn-md btn-outline-success rounded-pill"> Login </button></a></li>
              <li class="nav-item"><a class="nav-link" href="#"><button class="btn px-4 btn-md btn-success rounded-pill"> Sign Up </button></a></li>
            </ul>
          </p>

        </div>
        </div>
       

    </header>
  );
};

export default Header;
