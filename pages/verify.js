import Image from "next/image";
import LayoutGuest from "../components/layout/layoutGuest";
import styles from "../styles/Home.module.css";
import React from "react";
import { withCookies } from "react-cookie";
import Router, { withRouter } from "next/router";
import {
  resendCode,
  verifyCode,
  isLoggedin,
  isClientLoggedin,
} from "../helpers/helper";
import Link from "next/link";

class Verify extends React.Component {
  state = {
    error: {},
  };
  getEmailandCode = () => {
    const {
      router: {
        query: { email, code = "" },
      },
    } = this.props;
    return { email, code };
  };

  resendEmail = async () => {
    const { email, code } = this.getEmailandCode();
    resendCode(email);
  };

  componentDidMount() {
    const token = isClientLoggedin(this.props);
    if (token) {
      Router.push("/course/welcome");
    }
    const { email, code } = this.getEmailandCode();
    if (!email) {
      Router.push("/");
    }
  }

  render() {
    const { email, code } = this.getEmailandCode();
    const { verifystatus = {} } = this.props;

    return (
      <LayoutGuest>
        <div className={styles}>
          <main className={styles.main}>
            <div className="container-fluid">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12 col-sm-12 col-md-6 mb-5 pt-5">
                    <Image
                      className="img-fluid myLogoLp"
                      alt="Logo"
                      width="120"
                      height="65"
                      src="/image/logo.png"
                    ></Image>
                    <b className="text-success">Academy</b>
                    <div className="row">
                      <h2 className="mb-5 mt-5">Verify your email</h2>
                      {!code && (
                        <>
                          <h4 className="mb-5">
                            Account activation link sent to your email address:{" "}
                            {email} Please follow the link inside to continue.
                          </h4>
                          <div className="row">
                            <p className="mt-0">
                              Didn&apos;t receive an email?{" "}
                              <a href="#" onClick={() => this.resendEmail()}>
                                Resend
                              </a>
                            </p>
                          </div>
                        </>
                      )}
                      {code && (
                        <>
                          <h4>
                            Verification{" "}
                            {verifystatus.status == "success" && "Success"}
                            {verifystatus.status == "error" && "Failed"},{" "}
                            {verifystatus?.message}
                          </h4>
                          <div className="row">
                            <p className="mt-0">
                              <Link href={"/login"}>
                                <a>Sign </a>
                              </Link>
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-md-6 d-none d-md-block">
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

Verify.getInitialProps = async (ctx) => {
  const {
    query: { email, code = "" },
  } = ctx;

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
  let verifystatus = {};
  if (code && email) {
    verifystatus = await verifyCode(code, email);
  }
  console.log(verifystatus);
  return { token: token, verifystatus: verifystatus };
};

export default withCookies(withRouter(Verify));
