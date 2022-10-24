import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="container-fluid bannerBg pb-5 mb-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 mb-3 ">
          <div className="col-lg-6 col-md-7 col-sm-12 mt-4 pb-5">
            <h1>
              <b>Start To Earn ,</b> <br />
              Before Finishing <br />
              The Chiropractor <br />
              Course
            </h1>
            <h5 className="my-5 text-success">
              Learn from the Licensed Chiropractor in India.
            </h5>
            <div className="row row-cols-md-2 mt-5 pt-sm-2 pt-md-4">
              <div className="col">
                <Link href="/course/test">
                  <a
                    class="nav-link active"
                    aria-current="page"
                  >
                    <button
                      type="button"
                      className="w-100 btn btn-lg btn-success mb-sm-0 mb-3 rounded-pill"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Take the Eligibility Test
                    </button>
                  </a>
                </Link>
              </div>

              <div className="col">
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
          <div className="d-xxl-none d-xl-none d-lg-none d-md-none d-sm-block col-sm-12 pt-5">
            <div className="row">
              {/* <Image
                className="image-fluid"
                height="515"
                width="713"
                alt="Banner Image"
                src="/image/bg/headerimageright.png"
              ></Image> */}

              <div className="col-12">
                <Image
                  className="image-fluid"
                  height="289"
                  width="700"
                  alt="Banner Image"
                  src="/image/header/card1.png"
                ></Image>
              </div>
              <div className="col-12">
                <Image
                  className="image-fluid"
                  height="241"
                  width="700"
                  alt="Banner Image"
                  src="/image/header/card3.png"
                ></Image>
              </div>
              <div className="col-12">
                <Image
                  className="image-fluid"
                  height="226"
                  width="700"
                  alt="Banner Image"
                  src="/image/header/card2.png"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
