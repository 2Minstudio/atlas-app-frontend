import Image from "next/image";
import Layout from "../../components/layout/index";
import styles from "../../styles/Home.module.css";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import { isClientLoggedin, getUser } from "../../helpers/helper";
import React from "react";

class Dashboard extends React.Component {
  state = {
    user: {},
  };
  componentDidMount() {
    const token = isClientLoggedin(this.props);
    if (token) {
      getUser(token)
        .then((resp) => {
          // this.setState({user});
          console.log(resp, "resp");
        })
        .catch((error) => {
          console.log(error, "error");
        });
    }
  }

  render() {
    const { user } = this.state;
    return (
      <Layout type="dashboard">
        <div className={styles}>
          <main className={styles.main}>
            <div className="container-fluid bg-grey">
              <div className="container pb-5">
                <div className="row g-0 ">
                  <div className="col col-md-3 col-lg-2">
                    <div className="dashboard-menu-box d-flex align-items-center">
                      <ul className="list-group flex-fill">
                        <li className="list-group-item  active"> Home </li>
                        <li className="list-group-item "> Progress </li>
                        <li className="list-group-item "> Community</li>
                        <li className="list-group-item "> Settings</li>
                      </ul>
                    </div>
                    <div className="container dashboard-support-box d-flex align-items-end">
                      <div className="row">
                        <div className="col pt-5 pe-4">
                          <div className="card bg-grey rounded-25 p-0">
                            <div className="card-body ">
                              <h5 className="card-title">Support 24/7</h5>
                              <h6 className="card-subtitle mb-2 text-muted">
                                Contact us anytime
                              </h6>
                              <p className="card-text"></p>
                              <buton className=" btn btn-success"> Start</buton>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-sm-10 col-md-9 col-lg-10 bg-white rounded-bottom-25 p-sm-3 p-md-4 p-lg-5 ">
                    <div className="row d-flex justify-content-start align-items-start pb-3">
                      <h4>Welcome Siddanth</h4>
                    </div>
                    <div className="row">
                      <div className="col-5">
                        <div className="card border-0">
                          <div className="card-body p-0 dash-min-h-400">
                            <Image
                              src="/image/dash-imge1.png"
                              className="img-fluid"
                              alt="Doctor Image"
                              height="397"
                              width="400"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-7">
                        <div className="row bg-light rounded-25 px-3 py-4 d-flex justify-content-center d-none d-lg-block">
                          <div className="row text-success">
                            <div className="col-12 col-sm-6">
                              <div className="row d-flex align-items-center">
                                <div className="col-3 pt-2 g-0">
                                  <Image
                                    className="img-fluid"
                                    alt="Doctor Image"
                                    src="/image/Group%20224.svg"
                                    height="50"
                                    width="50"
                                  />
                                </div>
                                <div className="col-9">
                                  <p className="text-left m-0">
                                    {" "}
                                    Learn from the Licensed Chiropractors
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6">
                              <div className="row d-flex align-items-center">
                                <div className="col-3 pt-2 g-0">
                                  <Image
                                    className="img-fluid"
                                    alt="Doctor Image"
                                    src="/image/Group%20225.svg"
                                    height="50"
                                    width="50"
                                  />
                                </div>
                                <div className="col-9">
                                  <p className="text-left  m-0">
                                    {" "}
                                    Unlock 400hrs of Study Material
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row text-success mt-3">
                            <div className="col-12 col-sm-6">
                              <div className="row d-flex align-items-center">
                                <div className="col-3 pt-2 g-0">
                                  <Image
                                    className="img-fluid"
                                    alt="Doctor Image"
                                    src="/image/Group%20223.svg"
                                    height="50"
                                    width="50"
                                  />
                                </div>
                                <div className="col-9">
                                  <p className="text-left m-0">
                                    {" "}
                                    Get Live Hands-on Training
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6">
                              <div className="row d-flex align-items-center">
                                <div className="col-3 pt-2 g-0">
                                  <Image
                                    className="img-fluid"
                                    alt="Doctor Image"
                                    src="/image/Group%20222.svg"
                                    height="50"
                                    width="50"
                                  />
                                </div>
                                <div className="col-9">
                                  <p className="text-left  m-0">
                                    {" "}
                                    6 Months of Paid Internship
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row bg-light rounded-25 px-0 py-2 d-flex justify-content-center d-block d-lg-none">
                          <div className="row text-success">
                            <div className="col-12">
                              <div className="row d-flex align-items-center justify-content-center">
                                <div className="col-2 g-0 d-flex justify-content-center">
                                  <Image
                                    className="img-fluid"
                                    alt="Doctor Image"
                                    src="/image/Group%20224.svg"
                                    height="30"
                                    width="30"
                                  />
                                </div>
                                <div className="col-10">
                                  <p className="text-left m-0">
                                    {" "}
                                    Learn from the Licensed Chiropractors
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 mt-2">
                              <div className="row d-flex align-items-center">
                                <div className="col-2 g-0 d-flex justify-content-center">
                                  <Image
                                    className="img-fluid"
                                    alt="Doctor Image"
                                    src="/image/Group%20225.svg"
                                    height="30"
                                    width="30"
                                  />
                                </div>
                                <div className="col-10">
                                  <p className="text-left  m-0">
                                    {" "}
                                    Unlock 400hrs of Study Material
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row text-success">
                            <div className="col-12 mt-2">
                              <div className="row d-flex align-items-center">
                                <div className="col-2 g-0 d-flex justify-content-center">
                                  <Image
                                    className="img-fluid"
                                    alt="Doctor Image"
                                    src="/image/Group%20223.svg"
                                    height="30"
                                    width="30"
                                  />
                                </div>
                                <div className="col-10">
                                  <p className="text-left m-0">
                                    {" "}
                                    Get Live Hands-on Training
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 mt-2">
                              <div className="row d-flex align-items-center">
                                <div className="col-2 g-0 d-flex justify-content-center">
                                  <Image
                                    className="img-fluid"
                                    alt="Doctor Image"
                                    src="/image/Group%20222.svg"
                                    height="30"
                                    width="30"
                                  />
                                </div>
                                <div className="col-10">
                                  <p className="text-left  m-0">
                                    {" "}
                                    6 Months of Paid Internship
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row align-items-center mt-5">
                          <div className="col">
                            <h5>
                              INR 6,00,000<br></br>
                              <small className="text-success small-text-12">
                                EMI Available
                              </small>
                            </h5>
                            <h6 className="text-success py-3"><b>Preview Course</b></h6>
                            
                          </div>
                          <div className="col text-end">
                          <button className="col-12 col-lg-12 col-xl-10 btn btn-lg btn-success rounded-pill mb-3">
                              Buy Now
                            </button>
                            <button className="col-12  col-lg-12 col-xl-10 btn btn-lg btn-outline-success rounded-pill ">
                              Enquire Now
                            </button>
                          </div>
                        </div>

                        <div className="row align-items-center mt-3">
                          <div className="col-2 col-md-4 col-lg-6 ">
                            {" "}
                            &nbsp;{" "}
                          </div>
                          <div className="col-6 col-md-8 col-lg-6 text-center">
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h5 className="pt-5">Community</h5>
                      </div>
                      <div className="col-1">
                        <h3 className="text-success text-center"> ... </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col mt-4">
                        <button className="btn btn-success rounded-pill p-3 me-3">
                          Ask A Question
                        </button>
                        <button className="btn btn-outline-success rounded-pill p-3">
                          Go to community
                        </button>
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

// export async function getServerSideProps(ctx) {
//   const token = await isLoggedin(ctx);
//   if (token) {
//     const user = await getUser(ctx);
//     console.log(user,'user??');
//     return { props: { user: user } };
//   }

//   return { user: false };
// }

export default withCookies(withRouter(Dashboard));
