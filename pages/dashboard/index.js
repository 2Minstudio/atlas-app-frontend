import Image from "next/image";
import Layout from "../../components/layout/index";
import styles from "../../styles/Home.module.css";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import { isClientLoggedin, getUser } from "../../helpers/helper";
import React from "react";
import { getCoursesList } from "../../helpers/course";
import Features from "../../components/freatures";

class Dashboard extends React.Component {
  state = {
    user: {},
    data: {},
  };

  componentDidMount() {
    const token = isClientLoggedin(this.props);
    if (token) {
      getUser(token)
        .then((resp) => {
          // this.setState({user});
          console.log(resp, "resp");
          this.loadData();
        })
        .catch((error) => {
          console.log(error, "error");
        });
    }
  }

  loadData = async () => {
    const { data, state } = await getCoursesList();
    if (state) {
      this.setState({ data });
    }
  };

  render() {
    const { user, data } = this.state;
    console.log(data, "data");
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
                    {data?.results?.map((item) => (
                      <div className="row">
                        <div className="col-5 ">
                          <div className="card border-0 greyGrad rounded-25">
                            <div className="card-body p-0 dash-min-h-400 bg-course-cover-img img-fluid">
                              <div className="row p-4">
                                <div className="col-9 d-flex justify-content-start">
                                  <div className="col-2">
                                    {item?.image && (
                                      <Image
                                        src={item?.image}
                                        className="img-fluid py-2 pe-2  rounded-circle"
                                        alt="Study Image"
                                        height="100"
                                        width="100"
                                      />
                                    )}
                                  </div>
                                  <div className="col-10">
                                    <p className="m-0 text-white fw-bold">
                                      {item.first_name}
                                      <br></br>
                                      <small>@dianneed</small>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                                  <span class="badge bg-success d-inline text-end">
                                    400 <small>HRS</small>
                                  </span>
                                </div>
                              </div>
                              <div className="pos-bottom">
                                <div className="col m-4 p-4 rounded-25 bg-secondary bg-gradient text-center text-white fw-bold">
                                  {item.name}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="row bg-light rounded-25 px-3 py-4 d-flex justify-content-center d-none d-lg-block">
                            <Features
                              features={[
                                {
                                  image: "/image/Group%20223.svg",
                                  text: "Get Live Hands-on Training",
                                },
                                {
                                  image: "/image/Group%20222.svg",
                                  text: "6 Months of Paid Internship",
                                },
                                {
                                  image: "/image/Group%20225.svg",
                                  text: "Learn from the Licensed Chiropractors",
                                },
                                {
                                  image: "/image/Group%20223.svg",
                                  text: "Unlock 400hrs of Study Material",
                                },
                              ]}
                            />
                          </div>

                          <div className="row align-items-center mt-5">
                            <div className="col">
                              <h5>
                                INR {item.cost}
                                <br></br>
                                <small className="text-success small-text-12">
                                  EMI Available
                                </small>
                              </h5>
                              <h6 className="text-success py-3">
                                <b>Preview Course</b>
                              </h6>
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
                            <div className="col-6 col-md-8 col-lg-6 text-center"></div>
                          </div>
                        </div>
                      </div>
                    ))}

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
