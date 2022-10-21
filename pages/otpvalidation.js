import Image from "next/image";
import Banner from "../components/common/banner";
import Layout from "../components/common/layout";
import styles from "../styles/Home.module.css";
export default function Home() {
    return (
      <layoutB>
        <div className={styles}>
          <main className={styles.main}>
          <div className="container-fluid">
            <div className="container">
                <div className="row align-items-center">  

                <div className="col-12 col-sm-12 col-md-6 mb-5 pt-5">
                
                <Image width="120"
                height="65" className="img-fluid myLogoLp" alt="CLogo"  src="/image/logo.png"></Image><b className="text-success">Academy</b>
                
                
<h2 className="mb-5 mt-5">Check for OTP</h2>
<h4 className="text-success">We sent a verification code to your mobile. Enter the code from the mobile in the field below.</h4>
<p className="text-success"><small>******0789</small></p>
<form className="align-items-center text-center">
<div className="mt-5 mb-3">
<h5 className="text-success text-center pb-3"><small>Type your 6 digit security code</small></h5>
<input type="email" className="col-1 p-0 rounded me-3" id="exampleFormControlInput1" placeholder=""></input>
<input type="email" className="col-1 p-0 rounded me-3" id="exampleFormControlInput1" placeholder=""></input>
<input type="email" className="col-1  p-0 rounded me-3" id="exampleFormControlInput1" placeholder=""></input>
<input type="email" className="col-1 p-0 rounded me-3" id="exampleFormControlInput1" placeholder=""></input>
<input type="email" className="col-1 p-0 rounded me-3" id="exampleFormControlInput1" placeholder=""></input>
<input type="email" className="col-1 p-0 rounded me-3" id="exampleFormControlInput1" placeholder=""></input>
</div>




</form>

<div className="row text-center justify-content-center">
<button className="btn btn-success rounded-pill mt-5 col-8 col-sm-6 col-md-6 align-middle mt-5 mb-2">Verify My Account</button>
<p className="small-text-14 mt-0">Didn’t get the code?<a href="#"> Resend</a></p>
</div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
            <Image  width="796" height="1075" className="img-fluid" alt="Forgot Image"  src="/image/landingpg/forgot.png"></Image>
            </div>
            </div>
            </div>
          </div>

          </main>
      </div>
    </layoutB>
  );
}