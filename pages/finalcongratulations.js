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
                  
                  <div class="row">
                  <FontAwesomeIcon class="Aicon5x text-warning my-4" icon={faThumbsUp} />
                  </div>
                </div>
                <div class="col p-5">
                  <div class="rounded-10">
                    <div class="row justify-content-center">
                    <h2 class="py-4">Congratulations, You are one step ahead in becoming a Chiropractor.</h2>
                    <p>Based on your test submission, we will invite you through email.</p>
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
