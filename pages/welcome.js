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
                <div class="row">  

                <div class="col-12 col-sm-12 col-md-6 py-5 mb-5">
                
                <Image class="img-fluid myLogoLp" alt="Logo" src="image/logo.png"></Image><b class="text-success">Academy</b>
                
                
<h2 class="mb-2 mt-5">Welcome Back!!</h2>
<h4 class="mb-5">Please sign in to your account</h4>
<form class="pe-5">
<div class="mb-3">
  <input type="email" class="form-control border-0 border-bottom border-dark rounded-0" id="exampleFormControlInput1" placeholder="Email or Phone Number"></input>
</div>
<div class="mb-3">
<input type="email" class="form-control border-0 border-bottom border-dark rounded-0 mt-4" id="exampleFormControlInput1" placeholder="Password"></input>
</div>

<div class="form-check small-text-14 mt-5">
  <div class="row">
  <div class="col">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label class="form-check-label" for="flexCheckDefault">
  <a href="#">Remember me</a> 
  </label>
  </div>
  <div class="col text-end">
  <p><a href="#">Forgot Password?</a></p>
  </div>
  </div>
</div>

</form>

<div class="row text-center justify-content-center">
<button class="btn btn-success rounded-pill mt-5 col-5 align-middle my-5"> Signin</button>
<p class="small-text-14 mt-0">New on our platform? <a href="#">Create an account</a></p>
</div>
            </div>
            <div class="col-12 col-sm-12 col-md-6">
            <Image class="img-fluid" alt="Welcome Image" src="image/landingpg/welcome.png"></Image>
            </div>
            </div>
            </div>
          </div>

          </main>
      </div>
    </layoutB>
  );
}