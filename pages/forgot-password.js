import React from "react";
import Image from "next/image";
import Link from "next/link";
import LayoutGuest from "../components/layout/layoutGuest";
import styles from "../styles/Home.module.css";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import Alert from "react-bootstrap/Alert";

class ForgotPassword extends React.Component {
  state = {
    error: {},
    showinfo: false,
    email: "",
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      email: { value: email },
    } = event.target;

    const data = {
      email: email,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch("/api/forgotpassword", options);
    const result = await response.json();
    if (!result.state) {
      const error = {};
      Object.keys(result.data).map((key) => {
        // console.log("error", key, result.data[key][0]);
        error[key] = result.data[key];
      });
      this.setState({ error: error });
    } else {
      // this.props.router.push("/forgotpassword-info");
      this.setState({ showinfo: true, email });
    }
  };
  render() {
    const { error, showinfo } = this.state;
    return (
      <LayoutGuest>
        <div className={styles}>
          <main className={styles.main}>
            <div className="container-fluid">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12 col-sm-12 col-md-6 mb-5 pt-5">
                    <Image
                      width="120"
                      height="65"
                      className="Img-fluid myLogoLp"
                      alt="logo"
                      src="/image/logo.png"
                    ></Image>
                    <b className="text-success">Academy</b>

                    <h2 className="mb-5 mt-5">Forgot Password?</h2>
                    {!showinfo && (
                      <>
                        <h4 className="mb-5">
                          Enter your email and we&apos;ll send you instructions
                          to reset your password.
                        </h4>
                        <form method="post" onSubmit={this.handleSubmit}>
                          <div className="mb-3">
                            <input
                              name="email"
                              required
                              type="email"
                              className="form-control border-0 border-bottom border-dark rounded-0"
                              id="exampleFormControlInput1"
                              placeholder="Email"
                            />
                            {error?.email && (
                          <Alert variant="danger" className="error alert">
                            {error.email}
                          </Alert>
                        )}
                          </div>

                          <div className="row text-center justify-content-center">
                            <button
                              type="submit"
                              className="btn btn-success rounded-pill mt-5 col-8 col-sm-5 col-md-6 col-lg-5 align-middle my-5"
                            >
                              Send Reset Link
                            </button>
                          </div>
                        </form>
                      </>
                    )}
                    {showinfo && (
                      <>
                        We have sent you instructions to reset your password.
                        <br />
                        check Your email for reset password link.
                      </>
                    )}
                    <div className="row text-center justify-content-center">
                      <p className="small-text-14 mt-0">
                        <Link href={"login"}>
                          <a>Back to Login</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 d-none d-md-block">
                    <Image
                      width="796"
                      height="1095"
                      className="Img-fluid"
                      alt="forgot-image"
                      src="/image/landingpg/forgot.png"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </LayoutGuest>
    );
  }
}

export default withCookies(withRouter(ForgotPassword));
