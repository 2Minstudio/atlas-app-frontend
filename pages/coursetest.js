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
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import LayoutC from "../components/common/layoutC";
export default function Home() {
  return (
    <LayoutC>
      <div className={styles}>
        <main className={styles.main}>
          <div class="container-fluid bg-light p-5">
            <div className="container  rounded rounded-10">
              <div class="row bg-white rounded-10">
                <div class="col p-5 ">
                  <div class="row border-bottom border-dark mb-5">
                    <div class="col">
                      <p>Chiropractor Course Eligibility Test</p>
                    </div>
                    <div class="col text-center">
                      <p class="pb-0 mb-0">10 : 45 </p>
                      <p>
                        <span class="small-text-12">Remaining Time</span>
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <p>1. Here is the 1st question to answer</p>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        ></input>
                        <label class="form-check-label" for="flexRadioDefault1">
                          Option 1
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        ></input>
                        <label class="form-check-label" for="flexRadioDefault1">
                        Option 2
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        ></input>
                        <label class="form-check-label" for="flexRadioDefault2">
                          Option 3
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        ></input>
                        <label class="form-check-label" for="flexRadioDefault1">
                          Option 4
                        </label>
                      </div>
                    </div>
                  </div>


                  

                 
                </div>
                
              </div>
            </div>
          </div>
        </main>
      </div>
    </LayoutC>
  );
}
