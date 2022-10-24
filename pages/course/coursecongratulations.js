import Image from "next/image";
import Banner from "../../components/common/banner";
import Layout from "../../components/common/layout";
import styles from "../../styles/Home.module.css";

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
import LayoutC from "../../components/common/layoutUser";
export default function Home() {
  return (
    <LayoutC>
      <div className={styles}>
        <main className={styles.main}>
          <div className="container-fluid bg-light p-5">
            <div className="container  rounded rounded-10">
              <div className="row bg-white rounded-10 align-items-center">
                <div className="col-12 col-sm-12 col-md-6 p-5 ">
                  <h2 className="py-5">Hi Siddanth</h2>
                  <div className="row">
                    <p>
                      Congratulations<br></br>
                      The Eligibility test is all yours. Get qualified and
                      Become a Chiropractor in the Next 12 Months
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 p-5">
                  <div className="rounded-10">
                    <div className="row justify-content-center">
                      <button className="btn bg-success rounded-10 col-8 col-md-4 mb-5 text-white ">
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
