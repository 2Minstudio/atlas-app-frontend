import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import LayoutUser from "../components/layout/layoutUser";

export default function FinalCongratulations() {
  return (
    <LayoutUser>
      <div className={styles}>
        <main className={styles.main}>
          <div className="container-fluid bg-light p-4 p-sm-5">
            <div className="container rounded rounded-10 winheight57 d-flex align-items-center">
              <div className="row bg-white rounded-10">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 p-5">
                  <div className="row">
                    <FontAwesomeIcon
                      className="Aicon5x text-warning my-4"
                      icon={faThumbsUp}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-8 d-flex align-items-center">
                  <div className="rounded-10">
                    <div className="row justify-content-center ">
                      <h2 className="py-0">
                        Congratulations, You are one step ahead in becoming a
                        Chiropractor.
                      </h2>
                      <p>
                        Based on your test submission, we will invite you
                        through email.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </LayoutUser>
  );
}
