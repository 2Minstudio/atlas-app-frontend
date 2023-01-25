import Image from "next/image";

function Feature({ image, text }) {
  return (
    <div className="col-12 col-sm-6">
      <div className="row d-flex align-items-center">
        <div className="col-3 pt-2 g-0">
          <Image
            className="img-fluid"
            alt="Doctor Image"
            src={image}
            height="50"
            width="50"
          />
        </div>
        <div className="col-9">
          <p className="text-left m-0"> {text}</p>
        </div>
      </div>
    </div>
  );
}

export default Feature;