import styles from "../../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../../components/layout/index";
import React from "react";
import { withCookies } from "react-cookie";
import Router, { withRouter } from "next/router";
import {
  isLoggedin,
  isClientLoggedin,
  getUser,
  getUserTest,
  submitTest,
  checkUserIsAllowed,
} from "../../../helpers/helper";
import Link from "next/link";

class PaymentFailed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  async componentDidMount() {
    const token = isClientLoggedin(this.props);
    if (token) {
      const {
        state,
        data: { user },
      } = await getUser(token);

      if (state) {
        this.setState({ user });
      }
    } else {
      Router.push("/");
    }
  }
  render() {
    const { user } = this.state;
    return (
      <Layout type="user" user={user}>
        <div className={styles}>
          <main className={styles.main}>
            <div className="container-fluid bg-light p-4 p-sm-5">
              <div className="container rounded rounded-10 winheight57 d-flex align-items-center">
                <div className="row bg-white rounded-10">
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 p-5">
                    <div className="row">
                      <FontAwesomeIcon
                        className="Aicon5x text-warning my-4"
                        icon={faThumbsDown}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-8 col-lg-8 d-flex align-items-center">
                    <div className="rounded-10">
                      <div className="row justify-content-center ">
                        <h2 className="py-0">Your payment has been failed</h2>
                        <p>
                          <Link href="/course/test">Click here</Link> to retry.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    );
  }
}

PaymentFailed.getInitialProps = async (ctx) => {
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
export default withCookies(withRouter(PaymentFailed));
