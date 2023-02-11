import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Logodashboard from "./logo/logodashboard";
import { Logout } from "../../helpers/helper";
import dashboard from "../../pages/dashboard";
class Headerdashboard extends React.Component {
  state = {
    user: {},
  };
  componentDidMount() {
    const { user } = this.props;
    this.setState({ user });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { user } = prevState;
    if (nextProps.user !== user) {
      return { user: nextProps.user };
    }
    return null;
  }
  render() {
    const {
      user: { first_name },
    } = this.state;

    return (
      <header class=" header bg-grey p-0">
        <div className="container pt-5">
          <div className="d-flex">
            <div className="col col-md-3 col-lg-2 ps-2">
              <Logodashboard />
            </div>
            <div className="col col-md-9 col-lg-10 bg-white rounded-top-25 d-flex justify-content-end">
              <nav class="navigation pe-3">
                <input type="checkbox" className="toggle-menu"></input>
                <div className="hamburger"></div>
                <ul class="nav-menu">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Community
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      {" "}
                      <span className="text-dark">{first_name}</span>{" "}
                      <FontAwesomeIcon
                        className="Auser text-primary position-relative"
                        icon={faCircleUser}
                      />
                      <span className="Indicator position-absolute translate-left p-1 bg-success border border-light rounded-circle">
                        <span className="visually-hidden">New alerts</span>
                      </span>{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <Link href={"#"}>
                        <a onClick={() => Logout()}>Logout</a>
                      </Link>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Headerdashboard;
