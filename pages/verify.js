import Image from "next/image";
import LayoutGuest from "../components/layout/layoutGuest";
import styles from "../styles/Home.module.css";
export default function Verify() {
  return (
    <LayoutGuest>
      <div className={styles}>
        <main className={styles.main}>
          <div className="container-fluid">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-sm-12 col-md-6 mb-5 pt-5">
                  <Image
                    className="img-fluid myLogoLp"
                    alt="Logo"
                    width="120"
                    height="65"
                    src="/image/logo.png"
                  ></Image>
                  <b className="text-success">Academy</b>
                  <div className="row">
                    <h2 className="mb-5 mt-5">Verify your email</h2>
                    <h4 className="mb-5">
                      Account activation link sent to your email address:
                      welcome@gmail.com Please follow the link inside to
                      continue.
                    </h4>
                    <div className="row">
                      <p className="mt-0">
                        Didn&apos;t receive an email? <a href="#">Resend</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-md-6 d-none d-md-block">
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
