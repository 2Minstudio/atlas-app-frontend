import Image from "next/image";
import Banner from "../components/common/banner";
import Layout from "../components/common/layout";
import styles from "../styles/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faVideo,
  faStar,
  faSuitcaseMedical,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export default function Home() {
  return (
    <Layout>
      <div className={styles}>
        <main className={styles.main}>
          <Banner></Banner>
          <div class="container-fluid pt-5 pb-5">
            <div className="container pt-5 pb-5 mt-5 mb-5 whyjoinBg">
              <div class="row pt-5">
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
                  <div class="row text-success">
                    <div class="col text-center pt-0">
                      <span class="bg-success rounded rounded-circle py-3 px-2">
                        <FontAwesomeIcon
                          class="Aicon text-white fa-2x"
                          icon={faUserPlus}
                        />
                      </span>
                      <p class="pt-4">
                        {" "}
                        Live Training with <br></br>Atlas Chiropractors
                      </p>
                    </div>
                    <div class="col text-center pt-0">
                      <span class="bg-success rounded rounded-circle py-3 px-2">
                        <FontAwesomeIcon
                          class="Aicon text-white fa-2x"
                          icon={faVideo}
                        />
                      </span>
                      <p class="pt-4">
                        {" "}
                        400 Hours of Course + <br></br>Paid Internship of 6
                        Months
                      </p>
                    </div>
                  </div>

                  <div class="row text-success">
                    <div class="col text-center pt-5">
                      <span class="bg-success rounded rounded-circle py-3 px-2">
                        <FontAwesomeIcon
                          class="Aicon text-white fa-2x"
                          icon={faStar}
                        />
                      </span>
                      <p class="pt-4">
                        {" "}
                        Become a Certified <br></br> Chiropractor in India
                      </p>
                    </div>
                    <div class="col text-center pt-5">
                      <span class="bg-success rounded rounded-circle py-3 px-2">
                        <FontAwesomeIcon
                          class="Aicon text-white fa-2x"
                          icon={faSuitcaseMedical}
                        />
                      </span>
                      <p class="pt-4">
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
          <div class="container-fluid">
            <div class="container pt-5 pb-5">
              <div class="col text-center">
                <h2>
                  <b>Learn From One Of The Few Licensed Chiropractors</b>
                </h2>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="content-block-3">
              <div class="container">
                <div class="row  mb-3">
                  <div class="col-sm-12 col-md-4">
                    <Image
                      class="img-fluid"
                      alt="Doctor Image"
                      src="image/doctorImage.png"
                    />
                  </div>
                  <div class="col-sm-12 col-md-8">
                    <h2 class="text-success pt-5">
                      <b>Meet Dr. Prathap Addageethala</b>
                    </h2>
                    <p>Director of Atlas Chiropractic & Wellness</p>
                    <p class="pb-4">
                      &quot;Being one of the few licensed and certified
                      Chiropractors in India is a privilege and a responsibility
                      that I take very seriously.
                      <br></br>
                      <br></br>
                      My dream was unique - I wanted to bring my talents to
                      India, Where Chiropractic was largely unheard of unless
                      you watched the TV sitcom Two and a Half Men&quot;
                    </p>
                    <div class="row">
                      <div class="col-sm-12 col-md-6">
                        <div class="row pb-4 pb-md-0">
                          <div class="col-3">
                            <Image
                              class="img-fluid"
                              alt="chiropractor-image"
                              src="image/Top chiroprator.png"
                            />
                          </div>
                          <div class="col-9 pt-4">
                            <p>
                              <small>Top Chiropractor in India</small>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-6">
                        <div class="row">
                          <div class="col-3">
                            <Image
                              class="img-fluid"
                              alt="Member Image"
                              src="image/member.png"
                            />
                          </div>
                          <div class="col-9">
                            <p>
                              <small>
                                Member of the IACD<br></br>
                                <span class="small-text-12">
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
          <div class="container-fluid pt-5 pb-5 mb-5">
            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <Image
                    class="img-fluid p-5"
                    alt="Doctors-image"
                    src="image/Ellipse 754.png"
                  ></Image>

                  <h3>
                    <b> Name of the Doctor</b>
                  </h3>
                  <p>Qualification</p>
                  <p>Description</p>
                </div>
                <div class="col">
                  <Image
                    class="img-fluid p-5"
                    alt="Doctors-image"
                    src="image/Ellipse 754.png"
                  ></Image>

                  <h3>
                    <b> Name of the Doctor</b>
                  </h3>
                  <p>Qualification</p>
                  <p>Description</p>
                </div>
                <div class="col">
                  <Image
                    class="img-fluid p-5"
                    alt="Doctors-image"
                    src="image/Ellipse 754.png"
                  ></Image>

                  <h3>
                    <b> Name of the Doctor</b>
                  </h3>
                  <p>Qualification</p>
                  <p>Description</p>
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid pt-5 pb-5 mb-5">
            <div class="container text-center">
              <div class="row">
                <div class="col-lg-4 col-md-6">Course Duration & Syllabus</div>

                <div class="col-lg-6 col-md-6">
                  <div
                    id="carouselExampleFade"
                    class="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <Image
                          alt="Carousel"
                          src="..."
                          class="d-block w-100"
                          alt=""
                        ></Image>
                      </div>
                      git add .
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid pt-5 pb-5 mb-5">
            <div class="container text-center text-success">
              <div class="row">
                <div class="col">
                  <p>
                    Estimated salary for chiropractor will increase 42% in 5
                    years{" "}
                  </p>
                </div>
                <div class="col">
                  <p>Receive a salary of Rs 50,000 - 60,000 per month</p>
                </div>
                <div class="col">
                  <p>
                    Chiropractors are expected to grow 17% from 2022 to 2034
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid my-5 py-5 girlBg">
            <div className="container">
              <div class="row p-5">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-5 pt-5">
                  <h2 class="text-success">
                    <b>
                      Start Earning as a Certified Chiropractor in 12 Months
                    </b>
                  </h2>

                  <div class="row row-cols-md-2 mt-5 pt-sm-2 pt-md-4">
                    <div class="col">
                      <button
                        type="button"
                        class="w-100 btn btn-lg btn-success mb-sm-0 mb-3 rounded-pill"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Take the Eligibility Test
                      </button>
                    </div>

                    <div class="col">
                      <a href="tel:+91 9606704304">
                        <button
                          type="button"
                          class=" btn btn-lg btn-outline-success rounded-pill"
                        >
                          Inquire Now
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div class="row text-success">
                    <div class="col text-center pt-0"></div>
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
