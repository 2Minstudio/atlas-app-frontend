import React from "react";
import Image from "next/image";
import Link from "next/link";
import LayoutGuest from "../components/layout/layoutGuest";
import styles from "../styles/Home.module.css";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import { verifyToken } from "../helpers/helper";
import Alert from "react-bootstrap/Alert";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faVideo,
  faStar,
  faSuitcaseMedical,
} from "@fortawesome/free-solid-svg-icons";

class ResetPassword extends React.Component {
  state = {
    error: {},
    showinfo: false,
    istokenvalid: false,
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { error } = this.state;

    const {
      confirm_password: { value: confirm_password },
      new_password: { value: new_password },
    } = event.target;
    console.log(
      confirm_password,
      new_password,
      "confirm_password != new_password"
    );
    if (confirm_password != new_password) {
      this.setState({
        error: {
          ...error,
          validation: "Password and confirm password doesn't match!",
        },
      });
      console.log("error page");
      return false;
    }
    const { token } = this.state;
    const data = {
      new_password: new_password,
      token: token,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch("/api/resetpassword", options);
    const result = await response.json();
    if (!result.state) {
      const error = {};
      Object.keys(result.data).map((key) => {
      error[key] = result.data[key];
      });
      this.setState({ error: error });
    } else {
      this.setState({ showinfo: true });
    }
  };

  componentDidMount() {
    const { token, istokenvalid } = this.props;
    this.setState({
      token,
      istokenvalid,
    });
  }
  render() {
    const { error, istokenvalid, showinfo } = this.state;
    console.log(error, typeof error, "error");

    Object.keys(error).map((err) => {
      console.log("error", error[err]);
    });
    return (
      <LayoutGuest>
        <div className={styles}>
          <main className={styles.main}>
          <div className="container-fluid ">
              <div className="row winheight">
              <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center">
                <div className="container-sm">
                <div className="row align-items-center">
                  <div className="col-12 col-sm-12 col-md-6 mb-5 pt-5 mx-auto">
                    <Image
                      width="120"
                      height="65"
                      className="Img-fluid myLogoLp"
                      alt="logo"
                      src="/image/logo.png"
                    ></Image>
                    <b className="text-success">Academy</b>

                    <h2 className="mb-5 mt-5">Reset Password</h2>
                    {istokenvalid && !showinfo && (
                      <>
                        {error &&
                          Object.keys(error).map((err) => {
                            return (
                              <>
                                <Alert variant="danger" className="error alert">
                                  {error[err]}
                                </Alert>
                              </>
                            );
                          })}
                        <h4 className="mb-5">
                          Enter your new password to update your account.
                        </h4>
                        <form method="post" onSubmit={this.handleSubmit}>
                          <div className="mb-3">
                            <input
                              name="new_password"
                              required
                              type="password"
                              className="form-control border-0 border-bottom border-dark rounded-0"
                              id="exampleFormControlInput1"
                              placeholder="New Password"
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              name="confirm_password"
                              required
                              type="password"
                              className="form-control border-0 border-bottom border-dark rounded-0"
                              id="exampleFormControlInput2"
                              placeholder="Confirm Password"
                            />
                          </div>

                          <div className="row text-center justify-content-center">
                            <button
                              type="submit"
                              className="btn btn-success rounded-pill mt-5 col-8 col-sm-5 col-md-6 col-lg-5 align-middle my-5"
                            >
                              Update Password
                            </button>
                            <p className="small-text-14 mt-0">
                              <Link href={"login"}>
                                <a>Back to Login</a>
                              </Link>
                            </p>
                          </div>
                        </form>
                      </>
                    )}
                    {!istokenvalid && (
                      <>
                        Sorry! Your token is not valid,{" "}
                        <Link href={"/login"}>
                          <a>click here to Login</a>
                        </Link>
                        <br />
                      </>
                    )}
                    {showinfo && (
                      <>
                        Your password has been Updated,
                        <Link href={"/login"}>
                          <a>click here to Login</a>
                        </Link>
                      </>
                    )}
                  </div>
                  
                  </div> {/* End container 1 */}
                </div>{/* End row 1 */}
              </div>{/* End col 1 */}
              <div className="col-12 col-sm-12 col-md-6 greyGrad d-flex align-items-end">
                <div className="container-sm">
                <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 col-xxl-9 d-none d-md-block mx-auto">
                      <Image
                        className="img-fluid"
                        width={2786}
                        height={3660}
                        alt="Welcome Image"
                        src="/image/healthcare-workers-prevent-virus-insurance-medicine-concept-smiling-attractive-female-doctor-nurse-blue-scrubs-pointing-fingers-left-show-patients-advertisement-important-info.png"
                      ></Image>
                    </div>
                </div>
              </div>
              {/* End container 2 */}
            </div>{/* End col 2 */}
            </div>
          </main>
        </div>
      </LayoutGuest>
    );
  }
}

ResetPassword.getInitialProps = async (ctx) => {
  const {
    query: { token },
  } = ctx;
  const tokenisvalid = await verifyToken(token);

  return { token: token, istokenvalid: tokenisvalid };
};

export default withCookies(withRouter(ResetPassword));
