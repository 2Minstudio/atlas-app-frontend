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
                <div class="col-12 col-sm-6 col-md-6 py-5">
                  <h2 class="mb-5">
                    Get 6 Months of Paid Internship After Finishing The Course.
                  </h2>
                  <h4 class="mb-5">Signup & Get Started!</h4>
                  <form>
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control border-0 border-bottom border-dark rounded-0"
                        id="exampleFormControlInput1"
                        placeholder="Siddanth"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control border-0 border-bottom border-dark rounded-0 mt-4"
                        id="exampleFormControlInput1"
                        placeholder="Email"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control border-0 border-bottom border-dark rounded-0 mt-4"
                        id="exampleFormControlInput1"
                        placeholder="Phone Number"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control border-0 border-bottom border-dark rounded-0 mt-4"
                        id="exampleFormControlInput1"
                        placeholder="Password"
                      ></input>
                    </div>

                    <div class="form-check small-text-14 mt-5">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      ></input>
                      <label class="form-check-label" for="flexCheckDefault">
                        I agree to <a href="#">privacy policy</a> &{" "}
                        <a href="#">terms conditions</a>
                      </label>
                    </div>
                  </form>

                  <div class="row text-center justify-content-center">
                    <button class="btn btn-success rounded-pill mt-5 col-5 align-middle my-5">
                      {" "}
                      Signup
                    </button>
                    <p class="small-text-14 mt-0">
                      Already have an account? Sign in instead
                    </p>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-6">
                  <Image
                    class="img-fluid" alt="Register Image"
                    src="image/landingpg/register.png"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </layoutB>
  );
}
