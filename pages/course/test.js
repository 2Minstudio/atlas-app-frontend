import Image from "next/image";
import Banner from "../../components/common/banner";
import styles from "../../styles/Home.module.css";
import LayoutUser from "../../components/layout/layoutUser";
import Link from "next/link";

export default function CourseTest() {
  return (
    <LayoutUser>
      <div className={styles}>
        <main className={styles.main}>
          <div className="container-fluid bg-light p-5">
            <div className="container  rounded rounded-10">
              <div className="row bg-white rounded-10 align-items-center">
                <div className="col-12 p-5 ">
                  <div className="row border-bottom border-dark mb-5">
                    <div className="col">
                      <p>Chiropractor Course Eligibility Test</p>
                    </div>
                    <div className="col text-center">
                      <p className="pb-0 mb-0">10 : 45 </p>
                      <p>
                        <span className="small-text-12">Remaining Time</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <p>1. Here is the 1st question to answer</p>
                  </div>
                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        ></input>
                        <label
                          className="form-check-label"
                          for="flexRadioDefault1"
                        >
                          Option 1
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        ></input>
                        <label
                          className="form-check-label"
                          for="flexRadioDefault1"
                        >
                          Option 2
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        ></input>
                        <label
                          className="form-check-label"
                          for="flexRadioDefault2"
                        >
                          Option 3
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        ></input>
                        <label
                          className="form-check-label"
                          for="flexRadioDefault1"
                        >
                          Option 4
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row text-center justify-content-center">
                  <div className="col">
                    <Link href={"/finalcongratulations"}>
                      <button className="btn btn-success rounded-pill mt-5 col-3 align-middle my-5">
                        Submit
                      </button>
                    </Link>
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
