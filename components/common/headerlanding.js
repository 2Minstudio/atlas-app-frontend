import Image from "next/image";
import React from "react";

import styles from "../../styles/Home.module.css";

const Headerlanding = () => {
  return (
    <header>
      
  <div class="container pt-5">
     
      <div class="d-flex flex-column flex-md-row align-items-center pb-2 mb-4 border p-2 border-opacity-10 rounded-pill shadow-sm bg-white">
          <a href="index.html" class="d-flex align-items-center text-dark text-decoration-none">
            <img width="150px" class="ps-5 myLogo" src="/image/logo.png"/> <span class="pt-4 text-success"><b>Academy</b></span>
          </a>

          <p class="pt-3 ms-md-auto pe-4 text-success">
            Community &nbsp; &nbsp; Siddanth 
          </p>

        </div>
        </div>
       

    </header>
  );
};

export default Header;
