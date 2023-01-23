import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import { isClientLoggedin, getUser } from "../../helpers/helper";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Layout from "../../components/layout/index";

class DashboardCoursePreview extends React.Component {
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
      <Layout type="dashboard" user={user}>
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

                  <div className="col col-sm-10 col-md-9 col-lg-10 bg-white rounded-top-25 rounded-bottom-25 p-sm-3 p-md-4 p-lg-5 ">
                    <div className="row">
                      <p className="pb-4">&nbsp;</p>
                      <div className="col-4">
                        <div className="card border-0">
                          <div className="card-body p-0 dash-min-h-400">
                            <Image
                              src="/image/dashboard/course-preview.jpg"
                              className="img-fluid"
                              alt="Preview course Image"
                              height="584"
                              width="502"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="row  px-3 pb-4 d-flex justify-content-center">
                          <h3>Chiropractor beginner course</h3>
                          <p className="pt-5">
                            Would you like to have a busier practice? Would you
                            like to see more patients and help more people and
                            make more money in the process? Who wouldn&apos;t?
                            Unfortunately it&apos;s never as simple as we
                            thought it would be and we certainly didn&apos;t
                            learn much about this in school. In this program
                            your will learn how to double your chiropractic
                            practice
                          </p>
                          <div className="row text-success">
                            <div className="col-12 col-sm-6"></div>
                            <div className="col-12 col-sm-6"></div>
                          </div>

                          <div className="row text-success mt-3">
                            <div className="col-12 col-sm-6"></div>
                            <div className="col-12 col-sm-6"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <h5 className="pt-4">Lessons</h5>
                      <div className="col col-md-6 col-lg-7">
                        <Accordion defaultActiveKey="0">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>Back Pain</Accordion.Header>
                            <Accordion.Body>
                              <p>Lesson 1 . 11 min</p>
                              <p>Lesson 2 . 24 min</p>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>Skeleton System</Accordion.Header>
                            <Accordion.Body>
                              <p>Lesson 1 . 11 min</p>
                              <p>Lesson 2 . 24 min</p>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>Best Practices</Accordion.Header>
                            <Accordion.Body>
                              <p>Lesson 1 . 11 min</p>
                              <p>Lesson 2 . 24 min</p>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                      <div className="col col-md-6 col-lg-5">
                        <h3 className="text-success text-center"> </h3>
                        <div className="card rounded-25 p-2">
                          <div className="d-flex align-items-center justify-content-center py-3">
                            <div className="col-lg-2 col-3 col-md-3 p-sm-1 p-md-1 p-lg-0 g-0 me-1 d-flex align-items-center justify-content-center">
                              <Image
                                className="img-fluid"
                                alt="Doctor Image"
                                src="/image/Group%20224.svg"
                                height="50"
                                width="50"
                              />
                            </div>
                            <div className="col-9 col-md-9 col-lg-10">
                              <p className="text-left m-0">
                                {" "}
                                Learn from the Licensed Chiropractors
                              </p>
                            </div>
                          </div>

                          <div className="d-flex align-items-center justify-content-center pb-3">
                            <div className="col-lg-2 col-3 col-md-3 p-sm-1 p-md-1 p-lg-0 g-0 me-1   d-flex align-items-center justify-content-center">
                              <Image
                                className="img-fluid"
                                alt="Doctor Image"
                                src="/image/Group%20225.svg"
                                height="50"
                                width="50"
                              />
                            </div>
                            <div className="col-9 col-md-9 col-lg-10">
                              <p className="text-left  m-0">
                                {" "}
                                Unlock 400hrs of Study Material
                              </p>
                            </div>
                          </div>

                          <div className="d-flex align-items-center justify-content-center pb-3">
                            <div className="col-lg-2 col-3 col-md-3 p-sm-1 p-md-1 p-lg-0 g-0 me-1  d-flex align-items-center justify-content-center">
                              <Image
                                className="img-fluid"
                                alt="Doctor Image"
                                src="/image/Group%20223.svg"
                                height="50"
                                width="50"
                              />
                            </div>
                            <div className="col-9 col-md-9 col-lg-10">
                              <p className="text-left m-0">
                                {" "}
                                Get Live Hands-on Training
                              </p>
                            </div>
                          </div>

                          <div className="d-flex align-items-center justify-content-center pb-3">
                            <div className="col-lg-2 col-3 col-md-3 p-sm-1 p-md-1 p-lg-0 g-0 me-1  d-flex align-items-center justify-content-center">
                              <Image
                                className="img-fluid"
                                alt="Doctor Image"
                                src="/image/Group%20222.svg"
                                height="50"
                                width="50"
                              />
                            </div>
                            <div className="col-9 col-md-9 col-lg-10">
                              <p className="text-left m-0">
                                {" "}
                                6 Months of Paid Internship
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-5 ">
                      <div className="col">
                        <hr></hr>
                      </div>
                    </div>
                    <div className="row mt-2 ">
                      <div className="col">
                        <h5>
                          INR 6,00,000 <br></br>
                          <small className="text-success small-text-12">
                            EMI Available
                          </small>
                        </h5>
                      </div>
                      <div className="col d-flex justify-content-end">
                        <button className="btn btn-success rounded-pill p-3 me-3">
                          Buy Now
                        </button>
                        <button className="btn btn-outline-success rounded-pill p-3">
                          Enquire Now
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

export default withCookies(withRouter(DashboardCoursePreview));
