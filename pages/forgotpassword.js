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
                
                <img class="img-fluid myLogoLp" src="image/logo.png"></img><b class="text-success">Academy</b>
                
                
<h2 class="mb-5 mt-5">Forgot Password?</h2>
<h4 class="mb-5">Enter your email or phone number and we'll send you instructions to reset your password.</h4>
<form>
<div class="mb-3">
  <input type="email" class="form-control border-0 border-bottom border-dark rounded-0" id="exampleFormControlInput1" placeholder="Email or Phone Number"></input>
</div>




</form>

<div class="row text-center justify-content-center">
<button class="btn btn-success rounded-pill mt-5 col-5 align-middle my-5"> Send Reset Link</button>
<p class="small-text-14 mt-0"><a href="#">Back to Login</a></p>
</div>
            </div>
            <div class="col-12 col-sm-12 col-md-6">
            <img class="img-fluid" src="image/landingpg/forgot.png"></img>
            </div>
            </div>
            </div>
          </div>

          </main>
      </div>
    </layoutB>
  );
}