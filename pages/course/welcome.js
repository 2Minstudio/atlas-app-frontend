import React from "react";
import Link from "next/link";
import LayoutUser from "../../components/layout/layoutUser";
import styles from "../../styles/Home.module.css";

import Router, { withRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faVideo,
  faStar,
  faSuitcaseMedical,
} from "@fortawesome/free-solid-svg-icons";

import { withCookies } from "react-cookie";
import { isLoggedin, isClientLoggedin, getUser } from "../../helpers/helper";

class CourseWelcome extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    const token = isClientLoggedin(this.props);
    if (token) {
      const {
        state,
        data: { user },
      } = await getUser(token);
      if (state) {
        this.setState({ user: user });
      }
    } else {
      Router.push("/");
    }
  }

  render() {
    const { user } = this.state;
    const{ first_name } = user;
    return (
      <LayoutUser user={user}>
        <div className={styles}>
          <main className={styles.main}>
            <div className="container-fluid bg-light p-2 p-sm-3 p-md-5">
              <div className="container bg-white rounded rounded-10">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 p-3 p-sm-4 p-md-5">
                    <h2 className="text-success py-3">Welcome {first_name} </h2>
                    <p className="pb-5">
                      Take the Qualification test to unlock{" "}
                      <b>the chiropractor course</b>
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-5 position-relative">
                        <span className="bg-success rounded rounded-circle AiconHolderbg">
                          <FontAwesomeIcon
                            className="Aicon text-white fa-2x"
                            icon={faUserPlus}
                          />
                        </span>{" "}
                        <p className="position-absolute top-50 start-0 translate-middle-y ps-5 ms-4">
                          Get An Invite & Buy The Chiropractor Course
                        </p>
                      </li>
                      <li className="mb-5 position-relative">
                        <span className="bg-success rounded rounded-circle AiconHolderbg">
                          <FontAwesomeIcon
                            className="Aicon text-white fa-2x"
                            icon={faVideo}
                          />
                        </span>{" "}
                        <p className="position-absolute top-50 start-0 translate-middle-y ps-5 ms-4">
                          Unlock 400hrs of Study Material
                        </p>
                      </li>
                      <li className="mb-5 position-relative">
                        <span className="bg-success rounded rounded-circle AiconHolderbg">
                          <FontAwesomeIcon
                            className="Aicon text-white fa-2x"
                            icon={faStar}
                          />
                        </span>{" "}
                        <p className="position-absolute top-50 start-0 translate-middle-y ps-5 ms-4">
                          Get Live Hands-on Training{" "}
                        </p>
                      </li>
                      <li className="mb-5 position-relative">
                        <span className="bg-success rounded rounded-circle AiconHolderbg">
                          <FontAwesomeIcon
                            className="Aicon text-white fa-2x"
                            icon={faSuitcaseMedical}
                          />
                        </span>{" "}
                        <p className="position-absolute top-50 start-0 translate-middle-y ps-5 ms-4">
                          6 Months of Paid Internship
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 p-2 p-sm-4 p-md-5">
                    <div className="row align-items-center whyjoinBg h-100">
                      <div className="rounded-10">
                      
                        <p className="text-center py-5">
                          Cost of the Eligibility Test
                        </p>
                        
                        
                        <div className="row mb-4">
                          <div className="col-6 text-center">
                            <p className="text-success">
                              {" "}
                              <b>Rs 2000</b>
                            </p>
                            <p>
                              <del>Rs 3500</del>
                            </p>
                          </div>
                          <div className="col-6 text-center">
                            <p>
                              {" "}
                              35% Off<br></br>
                              <span className="small-text-12">
                                + Applicable taxes
                              </span>
                            </p>
                            <p></p>
                          </div>
                        </div>
                        <div className="row justify-content-center mb-3 mt-5">
                        <Link href="/test">
                        
                          <button className="btn btn-success rounded-pill col-10 col-sm-8 col-lg-6 col-xl-5">
                            {" "}
                            Take Eligibility Test{" "}
                          </button>
                          </Link>
                        </div>
                        <div className="row justify-content-center pb-5">
                          <button className="btn-outline-success btn rounded-pill col-10 col-sm-8 col-lg-6 col-xl-5">
                            {" "}
                            Try Sample Test{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </LayoutUser>
    );
  }
}
CourseWelcome.getInitialProps = async (ctx) => {
  const token = await isLoggedin(ctx.req);
  if (!token) {
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: "/",
        "Content-Type": "text/html; charset=utf-8",
      });
      ctx.res.end();
    }
  }

  return { token };
};
export default withCookies(withRouter(CourseWelcome));
