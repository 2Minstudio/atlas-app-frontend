import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Headerlanding = () => {
  return (
    <headerlanding className="bg-light">
      <div className="container-fluid bg-light pb-1">
        <div className="container pt-5">
          <div className="d-flex flex-column flex-md-row align-items-center pb-2 mb-4 border p-2 border-opacity-10 rounded-pill shadow-sm bg-white">
          <Link href={"/"}>
            <a
              
              className="d-flex align-items-center text-dark text-decoration-none"
            >
              <span className="ps-5">
              <Image
                width="120"
                height="65"
                alt="Logo"
                src="/image/logo.png"
              />{" "}
              </span>
              <span className="pt-4 text-success">
                <b>Academy</b>
              </span>
            </a>
            </Link>
            <p className="pt-3 ms-md-auto pe-4 text-success">
              Community &nbsp; &nbsp; <span className="text-dark">Siddanth</span>{" "}
              <FontAwesomeIcon
                className="Auser text-primary position-relative"
                icon={faCircleUser}
              />
              <span className="Indicator position-absolute translate-left p-1 bg-success border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </headerlanding>
  );
};

export default Headerlanding;
