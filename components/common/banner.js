import Image from "next/image";
export default function Banner() {
  return (
    <div className="container-fluid bannerBg pb-5 mb-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 mb-3 ">
          <div className="col-lg-5 col-md-5 col-sm-6 mt-4 pb-5">
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
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-success mb-sm-0 mb-3 rounded-pill"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Take the Eligibility Test
                </button>
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
          <div className="col-lg-7 col-md-7 col-sm-6 pt-5">
            <div className="row">
              <Image
                className="image-fluid negative20 align-bottom"
                height="515"
                width="713"
                alt="Banner Image"
                src="/image/bg/headerimageright.png"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
