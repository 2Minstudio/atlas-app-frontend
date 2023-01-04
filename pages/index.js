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
    }
  }

  downloadPdf = () => {
    // using Java Script method to get PDF file
    fetch("document/syllabus.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Atlas-College-of-Chiropractic-Syllabus.pdf";
        alink.click();
      });
    });
  };

  render() {
    const { user } = this.state;
    return (
      <Layout user={user}>
        <div className={styles}>
          <main className={styles.main}>
            <Banner />
            <div className="container-fluid pt-5 pb-5">
              <div className="container pt-5 pb-5 mt-5 mb-5 whyjoinBg rounded-5">
                <div className="row align-items-center p-3">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <h2>
                      <b>Why join Atlas chiropractic course?</b>
                    </h2>
                    <br></br>
                    <p>
                      Atlas chiropractic and wellness is the largest employer of
                      Licensed Chiropractors.
                      <br></br>
                      <br></br>
                      Serving more than 5 years in 4+ Locations in India.
                    </p>
                  </div>
                  <div className="col">
                    <div className="row text-success">
                      <div className="col-12 col-sm-6 text-center pt-5">
                        <Image
                        className="img-fluid"
                        alt="Doctor Image"
                        src="/image/Group%20224.svg"
                        height="75"
                        width="75"
                      />
                        <p className="pt-1">
                          {" "}
                          Live Training with <br></br>Atlas Chiropractors
                        </p>
                      </div>
                      <div className="col-12 col-sm-6 text-center pt-5">
                        <Image
                        className="img-fluid"
                        alt="Doctor Image"
                        src="/image/Group%20225.svg"
                        height="75"
                        width="75"
                      />
                        <p className="pt-1">
                          {" "}
                          400 Hours of Course + <br></br>Paid Internship of 6
                          Months
                        </p>
                      </div>
                    </div>

                    <div className="row text-success">
                      <div className="col-12 col-sm-6 text-center pt-5">
                       <Image
                        className="img-fluid"
                        alt="Doctor Image"
                        src="/image/Group%20223.svg"
                        height="75"
                        width="75"
                      />
                        <p className="pt-1">
                          {" "}
                          Become a Certified <br></br> Chiropractor in India
                        </p>
                      </div>
                      <div className="col-12 col-sm-6 text-center pt-5">
                        <Image
                        className="img-fluid"
                        alt="Doctor Image"
                        src="/image/Group%20222.svg"
                        height="75"
                        width="75"
                      />
                        <p className="pt-1">
                          {" "}
                          Get Placed with Atlas <br></br>Chiropractic & Wellness
                          Care
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid pt-5 pb-5">
              <div className="container pb-5 mb-5">
                <div className="row justify-content-center">
                  <div className="text-center col-sm-12 col-md-10 col-lg-8 col-xl-7">
                    <h2>
                      <b>Learn From One Of The Few Licensed Chiropractors</b>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="content-block-3">
                <div className="container">
                  <div className="row  mb-3">
                    <div className="col-sm-12 col-md-4">
                      <Image
                        className="img-fluid"
                        alt="Doctor Image"
                        src="/image/doctorImage.png"
                        height="512"
                        width="354"
                      />
                    </div>
                    <div className="col-sm-12 col-md-8">
                      <h2 className="text-success pt-5">
                        <b>Meet Dr. Prathap Addageethala</b>
                      </h2>
                      <p>Director of Atlas Chiropractic & Wellness</p>
                      <p className="pb-4">
                        &quot;Being one of the few licensed and certified
                        Chiropractors in India is a privilege and a
                        responsibility that I take very seriously.
                        <br></br>
                        <br></br>
                        My dream was unique - I wanted to bring my talents to
                        India, Where Chiropractic was largely unheard of unless
                        you watched the TV sitcom Two and a Half Men&quot;
                      </p>
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <div className="row pb-4 pb-md-0 d-flex align-items-center">
                            <div className="col-3 col-sm-3 col-md-12 col-lg-3">
                              <Image
                                className="img-fluid Chiro-icon"
                                alt="chiropractor-image"
                                src="/image/Top chiroprator.png"
                                height="120"
                                width="120"
                              />
                            </div>
                            <div className="col-9">
                              <p>
                                <small>Top Chiropractor in India</small>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <div className="row d-flex align-items-center">
                            <div className="col-3 col-sm-3 col-md-12 col-lg-3">
                              <Image
                                className="img-fluid Chiro-icon"
                                alt="Member Image"
                                src="/image/member.png"
                                height="120"
                                width="120"
                              />
                            </div>
                            <div className="col-9">
                              <p>
                                <small>
                                  Member of the IACD<br></br>
                                  <span className="small-text-12">
                                    (Indian Association of Chiropractic Doctors)
                                  </span>
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid pt-5 pb-5 mb-5">
              <div className="container mb-5 text-center">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-4 pt-5">
                    <Image
                      className="img-fluid rounded-circle"
                      alt="Doctors-image"
                      src="/image/Ellipse 754.png"
                      height="250"
                      width="250"
                    ></Image>

                    <h3 className="mt-5">
                      <b> Name of the Doctor</b>
                    </h3>
                    <p>Qualification</p>
                    <p>Description</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 pt-5">
                    <Image
                      className="img-fluid rounded-circle"
                      alt="Doctors-image"
                      src="/image/Ellipse 754.png"
                      height="250"
                      width="250"
                    ></Image>

                    <h3 className="mt-5">
                      <b> Name of the Doctor</b>
                    </h3>
                    <p>Qualification</p>
                    <p>Description</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 pt-5">
                    <Image
                      className="img-fluid rounded-circle"
                      alt="Doctors-image"
                      src="/image/Ellipse 754.png"
                      height="250"
                      width="250"
                    ></Image>

                    <h3 className="mt-5">
                      <b> Name of the Doctor</b>
                    </h3>
                    <p>Qualification</p>
                    <p>Description</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div className="container text-center">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-7 col-md-8 col-sm-12 p-3">
                    <h2>Course Duration & Syllabus </h2>
                    <p className="text-center mt-5">
                      The course is broken down into three parts, <br></br>1.
                      Online lectures, <br></br>2. In-person technique training
                      and <br></br>3. Clinical internship, each lasting six
                      months (24 weeks).{" "}
                    </p>
                    <button
                      className="btn btn-success rounded-10 mt-4"
                      onClick={() => this.downloadPdf()}
                    >
                      {" "}
                      Download Syllabus Brouchure{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Highlightinfo />

            <InquerySection />
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

export default withCookies(withRouter(Home));
