import React from "react";
import styles from "../../styles/Home.module.css";
import LayoutUser from "../../components/layout/layoutUser";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import { isLoggedin, isClientLoggedin, getUser } from "../../helpers/helper";

class Payment extends React.Component {
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
            <div className="container-fluid bg-light py-5">
              <div className="container  rounded rounded-10">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 p-5 bg-white rounded-10">
                    <h2 className="py-5">Choose Your Payment method</h2>
                    <div className="row">
                      <div className="form-check pb-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Credit Card
                        </label>
                      </div>
                      <div className="form-check pb-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          UPI
                        </label>
                      </div>
                      <div className="form-check pb-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Net banking
                        </label>
                      </div>
                    </div>
                    <div className="row pt-5 align-items-center">
                      <div className="col">
                        <div className="row ">
                          <button className="btn btn-success rounded-pill">
                            Place Order
                          </button>
                        </div>
                      </div>
                      <div className="col">
                        <div className="row ">
                          <p className="mb-0 text-center">
                            <a href="#"> Go back </a>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 p-4 p-sm-5 p-md-1 p-lg-5">
                    <div className="rounded-10">
                      <p className="text-center pt-5 pb-3">Billing Details</p>
                      <div className="row justify-content-center mb-3 ">
                        <button className="btn btn-lg border shadow-sm border-opacity-10 rounded-10 col-10 col-sm-8 p-5 mb-5">
                          {" "}
                          Eligibility Test{" "}
                        </button>
                      </div>
                      <div className="row mb-4 justify-content-center px-5">
                        <div className="col-6">
                          <p> 1 x Test Session</p>
                        </div>
                        <div className="col-6 text-end">
                          <p> ₹ 2000.00</p>
                        </div>
                      </div>
                      <div className="row mb-4 px-5">
                        <div className="col-6 ">
                          <p> Tax</p>
                        </div>
                        <div className="col-6 text-end">
                          <p> ₹ 200.00</p>
                        </div>
                      </div>
                      <div className="row mb-4 px-5">
                        <div className="col-6 ">
                          <p> total</p>
                        </div>
                        <div className="col-6 text-end">
                          <p> ₹ 2200.00</p>
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
Payment.getInitialProps = async (ctx) => {
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
export default withCookies(withRouter(Payment));
