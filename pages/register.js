import Image from "next/image";
import Link from "next/link";
import React from "react";
import Router, { withRouter } from "next/router";
import Logo from "../components/common/logo/logo";
import LayoutGuest from "../components/layout/layoutGuest";
import styles from "../styles/Home.module.css";
import { isLoggedin } from "../helpers/helper";
import Alert from "react-bootstrap/Alert";
import { withCookies } from "react-cookie";
class Register extends React.Component {
  state = {
    error: {},
  };
  async getInitialProps(ctx) {
    const token = await isLoggedin(ctx.req);
    if (token) {
      if (ctx.res) {
        ctx.res.writeHead(302, {
          Location: "/course/welcome",
          "Content-Type": "text/html; charset=utf-8",
        });
        ctx.res.end();
      } else {
        Router.push("/course/welcome");
      }
    }
    return { token: token };
  }

  componentDidMount() {
    const { cookies } = this.props;
    const token = cookies.get("atlastoken");
    if (token) {
      Router.push("/course/welcome");
    }
  }

  handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    const {
      target: { agree, first_name, email, phone_number, password },
    } = event;

    const is_agreed = agree && agree.checked;
    if (!is_agreed) {
      //raise error for registrations
      alert("Please agree to proceed further");
      return;
    }
    // Get data from the form.
    const data = {
      first_name: first_name.value,
      email: email.value,
      phone_number: phone_number.value,
      password: password.value,
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
    const response = await fetch("/api/register", options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    console.log(result);
    if (!result.state) {
      const error = {};
      Object.keys(result.data).map((key) => {
        // console.log("error", key, result.data[key][0]);
        error[key] = result.data[key][0];
      });
      this.setState({ error: error });
    } else {
      this.props.router.push("/course/payment");
    }
    // alert(`Is this your full name: ${result.data}`);
  };

  render() {
    const { error } = this.state;
    return (
      <LayoutGuest>
        <div className={styles}>
          <main className={styles.main}>
            <div className="container-fluid">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12 col-sm-6 col-md-6 py-5">
                    <Logo align="left" />
                    <h2 className="mb-5">
                      Get 6 Months of Paid Internship After Finishing The
                      Course.
                    </h2>
                    <h4 className="mb-5">Signup & Get Started!</h4>
                    {error?.non_field_errors && (
                      <Alert variant="danger" className="error alert">
                        {error.non_field_errors}
                      </Alert>
                    )}
                    <form
                      action="/api/register"
                      method="post"
                      onSubmit={this.handleSubmit}
                    >
                      <div className="mb-3">
                        <input
                          name="first_name"
                          type="text"
                          className="form-control border-0 border-bottom border-dark rounded-0"
                          id="first_name"
                          placeholder="First name"
                          required
                        />
                        {error?.first_name && (
                          <Alert variant="danger" className="error alert">
                            {error.first_name}
                          </Alert>
                        )}
                      </div>
                      <div className="mb-3">
                        <input
                          name="email"
                          type="email"
                          className="form-control border-0 border-bottom border-dark rounded-0 mt-4"
                          id="email"
                          placeholder="Email"
                          required
                        />
                        {(error?.email || error?.username) && (
                          <Alert variant="danger" className="error alert">
                            {error.email}
                            {error.username}
                          </Alert>
                        )}
                      </div>
                      <div className="mb-3">
                        <input
                          name="phone_number"
                          type="text"
                          className="form-control border-0 border-bottom border-dark rounded-0 mt-4"
                          id="phone_number"
                          placeholder="Phone Number"
                          required
                        ></input>
                        {error?.phone_number && (
                          <Alert variant="danger" className="error alert">
                            {error.phone_number}
                          </Alert>
                        )}
                      </div>
                      <div className="mb-3">
                        <input
                          name="password"
                          type="password"
                          className="form-control border-0 border-bottom border-dark rounded-0 mt-4"
                          id="password"
                          placeholder="Password"
                          required
                        ></input>
                        {error?.password && (
                          <Alert variant="danger" className="error alert">
                            {error.password}
                          </Alert>
                        )}
                      </div>

                      <div className="form-check small-text-14 mt-5">
                        <input
                          name="agree"
                          className="form-check-input"
                          type="checkbox"
                          value="yes"
                          id="flexCheckDefault"
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          I agree to <a href="#">privacy policy</a> &{" "}
                          <a href="#">terms conditions</a>
                        </label>
                      </div>

                      <div className="row text-center justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success rounded-pill mt-5 col-8 col-sm-5 col-md-6 col-lg-5 align-middle my-5"
                        >
                          {" "}
                          Signup
                        </button>

                        <p className="small-text-14 mt-0">
                          Already have an account?{" "}
                          <Link href={"/login"}>
                            <a>Sign in instead</a>
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 d-none d-md-block">
                    <Image
                      width="797"
                      height="1080"
                      className="img-fluid"
                      alt="Register Image"
                      src="/image/landingpg/register.png"
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

export default withCookies(withRouter(Register));
