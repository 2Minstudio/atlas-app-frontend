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
              <div class="row align-middle">
                <div class="col-12 col-sm-12 col-md-6 py-5 mb-5">
                  <Image class="img-fluid myLogoLp" alt="Logo"  src="/image/logo.png"></Image>
                  <b class="text-success">Academy</b>
<div class="row">
                  <h2 class="mb-5 mt-5">Verify your email</h2>
                  <h4 class="mb-5">
                  Account activation link sent to your email address: welcome@gmail.com Please follow the link inside to continue.
                  </h4>
                  <div class="row">
                    <p class="mt-0">
                      Didn&apos;t receive an email? <a href="#">Resend</a>
                    </p>
                  </div>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 align-items-center">
                  <Image class="img-fluid" alt="Regidter Image"  src="image/landingpg/register.png"></Image>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </layoutB>
  );
}
