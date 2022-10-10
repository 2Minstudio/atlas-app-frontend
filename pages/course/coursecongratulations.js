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
                  <h2 class="py-5">Hi Siddanth</h2>
                  <div class="row">
                    <p>
                      Congratulations<br></br>
                      The Eligibility test is all yours. Get qualified and
                      Become a Chiropractor in the Next 12 Months
                    </p>
                  </div>
                </div>
                <div class="col p-5">
                  <div class="rounded-10">
                    <div class="row justify-content-center align-mdl">
                      <button class="btn bg-success rounded-10 col-4 mb-5 text-white ">
                        {" "}
                        Take the Test{" "}
                      </button>
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
