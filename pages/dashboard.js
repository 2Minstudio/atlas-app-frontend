import Image from "next/image";
import Link from "next/link";
import Banner from "../components/common/banner";
import Layout from "../components/layout/layout";
import styles from "../styles/Home.module.css";
import DemoCarousel from "../components/common/carousel";
import InquerySection from "../components/home/inquerysection";
import Highlightinfo from "../components/home/highlightinfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faVideo,
  faStar,
  faSuitcaseMedical,
} from "@fortawesome/free-solid-svg-icons";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import { isClientLoggedin, getUser } from "../helpers/helper";
import React from "react";

class Home extends React.Component {
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
      <layoutD user={user}>
        <div className={styles}>
          <main className={styles.main}>
            <div className="container-fluid bg-grey p-5">
              <div className="row">
                <div className="col col-sm-3 ">
                  <div className="row align-middle">
                    <a className="d-flex align-items-center text-dark text-decoration-none">
                      <span className="ps-0 ps-sm-5">
                        <Image
                          width="120"
                          height="65"
                          alt="Logo"
                          src="/image/logo.png"
                        />{" "}
                      </span>
                      <span className="pt-4 text-success">
                        <b>Academy</b>
                      </span>
                    </a>
                  </div>
                  <div className="row mt-5 pt-5">
                    <ul list-group>
                      <li className="list-group-item active"> Home </li>
                      <li className="list-group-item"> Progress </li>
                      <li className="list-group-item"> Community</li>
                      <li className="list-group-item"> Settings</li>
                    </ul>
                  </div>
                  <div className="row align-bottom mt-5 pt-5">
                    <div className="col-1"></div>
                    <div className="col-8">
                      <div className="card bg-grey rounded-25">
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
                    <div className="col-2"></div>
                  </div>
                </div>
                <div className="col col-sm-9 bg-white rounded-25 p-5">
                  <div className="row">
                    <h3 className="text-end"> Siddhanth</h3>
                  </div>
                  <div className="row">
                    <p>Welcome Siddanth</p>
                    <div className="col-5">
                      <div class="card bg-dashboard border-0">
                        <div class="card-body dash-min-h-400">
                        <h5 class="card-title text-block ">
                            Dannie Edwwards{" "}
                            <span class="badge bg-primary text-end align-right">
                              400 Hrs
                            </span>
                          </h5>
                          <h6 class="card-subtitle mb-2 text-muted">
                            @dannyedwwards
                          </h6>
                          <p class="card-text"></p>
                          <div class="card-link bg-grey p-3 text-center rounded-25">
                            Chiropractor for begineers
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-7">
                      <div className="row bg-light rounded-25">
                        <div className="row text-success">
                          <div className="col-12 col-sm-6 pt-5">
                            <div className="row">
                              <div className="col-3 pt-2">
                                <span className="bg-success rounded rounded-circle AiconHolderbg">
                                  <FontAwesomeIcon
                                    className="Aicon text-white"
                                    icon={faUserPlus}
                                  />
                                </span>
                              </div>
                              <div className="col-9">
                                <p className="text-left">
                                  {" "}
                                  Learn from the Licensed Chiropractors
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 pt-5">
                            <div className="row">
                              <div className="col-3 pt-2">
                                <span className="bg-success rounded rounded-circle AiconHolderbg">
                                  <FontAwesomeIcon
                                    className="Aicon text-white"
                                    icon={faVideo}
                                  />
                                </span>
                              </div>
                              <div className="col-9">
                                <p className="text-left">
                                  {" "}
                                  Unlock 400hrs of Study Material
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row text-success">
                          <div className="col-12 col-sm-6 pt-5">
                            <div className="row">
                              <div className="col-3 pt-2">
                                <span className="bg-success rounded rounded-circle AiconHolderbg">
                                  <FontAwesomeIcon
                                    className="Aicon text-white"
                                    icon={faStar}
                                  />
                                </span>
                              </div>
                              <div className="col-9">
                                <p className="text-left">
                                  {" "}
                                  Get Live Hands-on Training
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 pt-5">
                            <div className="row">
                              <div className="col-3 pt-2">
                                <span className="bg-success rounded rounded-circle AiconHolderbg">
                                  <FontAwesomeIcon
                                    className="Aicon text-white"
                                    icon={faSuitcaseMedical}
                                  />
                                </span>
                              </div>
                              <div className="col-9">
                                <p className="text-left">
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
                        <h5>INR 6,00,000<br></br>
                        <small className="text-success small-text-12">EMI Available</small></h5>
                        </div>
                        <div className="col text-center">
                          <h6>Preview Course</h6>
                        </div>
                      </div>
                      <div className="row text-end mt-4">
                        <div className="col">
                        <button className="btn btn-outline-success rounded-pill col-3">Enquire Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <h5 className="pt-4">Community</h5>
                    <div className="col mt-4">
                    <button className="btn btn-success rounded-pill p-3 me-3">Ask A Question</button>
                    <button className="btn btn-success rounded-pill p-3">Go to community</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </layoutD>
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

export default withCookies(withRouter(Home));
