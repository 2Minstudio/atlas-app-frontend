import Image from "next/image";
import React from "react";
import Link from "next/link";
import Router, { withRouter } from "next/router";
import Logo from "../components/common/logo/logo";
import Layout from "../components/layout/index";
import styles from "../styles/Home.module.css";
import { isLoggedin, isClientLoggedin } from "../helpers/helper";
import Toast from "react-bootstrap/Toast";
import Alert from "react-bootstrap/Alert";
import { withCookies } from "react-cookie";

class Login extends React.Component {
  state = {
    error: {},
  };

  componentDidMount() {
    const token = isClientLoggedin(this.props);
    if (token) {
      Router.push("/course/welcome");
    }
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

    const response = await fetch("/api/login", options);
    const result = await response.json();
    console.log("Login", result);
    if (!result.state) {
      const error = {};
      Object.keys(result.data).map((key) => {
        error[key] = result.data[key];
      });
      this.setState({ error: error });
    } else {
      this.props.router.push("/course/welcome");
    }
  };

  render() {
    const { error } = this.state;
    return (
      <Layout type="guest">
        <div className={styles}>
          <main className={styles.main}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6">
                  <div className="container-sm winheight">
                    <div className="row align-items-center">
                      <div className="col-12 col-sm-12 col-md-10 col-lg-8 py-5 mb-5 mx-auto">
                        <Logo />

                        <h2 className="mb-2 mt-5">Welcome Back!!</h2>
                        <h4 className="mb-5">Please sign in to your account</h4>
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
                        <form
                          className="pe-0"
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
                              placeholder="Email"
                              required
                            ></input>
                            {error?.email && (
                              <Alert variant="danger" className="error alert">
                                {error.email}
                              </Alert>
                            )}
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
                            {error?.password && (
                              <Alert variant="danger" className="error alert">
                                {error.password}
                              </Alert>
                            )}
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
                                  <Link href={"/forgot-password"}>
                                    Forgot Password?
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="row text-center justify-content-center">
                            <button
                              type="submit"
                              className="btn btn-success rounded-pill mt-5 col-8 col-sm-5 col-md-6 col-lg-5 align-middle mt-5 mb-3"
                            >
                              {" "}
                              Signin
                            </button>

                            <p className="small-text-14 mt-0">
                              New on our platform?{" "}
                              <Link href={"/register"}>Create an account</Link>
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
                <div className="col-12 col-sm-12 col-md-6 greyGrad d-flex align-items-end">
                  <div className="container-sm">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 col-xxl-7 d-none d-md-block mx-auto">
                      <Image
                        className="img-fluid"
                        width={797}
                        height={1393}
                        alt="Welcome Image"
                        src="/image/healthcare-workers-prevent-virus-insurance-medicine-concept-cheerful-smiling-beautiful-doctor-fe.png"
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

Login.getInitialProps = async (ctx) => {
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
export default withCookies(withRouter(Login));
