import Link from "next/link";
const InquerySection = () => (
  <div className="container-fluid my-5 girlBg">
    <div className="container">
      <div className="row py-5">
        <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 mt-5 pt-5">
          <h2 className="text-success">
            <b>Start Earning as a Certified Chiropractor in 12 Months</b>
          </h2>

          <div className="row row-cols-md-2 mt-5 pt-sm-2 pt-md-4 align-items-center">
            <div className="col-12 col-sm-12 col-md-6 text-left">
              <div className="row">
                <Link href="/register">
                  <a className="nav-link active" aria-current="page">
                    <button
                      type="button"
                      className="btn btn-lg btn-success mb-3 rounded-pill"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Take the Eligibility Test
                    </button>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 text-left">
              <div className="row">
                <a href="tel:+91 9606704304">
                  <button
                    type="button"
                    className=" btn btn-lg btn-outline-success rounded-pill"
                  >
                    Inquire Now
                  </button>
                </a>
              </div>
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
