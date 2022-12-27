import Link from "next/link";
const InquerySection = () => (
  <div className="container-fluid my-5 girlBg">
    <div className="container">
      <div className="row py-5">
        <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 mt-5 pt-5">
          <h2 className="text-success">
            <b>Start Earning as a Certified Chiropractor in 12 Months</b>
          </h2>

          <div className="row mt-5 pt-sm-2 pt-md-4 align-items-center">
            <div class="d-grid gap-2 d-sm-flex justify-content-lg-start">
              <Link
                href="/register"
                className="nav-link p-0 active"
                aria-current="page"
                legacyBehavior
              >
                <button
                  class="btn btn-lg btn-success rounded-pill"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Take the Eligibility Test
                </button>
              </Link>
              <a
                className="nav-link p-0 active"
                aria-current="page"
                href="tel:+91 9606704304"
              >
                <button
                  class="btn btn-lg btn-outline-success rounded-pill"
                  type="button"
                >
                  Inquire Now
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row text-success">
            <div className="col text-center pt-0"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InquerySection;
