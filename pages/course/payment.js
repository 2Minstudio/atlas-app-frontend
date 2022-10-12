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

import LayoutC from "../../components/common/layoutC";
export default function Home() {
  return (
    <LayoutC>
      <div className={styles}>
        <main className={styles.main}>
          
          <div class="container-fluid bg-light py-5">
            <div className="container  rounded rounded-10">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-6 p-5 bg-white rounded-10">
<h2 class="py-5">Choose Your Payment method</h2>
<div class="row">
<div class="form-check pb-4">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
  <label class="form-check-label" for="flexRadioDefault1">
  Credit Card
  </label>
</div>
<div class="form-check pb-4">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
  <label class="form-check-label" for="flexRadioDefault2">
  UPI
  </label>
</div>
<div class="form-check pb-4">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
  <label class="form-check-label" for="flexRadioDefault1">
  Net banking
  </label>
</div>
</div>
<div class="row pt-5">
    <div class="col">
<button class="btn btn-success rounded-pill">Place Order</button>
    </div>
    <div class="col">
<p><a href="#">  Go back </a> </p>
    </div>
</div>

                </div>
                <div class="col-12 col-sm-12 col-md-6 p-5">
                    <div class="rounded-10">
                   <p class="text-center pt-5 pb-3">Billing Details</p> 
                   <div class="row justify-content-center mb-3 ">
                    <button class="btn btn-lg border shadow-sm border-opacity-10 rounded-10 col-8 p-5 mb-5"> Eligibility Test </button> 
                    </div>
                   <div class="row mb-4 justify-content-center px-5">
                    <div class="col-6 ">
                    <p> 1 x Test Session</p>
                    </div>
                    <div class="col-6 text-end">
                    <p> ₹ 2000.00</p>
                    </div>
                   </div>
                   <div class="row mb-4 px-5">
                    <div class="col-6 ">
                    <p> Tax</p>
                    </div>
                    <div class="col-6 text-end">
                    <p> ₹ 200.00</p>
                    </div>
                   </div>
                   <div class="row mb-4 px-5">
                    <div class="col-6 ">
                    <p> total</p>
                    </div>
                    <div class="col-6 text-end">
                    <p> ₹ 2200.00</p>
                    </div>
                   </div>
                   
                    
                   </div>
                </div>
                </div></div></div>
        </main>
      </div>
    </LayoutC>
  );
}
