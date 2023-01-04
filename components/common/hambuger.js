import { fallDown as Menu } from "react-burger-menu";
import React from "react";
import { auto } from "@popperjs/core";
import { isAbsoluteUrl } from "next/dist/shared/lib/utils";
import Link from "next/link";

var styles = {
  bmBurgerButton: {
    position: "relative",
    width: "36px",
    height: "30px",
    right: "0",
    top: "0px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
    position: "absolute",
    marginTop: "85px",
    left: "220px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "absolute",
    height: "100%",
    right: "0%",
    width: "50%",
    minWidth: "280px",
    top: "0",
  },
  bmMenu: {
    background: "#fff",
    padding: "2em 1.5em",
    fontSize: "1.15em",
    height: "auto",
    minHeight: "265px",
    border: "1px solid #ddd",
    position: "absolute",
    marginTop: "75px",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    position: "fixed",
    left: "50%",
    width: "50%",
    top: "0",
    height: auto,
  },
};

class Hamburger extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu styles={styles}>
        <ul className="nav align-items-center">
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
            <Link href={"tel:+916382143394"} className="nav-link">
              Enquire Now
            </Link>
          </li>
          <li>
            <div className="d-grid gap-2 d-sm-block d-md-flex justify-content-md-end">
              <Link href={"login"} className="nav-link">
                <button className="btn col-12 col-sm-12 btn-outline-success rounded-pill">
                  {" "}
                  Login{" "}
                </button>
              </Link>

              <Link href={"register"} className="nav-link">
                <button className="btn col-12 col-sm-12 btn-success rounded-pill">
                  {" "}
                  Sign Up{" "}
                </button>
              </Link>
            </div>
          </li>
        </ul>
      </Menu>
    );
  }
}

export default Hamburger;
