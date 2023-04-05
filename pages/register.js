import Image from "next/image";
import Link from "next/link";
import React from "react";
import Router, { withRouter } from "next/router";
import Logo from "../components/common/logo/logo";
import Layout from "../components/layout/index";
import styles from "../styles/Home.module.css";
import { isLoggedin } from "../helpers/helper";
import Alert from "react-bootstrap/Alert";
import { withCookies } from "react-cookie";
class Register extends React.Component {
  state = {
    error: {},
    submited: false,
  };

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
    this.setState({ submited: true });
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
    if (!result.state) {
      const error = {};
      Object.keys(result.data).map((key) => {
        // console.log("error", key, result.data[key][0]);
        error[key] = result.data[key];
      });
      this.setState({ error: error, submited: false });
    } else {
      this.props.router.push(`/verify?email=${encodeURI(email.value)}`);
    }
    // alert(`Is this your full name: ${result.data}`);
  };

  render() {
    const { error, submited } = this.state;
    return (
      <Layout type="guest">
        <div className={styles}>
          <main className={styles.main}>
            <div className="container-fluid">
              <div className="row winheight">
                <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center">
                  <div className="container-sm">
                    <div className="row align-items-center">
                      <div className="col-12 col-sm-12 col-md-10 col-lg-8 pt-5 mb-0 mx-auto">
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
                              disabled={submited}
                            >
                              {submited ? "Please wait..." : "Signup"}
                            </button>

                            <p className="small-text-14 mt-0">
                              Already have an account?{" "}
                              <Link href={"/login"}>Sign in instead</Link>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>{" "}
                    {/* End container 1 */}
                  </div>
                  {/* End row 1 */}
                </div>
                {/* End col 1 */}
                <div className="col-12 col-sm-12 col-md-6 greyGrad d-flex align-items-center">
                  <div className="container-sm">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 col-xxl-12 d-none d-md-block mx-auto">
                      <Image
                        className="img-fluid"
                        width={2663}
                        height={2333}
                        alt="Welcome Image"
                        src="/image/happy-young-woman-sitting-floor-using-laptop-gray-wall.png"
                      ></Image>
                    </div>
                  </div>
                </div>
                {/* End container 2 */}
              </div>
              {/* End col 2 */}
            </div>
          </main>
        </div>
      </Layout>
    );
  }
}

Register.getInitialProps = async (ctx) => {
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
};

export default withCookies(withRouter(Register));
