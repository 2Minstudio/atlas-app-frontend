import LayoutUser from "../../components/layout/layoutUser";
import styles from "../../styles/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faVideo,
  faStar,
  faSuitcaseMedical,
} from "@fortawesome/free-solid-svg-icons";
export default function CourseWelcome() {
  return (
    <LayoutUser>
      <div className={styles}>
        <main className={styles.main}>
          <div className="container-fluid bg-light p-5">
            <div className="container bg-white rounded rounded-10">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 py-5 px-5">
                  <h2 className="text-success pb-3">Welcome Siddanth </h2>
                  <p className="pb-4">
                    Take the Qualification test to unlock{" "}
                    <b>the chiropractor course</b>
                  </p>
                  <ul className="list-unstyled">
                    <li className="pb-4">
                      <span className="bg-success rounded rounded-circle py-3 px-2">
                        <FontAwesomeIcon
                          className="Aicon text-white fa-2x"
                          icon={faUserPlus}
                        />
                      </span>{" "}
                      Get An Invite & Buy The Chiropractor Course
                    </li>
                    <li className="pb-4">
                      <span className="bg-success rounded rounded-circle py-3 px-2">
                        <FontAwesomeIcon
                          className="Aicon text-white fa-2x"
                          icon={faVideo}
                        />
                      </span>{" "}
                      Unlock 400hrs of Study Material
                    </li>
                    <li className="pb-4">
                      <span className="bg-success rounded rounded-circle py-3 px-2">
                        <FontAwesomeIcon
                          className="Aicon text-white fa-2x"
                          icon={faStar}
                        />
                      </span>{" "}
                      Get Live Hands-on Training{" "}
                    </li>
                    <li className="pb-4">
                      <span className="bg-success rounded rounded-circle py-3 px-2">
                        <FontAwesomeIcon
                          className="Aicon text-white fa-2x"
                          icon={faSuitcaseMedical}
                        />
                      </span>{" "}
                      6 Months of Paid Internship
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-6 py-5 px-5">
                  <div className="whyjoinBg rounded-10">
                    <p className="text-center py-5">
                      Cost of the Eligibility Test
                    </p>
                    <div className="row mb-4">
                      <div className="col-6 text-center">
                        <p className="text-success">
                          {" "}
                          <b>Rs 2000</b>
                        </p>
                        <p>
                          <del>Rs 3500</del>
                        </p>
                      </div>
                      <div className="col-6 text-center">
                        <p>
                          {" "}
                          35% Off<br></br>
                          <span className="small-text-12">
                            + Applicable taxes
                          </span>
                        </p>
                        <p></p>
                      </div>
                    </div>
                    <div className="row justify-content-center mb-3 mt-5">
                      <button className="btn btn-success rounded-pill col-10 col-sm-4">
                        {" "}
                        Take Eligibility Test{" "}
                      </button>
                    </div>
                    <div className="row justify-content-center pb-5">
                      <button className="btn-outline-success btn rounded-pill col-10 col-sm-4">
                        {" "}
                        Try Sample Test{" "}
                      </button>
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
