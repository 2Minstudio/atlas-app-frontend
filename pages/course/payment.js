import styles from "../../styles/Home.module.css";
import LayoutUser from "../../components/layout/layoutUser";

export default function Payment() {
  return (
    <LayoutUser>
      <div className={styles}>
        <main className={styles.main}>
          <div className="container-fluid bg-light py-5">
            <div className="container  rounded rounded-10">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 p-5 bg-white rounded-10">
                  <h2 className="py-5">Choose Your Payment method</h2>
                  <div className="row">
                    <div className="form-check pb-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      ></input>
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Credit Card
                      </label>
                    </div>
                    <div className="form-check pb-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      ></input>
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        UPI
                      </label>
                    </div>
                    <div className="form-check pb-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      ></input>
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Net banking
                      </label>
                    </div>
                  </div>
                  <div className="row pt-5">
                    <div className="col">
                      <button className="btn btn-success rounded-pill">
                        Place Order
                      </button>
                    </div>
                    <div className="col">
                      <p>
                        <a href="#"> Go back </a>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 p-5">
                  <div className="rounded-10">
                    <p className="text-center pt-5 pb-3">Billing Details</p>
                    <div className="row justify-content-center mb-3 ">
                      <button className="btn btn-lg border shadow-sm border-opacity-10 rounded-10 col-8 p-5 mb-5">
                        {" "}
                        Eligibility Test{" "}
                      </button>
                    </div>
                    <div className="row mb-4 justify-content-center px-5">
                      <div className="col-6 ">
                        <p> 1 x Test Session</p>
                      </div>
                      <div className="col-6 text-end">
                        <p> ₹ 2000.00</p>
                      </div>
                    </div>
                    <div className="row mb-4 px-5">
                      <div className="col-6 ">
                        <p> Tax</p>
                      </div>
                      <div className="col-6 text-end">
                        <p> ₹ 200.00</p>
                      </div>
                    </div>
                    <div className="row mb-4 px-5">
                      <div className="col-6 ">
                        <p> total</p>
                      </div>
                      <div className="col-6 text-end">
                        <p> ₹ 2200.00</p>
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
