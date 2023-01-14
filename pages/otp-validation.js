import Image from "next/image";
import Logo from "../components/common/logo/logo";
import LayoutGuest from "../components/layout/guest";
import styles from "../styles/Home.module.css";
export default function OtpValidation() {
  return (
    <LayoutGuest>
      <div className={styles}>
        <main className={styles.main}>
        <div className="container-fluid">
              <div className="row winheight">
              <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center">
                <div className="container-sm winheight">
                  <div className="row align-items-center">
                <div className="col-12 col-sm-12 col-md-10 col-lg-8 pt-5 mb-0 mx-auto">
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
                    <div className="mt-5 mb-2">
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
                   
                  
                   </div> {/* End container 1 */}
                   </div>{/* End row 1 */}
                 </div>{/* End col 1 */}
                 <div className="col-12 col-sm-12 col-md-6 greyGrad d-flex align-items-end">
                   <div className="container-sm">
                   <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 col-xxl-7 d-none d-md-block mx-auto">
                         <Image
                           className="img-fluid"
                           width={797}
                           height={1393}
                           alt="Welcome Image"
                           src="/image/healthcare-workers-prevent-virus-insurance-medicine-concept-cheerful-smiling-beautiful-doctor-fe.png"
                         ></Image>
                       </div>
                   </div>
                 </div>
                 {/* End container 2 */}
               </div>{/* End col 2 */}
               </div>
        </main>
      </div>
    </LayoutGuest>
  );
}
