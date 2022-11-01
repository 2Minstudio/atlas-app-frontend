import Image from "next/image";
import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import Logo from "../components/common/logo/logo";
import LayoutGuest from "../components/layout/layoutGuest";
import styles from "../styles/Home.module.css";
import { isLoggedin } from "../helpers/helper";

class Login extends React.Component {
  static async getInitialProps(ctx) {
    const token = isLoggedin(ctx);
    if (token) {
      ctx.res.writeHead(302, {
        Location: "/course/welcome",
        "Content-Type": "text/html; charset=utf-8",
      });
      ctx.res.end();
    }
    return { token: token };
  }

  handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    // Form the request for sending data to the server.
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch("/api/login", options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    console.log(result);
    if (!result.state) {
      console.log(result.data);
      result.data.each((i) => {
        console.log("error", i);
      });
    } else {
      //redirect to dashbaord
      this.props.router.push("/course/payment");
    }
    // alert(`Is this your full name: ${result.data}`);
  };

  render() {
    return (
      <LayoutGuest>
        <div className={styles}>
          <main className={styles.main}>
            <div className="container-fluid">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 py-5 mb-5">
                    <Logo />

                    <h2 className="mb-2 mt-5">Welcome Back!!</h2>
                    <h4 className="mb-5">Please sign in to your account</h4>
                    <form
                      className="pe-5"
                      action="/api/login"
                      method="post"
                      onSubmit={this.handleSubmit}
                    >
                      <div className="mb-3">
                        <input
                          type="email"
                          name="email"
                          className="form-control border-0 border-bottom border-dark rounded-0"
                          id="email"
                          placeholder="Email or Phone Number"
                          required
                        ></input>
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          name="password"
                          className="form-control border-0 border-bottom border-dark rounded-0 mt-4"
                          id="password"
                          placeholder="Password"
                          required
                        ></input>
                      </div>

                      <div className="form-check small-text-14 mt-5">
                        <div className="row">
                          <div className="col">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            ></input>
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              <a href="#">Remember me</a>
                            </label>
                          </div>
                          <div className="col text-end">
                            <p>
                              <Link href={"forgotpassword"}>
                                <a>Forgot Password?</a>
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="row text-center justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success rounded-pill mt-5 col-5 align-middle my-5"
                        >
                          {" "}
                          Signin
                        </button>

                        <p className="small-text-14 mt-0">
                          New on our platform?{" "}
                          <Link href={"/register"}>
                            <a>Create an account</a>
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6">
                    <Image
                      className="img-fluid"
                      width={797}
                      height={1080}
                      alt="Welcome Image"
                      src="/image/landingpg/welcome.png"
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

export default withRouter(Login);
