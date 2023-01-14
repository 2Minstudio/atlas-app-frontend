import Image from "next/image";
import LayoutGuest from "../components/layout/Guest";
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
import Alert from "react-bootstrap/Alert";

class Verify extends React.Component {
  state = {
    error: {},
    resent: false,
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
    const rest = resendCode(email);
    this.setState({ resent: rest });
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
    const { resent } = this.state;

    return (
      <LayoutGuest>
        <div className={styles}>
          <main className={styles.main}>
            <div className="container-fluid">
              <div className="row winheight">
                <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center">
                  <div className="container-sm">
                    <div className="row align-items-center">
                      <div className="col-12 col-sm-12 col-md-6 mb-5 pt-5 mx-auto">
                        <Image
                          className="img-fluid myLogoLp"
                          alt="Logo"
                          width="120"
                          height="65"
                          src="/image/logo.png"
                        ></Image>
                        <b className="text-success">Academy</b>
                        {resent && <Alert>Verification email resent</Alert>}
                        <div className="row">
                          <h2 className="mb-5 mt-5">Verify your email</h2>
                          {!code && (
                            <>
                              <h4 className="mb-5">
                                Account activation link sent to your email
                                address: {email} Please follow the link inside
                                to continue.
                              </h4>
                              <div className="row">
                                <p className="mt-0">
                                  Didn&apos;t receive an email?{" "}
                                  <a
                                    href="#"
                                    onClick={() => this.resendEmail()}
                                  >
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
                                {verifystatus.status == "error" &&
                                  "Failed"}, {verifystatus?.message}
                              </h4>
                              <div className="row">
                                <p className="mt-0">
                                  <Link href={"/login"}>Sign</Link>
                                </p>
                              </div>
                            </>
                          )}
                        </div>
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
