import Link from "next/link";
import React from "react";
import LayoutUser from "../../components/layout/layoutUser";
import styles from "../../styles/Home.module.css";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import { isLoggedin, isClientLoggedin, getUser } from "../../helpers/helper";
import StopWatch from "../../components/stopwatch/StopWatch";

class Test extends React.Component {
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
    return (
      <LayoutUser user={user}>
        <div className={styles}>
          <main className={styles.main}>
            <div className="container-fluid bg-light p-5">
              <div className="container  rounded rounded-10">
                <div className="row bg-white rounded-10 align-items-center">
                  <div className="col-12 p-5 ">
                    <div className="row border-bottom border-dark mb-5">
                      <div className="col">
                        <p>Chiropractor Course Eligibility Test</p>
                      </div>
                      <div className="col text-center">
                        <p className="pb-0 mb-0">
                          <StopWatch />{" "}
                        </p>
                        <p>
                          <span className="small-text-12">Remaining Time</span>
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <p>1. Here is the 1st question to answer</p>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Option 1
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Option 2
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Option 3
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Option 4
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row text-center justify-content-center">
                    <div className="col">
                      <Link href={"/finalcongratulations"} legacyBehavior>
                        <button className="btn btn-success rounded-pill mt-5 col-5 col-sm-4 col-md-3 align-middle my-5">
                          Submit
                        </button>
                      </Link>
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
Test.getInitialProps = async (ctx) => {
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
export default withCookies(withRouter(Test));
