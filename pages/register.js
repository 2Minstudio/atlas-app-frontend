import Image from "next/image";
import Link from "next/link";
import Logo from "../components/common/logo/logo";
import LayoutGuest from "../components/layout/layoutGuest";
import styles from "../styles/Home.module.css";
export default function Register() {
  return (
    <LayoutGuest>
      <div className={styles}>
        <main className={styles.main}>
          <div className="container-fluid">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-sm-12 col-md-6 py-5">
                  <Logo align="left"/>
                  <h2 className="my-5">
                    Get 6 Months of Paid Internship After Finishing The Course.
                  </h2>
                  <h4 className="mb-5">Signup & Get Started!</h4>
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control border-0 border-bottom border-dark rounded-0"
                        id="exampleFormControlInput1"
                        placeholder="Siddanth"
                      ></input>
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control border-0 border-bottom border-dark rounded-0 mt-4"
                        id="exampleFormControlInput1"
                        placeholder="Email"
                      ></input>
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control border-0 border-bottom border-dark rounded-0 mt-4"
                        id="exampleFormControlInput1"
                        placeholder="Phone Number"
                      ></input>
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control border-0 border-bottom border-dark rounded-0 mt-4"
                        id="exampleFormControlInput1"
                        placeholder="Password"
                      ></input>
                    </div>

                    <div className="form-check small-text-14 mt-5">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      ></input>
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        I agree to <a href="#">privacy policy</a> &{" "}
                        <a href="#">terms conditions</a>
                      </label>
                    </div>
                  </form>

                  <div className="row text-center justify-content-center">
                    <Link href={"/course/test"}>
                      <button className="btn btn-success rounded-pill mt-5 col-8 col-sm-5 col-md-6 col-lg-5 align-middle my-5">
                        {" "}
                        Signup
                      </button>
                    </Link>
                    <p className="small-text-14 mt-0">
                      Already have an account?{" "}
                      <Link href={"/login"}>
                        <a>Sign in instead</a>
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 d-none d-md-block">
                  <Image
                    width="797"
                    height="1080"
                    className="img-fluid"
                    alt="Register Image"
                    src="/image/landingpg/register.png"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </LayoutGuest>
  );
}
