// import Image from "next/image";
import { Image } from "react-bootstrap";
import styles from "../../../styles/Home.module.css";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import { isClientLoggedin, getUser } from "../../../helpers/helper";
import React from "react";
import Layout from "../../../components/layout/index";
import { getCoursePreview } from "../../../helpers/course";
import Menu from "../../../components/menu/studentLeft";
import Link from "next/link";
import ModuleList from "../../../components/course/modulePreviewList";
import SupportContact from "../../../components/common/supportContact";

class DashboardCoursePreview extends React.Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    const token = isClientLoggedin(this.props);
    const {
      router: {
        query: { course: courseid },
      },
    } = this.props;
    if (token) {
      const {
        state,
        data: { user },
      } = await getUser(token);
      if (state) {
        this.setState({ user, courseid }, this.loadData);
      }
    } else {
      Router.push("/");
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.router !== prevState.router) {
      const {
        router: {
          query: { course: propcourseid },
        },
      } = nextProps;
      return { courseid: propcourseid };
    } else return null;
  }

  loadData = async () => {
    const { courseid } = this.state;
    if (courseid) {
      const { data, state } = await getCoursePreview(courseid);
      if (state) {
        this.setState({ data });
      }
    }
  };

  render() {
    const { user, data } = this.state;

    return (
      <Layout type="dashboard" user={user}>
        <div className={styles}>
          <main className={styles.main}>
            <div className="container-fluid bg-grey">
              <div className="container pb-5">
                <div className="row g-0 ">
                  <div className="col col-md-3 col-lg-2">
                    <Menu />
                    <SupportContact />
                  </div>

                  <div className="col col-sm-10 col-md-9 col-lg-10 bg-white rounded-bottom-25 p-sm-3 p-md-4 p-lg-5 ">
                    <div className="row">
                      <p className="pb-4">&nbsp;</p>
                      <div className="col-4">
                        <div className="card border-0">
                          <div className="card-body p-0 dash-min-h-400">
                            {data?.image && (
                              <Image
                                src={data?.image}
                                className="img-fluid rounded-25"
                                alt="Preview course Image"
                                height="584"
                                width="502"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="row  px-3 pb-4 d-flex justify-content-center">
                          <h3>{data?.name}</h3>
                          <p className="pt-3">{data?.description}</p>
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
                      <ModuleList mode="preview" data={data?.modules} />
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
                          INR {data?.cost} <br></br>
                          <small className="text-success small-text-12">
                            EMI Available
                          </small>
                        </h5>
                      </div>
                      <div className="col d-flex justify-content-end">
                        {data?.id && (
                          <Link
                            disabled
                            scroll={false}
                            href="#"
                            className="btn btn-success rounded-pill p-3 me-3 btn-disabled"
                          >
                            Buy Now
                          </Link>
                        )}
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
