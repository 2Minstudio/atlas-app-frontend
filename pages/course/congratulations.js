import styles from "../../styles/Home.module.css";
import LayoutUser from "../../components/layout/layoutUser";
import Router, { withRouter } from "next/router";
import React from "react";
import { withCookies } from "react-cookie";
import { isLoggedin, isClientLoggedin, getUser } from "../../helpers/helper";

class Congratulations extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    const token = isClientLoggedin(this.props);
    if (token) {
      const {
        state,
        data: { user },
      } = await getUser(token);
      if (state) {
        this.setState({ user: user });
      }
    } else {
      Router.push("/");
    }
  }

  render() {
    const { user } = this.state;
    return (
      <LayoutUser user={user}>
        <div className={styles}>
          <main className={styles.main}>
            <div className="container-fluid bg-light p-5 winheight70">
              <div className="container  rounded rounded-10">
                <div className="row bg-white rounded-10 align-items-center">
                  <div className="col-12 col-sm-12 col-md-6 p-4 px-sm-5 ">
                    <h2 className="py-5">Hi Siddanth</h2>
                    <div className="row">
                      <p>
                        Congratulations<br></br>
                        The Eligibility test is all yours. Get qualified and
                        Become a Chiropractor in the Next 12 Months
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 pb-5 pb-sm-5 pb-md-0">
                    <div className="row align-items-center">
                      <div className="rounded-10 sm-pb-5">
                        <div className="row justify-content-center">
                          <button className="btn bg-success rounded-10 col-8 col-sm-6 col-md-6 text-white ">
                            {" "}
                            Take the Test{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </LayoutUser>
    );
  }
}
Congratulations.getInitialProps = async (ctx) => {
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
export default withCookies(withRouter(Congratulations));
