import Image from "next/image";
import React from "react";
import Layout from "../../components/layout/index";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Router, { withRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faVideo,
  faStar,
  faSuitcaseMedical,
} from "@fortawesome/free-solid-svg-icons";

import { withCookies } from "react-cookie";
import {
  isLoggedin,
  isClientLoggedin,
  getUser,
  getTest,
} from "../../helpers/helper";

class CourseWelcome extends React.Component {
  state = {
    user: {},
    test: {}
  };

  async componentDidMount() {
    const token = isClientLoggedin(this.props);
    if (token) {
      const {
        state,
        data: { user },
      } = await getUser(token);

      if (state) {
        const { data: test } = await getTest(1);
        this.setState({ user, test });
      }
    } else {
      Router.push("/");
    }
  }
  render() {
    const { user, test } = this.state;
    const { first_name } = user;
    return (
      <Layout type="user" user={user}>
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
                      <li className="mb-2 position-relative">
                        <Image
                          className="img-fluid"
                          alt="Doctor Image"
                          src="/image/Group%20224.svg"
                          height="70"
                          width="70"
                        />
                        <p className="position-absolute top-50 start-0 translate-middle-y ps-5 ms-5">
                          Get An Invite & Buy The Chiropractor Course
                        </p>
                      </li>
                      <li className="mb-2 position-relative">
                        <Image
                          className="img-fluid"
                          alt="Doctor Image"
                          src="/image/Group%20225.svg"
                          height="70"
                          width="70"
                        />
                        <p className="position-absolute top-50 start-0 translate-middle-y ps-5 ms-5">
                          Unlock 400hrs of Study Material
                        </p>
                      </li>
                      <li className="mb-2 position-relative">
                        <Image
                          className="img-fluid"
                          alt="Doctor Image"
                          src="/image/Group%20223.svg"
                          height="70"
                          width="70"
                        />
                        <p className="position-absolute top-50 start-0 translate-middle-y ps-5 ms-5">
                          Get Live Hands-on Training{" "}
                        </p>
                      </li>
                      <li className="mb-2 position-relative">
                        <Image
                          className="img-fluid"
                          alt="Doctor Image"
                          src="/image/Group%20222.svg"
                          height="70"
                          width="70"
                        />
                        <p className="position-absolute top-50 start-0 translate-middle-y ps-5 ms-5">
                          6 Months of Paid Internship
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 p-2 p-sm-4 p-md-5">
                    <div className="row align-items-center whyjoinBg h-100">
                      <div className="rounded-10">
                        <p className="text-center py-5">
                          Cost of the {test?.name}
                        </p>

                        <div className="row mb-4">
                          <div className="col-6 text-center">
                            <p className="text-success">
                              {" "}
                              <b>Rs {test?.price}</b>
                            </p>
                            <p>
                              <del>Rs {test?.final_price}</del>
                            </p>
                          </div>
                          <div className="col-6 text-center">
                            <p>
                              {" "}
                              {test?.discount}% Off<br></br>
                              <span className="small-text-12">
                                + Applicable taxes
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="row justify-content-center mb-3 mt-5">
                          <Link href={"/course/test"} legacyBehavior>
                            <button className="btn btn-success rounded-pill col-10 col-sm-8 col-lg-6 col-xl-5">
                              Take {test?.name}
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
      </Layout>
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
