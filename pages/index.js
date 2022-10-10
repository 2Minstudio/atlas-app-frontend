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
                    <div class="col text-center">
                      <h1>
                        <FontAwesomeIcon class="Aicon" icon={faUserPlus} />
                      </h1>
                      <p>
                        {" "}
                        Live Training with <br></br>Atlas Chiropractors
                      </p>
                    </div>
                    <div class="col text-center">
                      <h1>
                        <FontAwesomeIcon class="Aicon fa-2x" icon={faVideo} />
                      </h1>
                      <p>
                        {" "}
                        400 Hours of Course + <br></br>Paid Internship of 6
                        Months
                      </p>
                    </div>
                  </div>

                  <div class="row text-success">
                    <div class="col text-center">
                      <h1>
                        <FontAwesomeIcon class="Aicon fa-2x" icon={faStar} />
                      </h1>
                      <p>
                        {" "}
                        Become a Certified <br></br> Chiropractor in India
                      </p>
                    </div>
                    <div class="col text-center">
                      <h1>
                        <FontAwesomeIcon
                          class="Aicon fa-2x"
                          icon={faSuitcaseMedical}
                        />
                      </h1>
                      <p>
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
                    <img class="img-fluid" src="image/doctorImage.png" />
                  </div>
                  <div class="col-sm-12 col-md-8">
                    <h2 class="text-success pt-5">
                      <b>Meet Dr. Prathap Addageethala</b>
                    </h2>
                    <p>Director of Atlas Chiropractic & Wellness</p>
                    <p class="pb-4">
                      "Being one of the few licensed and certified Chiropractors
                      in India is a privilege and a responsibility that I take
                      very seriously.
                      <br></br>
                      <br></br>
                      My dream was unique - I wanted to bring my talents to
                      India, Where Chiropractic was largely unheard of unless
                      you watched the TV sitcom Two and a Half Men"
                    </p>
                    <div class="row">
                      <div class="col-sm-12 col-md-6">
                        <div class="row pb-4 pb-md-0">
                          <div class="col-3">
                            <img
                              class="img-fluid"
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
                            <img class="img-fluid" src="image/member.png" />
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
                  <img class="img-fluid p-5" src="image/Ellipse 754.png"></img>

                  <h3>
                    <b> Name of the Doctor</b>
                  </h3>
                  <p>Qualification</p>
                  <p>Description</p>
                </div>
                <div class="col">
                  <img class="img-fluid p-5" src="image/Ellipse 754.png"></img>

                  <h3>
                    <b> Name of the Doctor</b>
                  </h3>
                  <p>Qualification</p>
                  <p>Description</p>
                </div>
                <div class="col">
                  <img class="img-fluid p-5" src="image/Ellipse 754.png"></img>

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
                <div class="col-lg-4 col-md-6">
Course Duration & Syllabus
                  </div>

                  <div class="col-lg-6 col-md-6">
                  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
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
                      <p>Estimated salary for chiropractor will increase 42% in 5 years </p>
                       
                        </div>
                      <div class="col">
                        
                          <p>Receive a salary of Rs 50,000 - 60,000 per month</p>
                          </div>
                          <div class="col">
                            
                          <p>Chiropractors are expected to grow 17% from 2022 to 2034</p>
                          </div></div></div></div>
        </main>
      </div>
    </Layout>
  );
}
