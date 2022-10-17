import Image from "next/image";
import Banner from "../components/common/banner";
import Layout from "../components/common/layout";
import styles from "../styles/Home.module.css";
export default function Home() {
    return (
      <layoutB>
        <div className={styles}>
          <main className={styles.main}>
          <div class="container-fluid">
            <div class="container">
                <div class="row align-items-center">  

                <div class="col-12 col-sm-12 col-md-6 mb-5 pt-5">
                
                <Image class="img-fluid myLogoLp" alt="CLogo"  src="image/logo.png"></Image><b class="text-success">Academy</b>
                
                
<h2 class="mb-5 mt-5">Check for OTP</h2>
<h4 class="text-success">We sent a verification code to your mobile. Enter the code from the mobile in the field below.</h4>
<p class="text-success"><small>******0789</small></p>
<form class="align-items-center text-center">
<div class="mt-5 mb-3">
<h5 class="text-success text-center pb-3"><small>Type your 6 digit security code</small></h5>
<input type="email" class="col-1 p-0 rounded me-3" id="exampleFormControlInput1" placeholder=""></input>
<input type="email" class="col-1 p-0 rounded me-3" id="exampleFormControlInput1" placeholder=""></input>
<input type="email" class="col-1  p-0 rounded me-3" id="exampleFormControlInput1" placeholder=""></input>
<input type="email" class="col-1 p-0 rounded me-3" id="exampleFormControlInput1" placeholder=""></input>
<input type="email" class="col-1 p-0 rounded me-3" id="exampleFormControlInput1" placeholder=""></input>
<input type="email" class="col-1 p-0 rounded me-3" id="exampleFormControlInput1" placeholder=""></input>
</div>




</form>

<div class="row text-center justify-content-center">
<button class="btn btn-success rounded-pill mt-5 col-8 col-sm-6 col-md-6 align-middle mt-5 mb-2">Verify My Account</button>
<p class="small-text-14 mt-0">Didn’t get the code?<a href="#"> Resend</a></p>
</div>
            </div>
            <div class="col-12 col-sm-12 col-md-6">
            <Image class="img-fluid" alt="Forgot Image"  src="image/landingpg/forgot.png"></Image>
            </div>
            </div>
            </div>
          </div>

          </main>
      </div>
    </layoutB>
  );
}