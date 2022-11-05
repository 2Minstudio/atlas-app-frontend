import styles from "../../styles/Home.module.css";
import LayoutUser from "../../components/layout/layoutUser";
export default function Home() {
  return (
    <LayoutUser>
      <div className={styles}>
        <main className={styles.main}>
          <div className="container-fluid bg-light p-5">
            <div className="container  rounded rounded-10">
              <div className="row bg-white rounded-10 align-items-center">
                <div className="col-12 col-sm-12 col-md-6 p-4 px-sm-5 ">
                  <h2 className="py-5">Hi Siddanth</h2>
                  <div className="row">
                    <p>
                      Congratulations<br></br>
                      The Eligibility test is all yours. Get qualified and
                      Become a Chiropractor in the Next 12 Months
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 pb-5 pb-sm-5 pb-md-0">
                  <div className="row align-items-center">
                  <div className="rounded-10 sm-pb-5">
                    <div className="row justify-content-center">
                      <button className="btn btn-success rounded-10 col-8 col-sm-6 col-md-6 text-white ">
                        {" "}
                        Take the Test{" "}
                      </button>
                    </div>
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
