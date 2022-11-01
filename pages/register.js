import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../components/common/logo/logo";
import LayoutGuest from "../components/layout/layoutGuest";
import styles from "../styles/Home.module.css";
import { isLoggedin } from "../helpers/helper";
class Register extends React.Component {
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
    const {
      target: { agree, name, email, phone_number, password },
    } = event;

    const is_agreed = agree && agree.checked;
    if(!is_agreed){
      //raise error for registrations
    }
    // Get data from the form.
    const data = {
      name: name.value,
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
                <div className="row align-items-center">
                  <div className="col-12 col-sm-6 col-md-6 py-5">
                    <Logo align="left" />
                    <h2 className="mb-5">
                      Get 6 Months of Paid Internship After Finishing The
                      Course.
                    </h2>
                    <h4 className="mb-5">Signup & Get Started!</h4>
                    <form
                      action="/api/register"
                      method="post"
                      onSubmit={this.handleSubmit}
                    >
                      <div className="mb-3">
                        <input
                          name="name"
                          type="text"
                          className="form-control border-0 border-bottom border-dark rounded-0"
                          id="name"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          name="email"
                          type="email"
                          className="form-control border-0 border-bottom border-dark rounded-0 mt-4"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          name="phone_number"
                          type="text"
                          className="form-control border-0 border-bottom border-dark rounded-0 mt-4"
                          id="phone_number"
                          placeholder="Phone Number"
                        ></input>
                      </div>
                      <div className="mb-3">
                        <input
                          name="password"
                          type="password"
                          className="form-control border-0 border-bottom border-dark rounded-0 mt-4"
                          id="password"
                          placeholder="Password"
                        ></input>
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
                          className="btn btn-success rounded-pill mt-5 col-5 align-middle my-5"
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
                  <div className="col-12 col-sm-6 col-md-6">
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

export default Register;
