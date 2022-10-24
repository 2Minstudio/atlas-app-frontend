import Image from "next/image";
import Banner from "../components/common/banner";
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
import LayoutC from "../components/common/layoutUser";
export default function Home() {
  return (
    <LayoutC>
      <div className={styles}>
        <main className={styles.main}>
          <div className="container-fluid bg-light p-5">
            <div className="container  rounded rounded-10">
              <div className="row bg-white rounded-10 align-items-center">
                <div className="col-12 col-sm-12 col-md-6 p-5 ">
                  
                  <div className="row">
                  <FontAwesomeIcon className="Aicon5x text-warning my-4" icon={faThumbsUp} />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 p-5">
                  <div className="rounded-10">
                    <div className="row justify-content-center">
                    <h2 className="py-4">Congratulations, You are one step ahead in becoming a Chiropractor.</h2>
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
