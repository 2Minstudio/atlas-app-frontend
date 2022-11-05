import Image from "next/image";
import Logo from "../components/common/logo/logo";
import LayoutGuest from "../components/layout/layoutGuest";
import styles from "../styles/Home.module.css";
export default function OtpValidation() {
  return (
    <LayoutGuest>
      <div className={styles}>
        <main className={styles.main}>
          <div className="container-fluid">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-sm-12 col-md-6 mb-5 pt-5">
                  <Logo />

                  <h2 className="mb-5 mt-5">Check for OTP</h2>
                  <h4 className="text-success">
                    We sent a verification code to your mobile. Enter the code
                    from the mobile in the field below.
                  </h4>
                  <p className="text-success">
                    <small>******0789</small>
                  </p>
                  <form className="align-items-center text-center">
                    <div className="mt-5 mb-3">
                      <h5 className="text-success text-center pb-3">
                        <small>Type your 6 digit security code</small>
                      </h5>
                      <input
                        type="number"
                        className="col-1 p-0 rounded me-3"
                        id="exampleFormControlInput1"
                        placeholder=""
                      ></input>
                      <input
                        type="number"
                        className="col-1 p-0 rounded me-3"
                        id="exampleFormControlInput1"
                        placeholder=""
                      ></input>
                      <input
                        type="number"
                        className="col-1  p-0 rounded me-3"
                        id="exampleFormControlInput1"
                        placeholder=""
                      ></input>
                      <input
                        type="number"
                        className="col-1 p-0 rounded me-3"
                        id="exampleFormControlInput1"
                        placeholder=""
                      ></input>
                      <input
                        type="number"
                        className="col-1 p-0 rounded me-3"
                        id="exampleFormControlInput1"
                        placeholder=""
                      ></input>
                      <input
                        type="number"
                        className="col-1 p-0 rounded me-3"
                        id="exampleFormControlInput1"
                        placeholder=""
                      ></input>
                    </div>
                    <div className="row text-center justify-content-center">
                      <button className="btn btn-success rounded-pill mt-5 col-8 col-sm-6 col-md-6 align-middle mt-5 mb-2">
                        Verify My Account
                      </button>
                      <p className="small-text-14 mt-0">
                        Didn’t get the code?<a href="#"> Resend</a>
                      </p>
                    </div>
                  </form>

                  <h2 className="mb-5 mt-5">Check for OTP</h2>
                </div>
                <div className="col-12 col-sm-12 col-md-6 d-none d-md-block">
                  <Image
                    width="796"
                    height="1075"
                    className="img-fluid"
                    alt="Forgot Image"
                    src="/image/landingpg/forgot.png"
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
