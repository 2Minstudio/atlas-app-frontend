function CommunityBox({ type }) {
  return type ? (
    <>
      <div className="col-4 ">
        <div className="row d-flex  align-items-center">
          <div className="col-12 py-5 text-center">
            <button className="btn btn-success rounded-pill p-3 ">
              Ask A Question
            </button>
          </div>
          <div className="col-12 text-center">
            <button className="btn btn-outline-success rounded-pill p-3">
              Go to community
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="row">
        <div className="col">
          <h5 className="pt-5">Community</h5>
        </div>
        <div className="col-1 btn">
          <h3 className="text-success text-center"> ... </h3>
        </div>
      </div>
      <div className="row">
        <div className="col mt-4">
          <button className="btn btn-success rounded-pill p-3 me-3">
            Ask A Question
          </button>
          <button className="btn btn-outline-success rounded-pill p-3">
            Go to community
          </button>
        </div>
      </div>
    </>
  );
}

export default CommunityBox;
