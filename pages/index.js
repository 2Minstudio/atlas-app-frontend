import Image from "next/image";
import Link from "next/link";
import Banner from "../components/common/banner";
import Layout from "../components/layout/layout";
import styles from "../styles/Home.module.css";
import DemoCarousel from "../components/common/carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faVideo,
  faStar,
  faSuitcaseMedical,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <Layout>
      <div className={styles}>
        <main className={styles.main}>
          <Banner></Banner>
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
                      <span className="bg-success rounded rounded-circle AiconHolderbg">
                        <FontAwesomeIcon
                          className="Aicon text-white"
                          icon={faUserPlus}
                        />
                      </span>
                      <p className="pt-5">
                        {" "}
                        Live Training with <br></br>Atlas Chiropractors
                      </p>
                    </div>
                    <div className="col-12 col-sm-6 text-center pt-5">
                      <span className="bg-success rounded rounded-circle AiconHolderbg">
                        <FontAwesomeIcon
                          className="Aicon text-white"
                          icon={faVideo}
                        />
                      </span>
                      <p className="pt-5">
                        {" "}
                        400 Hours of Course + <br></br>Paid Internship of 6
                        Months
                      </p>
                    </div>
                  </div>

                  <div className="row text-success">
                    <div className="col-12 col-sm-6 text-center pt-5">
                      <span className="bg-success rounded rounded-circle AiconHolderbg">
                        <FontAwesomeIcon
                          className="Aicon text-white"
                          icon={faStar}
                        />
                      </span>
                      <p className="pt-5">
                        {" "}
                        Become a Certified <br></br> Chiropractor in India
                      </p>
                    </div>
                    <div className="col-12 col-sm-6 text-center pt-5">
                      <span className="bg-success rounded rounded-circle AiconHolderbg">
                        <FontAwesomeIcon
                          className="Aicon text-white"
                          icon={faSuitcaseMedical}
                        />
                      </span>
                      <p className="pt-5">
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
                      Chiropractors in India is a privilege and a responsibility
                      that I take very seriously.
                      <br></br>
                      <br></br>
                      My dream was unique - I wanted to bring my talents to
                      India, Where Chiropractic was largely unheard of unless
                      you watched the TV sitcom Two and a Half Men&quot;
                    </p>
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <div className="row pb-4 pb-md-0">
                          <div className="col-3 col-sm-3 col-md-12 col-lg-3">
                            <Image
                              className="img-fluid Chiro-icon"
                              alt="chiropractor-image"
                              src="/image/Top chiroprator.png"
                              height="150"
                              width="150"
                            />
                          </div>
                          <div className="col-9 pt-4">
                            <p>
                              <small>Top Chiropractor in India</small>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div className="row">
                          <div className="col-3 col-sm-3 col-md-12 col-lg-3">
                            <Image
                              className="img-fluid Chiro-icon"
                              alt="Member Image"
                              src="/image/member.png"
                              height="150"
                              width="150"
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
              <div className="row  align-items-center">
                <div className="col-lg-4 col-md-4 col-sm-12 p-3">
                  <h2>
                    Course <br></br>Duration & <br></br>Syllabus
                  </h2>
                </div>

                <div className="col-lg-8 col-md-8 col-sm-12">
                  <DemoCarousel></DemoCarousel>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid pt-5">
            <div className="container py-5 text-center text-success">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-4 p-4">
                  <h3>
                    Estimated salary for chiropractor will increase 42% in 5
                    years{" "}
                  </h3>
                </div>
                <div className="col-12 col-sm-12 col-md-4 p-4">
                  <h3>Receive a salary of Rs 50,000 - 60,000 per month</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-4 p-3">
                  <h3>
                    Chiropractors are expected to grow 17% from 2022 to 2034
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid my-5 girlBg">
            <div className="container">
              <div className="row py-5">
                <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 mt-5 pt-5">
                  <h2 className="text-success">
                    <b>
                      Start Earning as a Certified Chiropractor in 12 Months
                    </b>
                  </h2>

                  <div className="row row-cols-md-2 mt-5 pt-sm-2 pt-md-4 align-items-center">
                    <div className="col-12 col-sm-12 col-md-6 text-left">
                    <div className="row">
                      <Link href="/course/test">
                        <a class="nav-link active" aria-current="page">
                          <button
                            type="button"
                            className="btn btn-lg btn-success mb-3 rounded-pill"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Take the Eligibility Test
                          </button>
                        </a>
                      </Link>
                      </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 text-left">
                      <div className="row">
                      <a href="tel:+91 9606704304">
                        <button
                          type="button"
                          className=" btn btn-lg btn-outline-success rounded-pill"
                        >
                          Inquire Now
                        </button>
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row text-success">
                    <div className="col text-center pt-0"></div>
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
