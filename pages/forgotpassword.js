import Image from "next/image";

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
                height="65" className="Img-fluid myLogoLp" alt="logo" src="/image/logo.png"></Image>
                <b className="text-success">Academy</b>
                
                
<h2 className="mb-5 mt-5">Forgot Password?</h2>
<h4 className="mb-5">Enter your email or phone number and we&apos;ll send you instructions to reset your password.</h4>
<form>
<div className="mb-3">
  <input type="email" className="form-control border-0 border-bottom border-dark rounded-0" id="exampleFormControlInput1" placeholder="Email or Phone Number"></input>
</div>




</form>

<div className="row text-center justify-content-center">
<button className="btn btn-success rounded-pill mt-5 col-5 align-middle my-5"> Send Reset Link</button>
<p className="small-text-14 mt-0"><a href="#">Back to Login</a></p>
</div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
            <Image width="796" height="1095" className="Img-fluid" alt="forgot-image" src="/image/landingpg/forgot.png"></Image>
            </div>
            </div>
            </div>
          </div>

          </main>
      </div>
    </layoutB>
  );
}