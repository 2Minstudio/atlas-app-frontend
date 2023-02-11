import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="container-fluid bannerBg mb-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 mb-3 ">
          <div className="col-lg-6 col-md-7 col-sm-12 mt-4 pb-5">
            <h1>
              <b>Start To Earn ,</b> <br />
              Before Finishing <br />
              The Chiropractor <br />
              Course
            </h1>
            <h3 className="my-5 text-success">
              Learn from the Licensed <br></br>Chiropractor in India.
            </h3>

            <div className="d-grid gap-2 d-lg-flex justify-content-lg-start">
              <Link href="/register" legacyBehavior>
                {/* <a className="nav-link p-0 active" aria-current="page"> */}
                <button
                  className="btn btn-lg btn-success rounded-pill"
                  type="button"
                >
                  Take the Eligibility Test
                </button>
                {/* </a> */}
              </Link>
              <a
                className="nav-link p-0 active"
                aria-current="page"
                href="tel:+91 9606704304"
              >
                <button
                  className="btn btn-lg btn-outline-success rounded-pill"
                  type="button"
                >
                  Enquire Now
                </button>
              </a>
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

              <div className="col-12 col-sm-4 text-center">
                <Image
                  className="image-fluid"
                  height="91"
                  width="220"
                  alt="Banner Image"
                  src="/image/header/card1.png"
                ></Image>
              </div>
              <div className="col-12 col-sm-4 text-center">
                <Image
                  className="image-fluid"
                  height="71"
                  width="220"
                  alt="Banner Image"
                  src="/image/header/card3.png"
                ></Image>
              </div>
              <div className="col-12 col-sm-4 text-center">
                <Image
                  className="image-fluid"
                  height="76"
                  width="220"
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
