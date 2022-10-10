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
            <div className="container bg-white rounded rounded-10">
              <div class="row">
                <div class="col p-5">
<h2 class="text-success pb-3">Welcome Siddanth </h2>
<p class="pb-4">Take the Qualification test to unlock <b>the chiropractor course</b></p>
<ul class="list-unstyled">
    <li class="pb-4"><FontAwesomeIcon class="Aicon fa-2x text-success" icon={faUserPlus} /> Get An Invite & Buy The Chiropractor Course</li>
    <li class="pb-4"><FontAwesomeIcon class="Aicon fa-2x text-success" icon={faVideo} /> Unlock 400hrs of Study Material</li>
    <li class="pb-4"><FontAwesomeIcon class="Aicon fa-2x text-success" icon={faStar} />Get Live Hands-on Training  </li>
    <li class="pb-4"><FontAwesomeIcon class="Aicon fa-2x text-success" icon={faSuitcaseMedical} />6 Months of Paid Internship</li>
</ul>
                </div>
                <div class="col p-5">
                    <div class="whyjoinBg rounded-10">
                   <p class="text-center py-5">Cost of the Eligibility Test</p> 
                   <div class="row mb-4">
                    <div class="col-6 text-center">
                    <p class="text-success"> <b>Rs 2000</b></p>
                    <p><del>Rs 3500</del></p>
                    </div>
                    <div class="col-6 text-center">
                    <p> 35% Off<br></br>
                    <span class="small-text-12">+ Applicable taxes</span></p>
                    <p></p>
                    </div>
                   </div>
                   <div class="row justify-content-center mb-3 mt-5">
                    <button class="btn btn-success rounded-pill col-4"> Take Eligibility Test </button> 
                    </div>
                    <div class="row justify-content-center pb-5">
                    <button class="btn-outline-success btn rounded-pill col-4"> Try Sample Test </button>
                   </div>
                   </div>
                </div>
                </div></div></div>
        </main>
      </div>
    </LayoutC>
  );
}
