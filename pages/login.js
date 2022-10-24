import Image from "next/image";
import Link from "next/link";
import Banner from "../components/common/banner";
import LayoutB from "../components/common/layoutGuest";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <LayoutB>
      <div className={styles}>
        <main className={styles.main}>
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 py-5 mb-5">
                  <Image
                    className="img-fluid myLogoLp"
                    width={100}
                    height={100}
                    alt="Logo"
                    src="/image/logo.png"
                  ></Image>
                  <b className="text-success">Academy</b>

                  <h2 className="mb-2 mt-5">Welcome Back!!</h2>
                  <h4 className="mb-5">Please sign in to your account</h4>
                  <form className="pe-5">
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control border-0 border-bottom border-dark rounded-0"
                        id="exampleFormControlInput1"
                        placeholder="Email or Phone Number"
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
                      <div className="row">
                        <div className="col">
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
                            <a href="#">Remember me</a>
                          </label>
                        </div>
                        <div className="col text-end">
                          <p>
                            <Link href={"forgotpassword"}>
                              <a>Forgot Password?</a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div className="row text-center justify-content-center">
                    <Link href={'/coursetest'}>
                    <button className="btn btn-success rounded-pill mt-5 col-5 align-middle my-5">
                      {" "}
                      Signin
                    </button>
                    </Link>
                    <p className="small-text-14 mt-0">
                      New on our platform?{" "}
                      <Link href={"/register"}>
                        <a>Create an account</a>
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                  <Image
                    className="img-fluid"
                    width={797}
                    height={1080}
                    alt="Welcome Image"
                    src="/image/landingpg/welcome.png"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </LayoutB>
  );
}
