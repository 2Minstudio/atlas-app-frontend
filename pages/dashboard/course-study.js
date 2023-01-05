import styles from "../styles/Home.module.css";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import { isClientLoggedin, getUser } from "../../helpers/helper";
import React from "react";
import LayoutDashboard from "../../components/layout/layoutDashboard";

class DashboardCourseStudy extends React.Component {
  state = {
    user: {},
  };
  componentDidMount() {
    const token = isClientLoggedin(this.props);
    if (token) {
      getUser(token)
        .then((resp) => {
          // this.setState({user});
          console.log(resp, "resp");
        })
        .catch((error) => {
          console.log(error, "error");
        });
    }
  }

  render() {
    const { user } = this.state;
    return (
      <LayoutDashboard user={user}>
        <div className={styles}>
          <main className={styles.main}>
            <div className="container-fluid bg-grey">
              <div className="container pb-5">
                <div className="row g-0 ">
                  <div className="col col-md-3 col-lg-2">
                    <div className="dashboard-menu-box d-flex align-items-center">
                      <ul className="list-group flex-fill">
                        <li className="list-group-item  active"> Home </li>
                        <li className="list-group-item "> Progress </li>
                        <li className="list-group-item "> Community</li>
                        <li className="list-group-item "> Settings</li>
                      </ul>
                    </div>
                    <div className="container dashboard-support-box d-flex align-items-end">
                      <div className="row">
                        <div className="col pt-5 pe-4">
                          <div className="card bg-grey rounded-25 p-0">
                            <div className="card-body ">
                              <h5 className="card-title">Support 24/7</h5>
                              <h6 className="card-subtitle mb-2 text-muted">
                                Contact us anytime
                              </h6>
                              <p className="card-text"></p>
                              <buton className=" btn btn-success"> Start</buton>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col col-sm-10 col-md-9 col-lg-10 bg-white rounded-bottom-25 p-sm-3 p-md-4 p-lg-5 ">
                    <div class="row">
                      <div className="col-8">
                        <h3 className="py-3">Chiropractor Course</h3>
                        <image
                          src="image/dashboard/Course-Studying-video.jpg"
                          className="img-fluid"
                          alt="Study course Image"
                          height="840"
                          width="1296"
                        />
                      </div>
                      <div className="col-4">
                        <h3 className="py-3">Lessons</h3>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item border-bottom rounded-0">
                            Back Pain<br></br> <small>Leson 4 . 11min</small>
                          </li>
                          <li class="list-group-item border-bottom rounded-0">
                            Neck Pain<br></br> <small>Leson 4 . 11min</small>
                          </li>
                          <li class="list-group-item border-bottom rounded-0">
                            Skeleton System<br></br>{" "}
                            <small>Leson 4 . 11min</small>
                          </li>
                          <li class="list-group-item border-bottom rounded-0">
                            Best Practices<br></br>{" "}
                            <small>Leson 4 . 11min</small>
                          </li>
                          <li class="list-group-item rounded-0">
                            Nervous system<br></br>{" "}
                            <small>Leson 4 . 11min</small>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-8">
                        <div className="row d-flex align-items-center justify-content-center pt-5">
                          <div className="col-1">
                            <image
                              src="image/dashboard/student-img.png"
                              className="img-fluid p-1 border rounded-circle border-warning"
                              alt="Study Image"
                              height="100"
                              width="100"
                            />
                          </div>
                          <div className="col-11">
                            <p className="m-0">
                              Lesson 6 – Implement Navigation<br></br>
                              <small>@dianneed</small>
                            </p>
                          </div>
                          <hr className="my-4"></hr>
                          <p>
                            In this lesson, you use navigation controllers and
                            segues to create the navigation flow of the
                            FoodTracker app. At the end of the lesson, you’ll
                            have a complete navigation scheme and interaction
                            flow for the app.
                          </p>
                        </div>
                      </div>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </LayoutDashboard>
    );
  }
}

// export async function getServerSideProps(ctx) {
//   const token = await isLoggedin(ctx);
//   if (token) {
//     const user = await getUser(ctx);
//     console.log(user,'user??');
//     return { props: { user: user } };
//   }

//   return { user: false };
// }

export default withCookies(withRouter(DashboardCourseStudy));
