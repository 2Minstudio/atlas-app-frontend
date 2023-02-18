import { Image } from "react-bootstrap";
import Layout from "../../components/layout/index";
import styles from "../../styles/Home.module.css";
import Router, { withRouter } from "next/router";
import Link from "next/link";
import { withCookies } from "react-cookie";
import { isClientLoggedin, getUser } from "../../helpers/helper";
import React from "react";
import { getCoursesList } from "../../helpers/course";
import Features from "../../components/freatures";
import Menu from "../../components/menu/studentLeft";
import SupportContact from "../../components/common/supportContact";
import CommunityBox from "../../components/common/communitybox";
class Dashboard extends React.Component {
  state = {
    user: {},
    data: {},
  };

  async componentDidMount() {
    const token = isClientLoggedin(this.props);
    if (token) {
      const {
        state,
        data: { user },
      } = await getUser(token);
      if (state) {
        this.setState({ user }, this.loadData);
      }
    } else {
      Router.push("/");
    }
  }

  loadData = async () => {
    const { data, state } = await getCoursesList();
    if (state) {
      this.setState({ data });
    }
  };

  render() {
    const { user, data } = this.state;
    return (
      <Layout type="dashboard" user={user}>
        <div className={styles}>
          <main className={styles.main}>
            <div className="container-fluid bg-grey">
              <div className="container pb-5">
                <div className="row g-0 ">
                  <div className="col col-md-3 col-lg-2">
                    <Menu />
                    <SupportContact />
                  </div>
                  <div className="col col-sm-10 col-md-9 col-lg-10 bg-white rounded-bottom-25 p-sm-3 p-md-4 p-lg-5 ">
                    <div className="row d-flex justify-content-start align-items-start pb-3">
                      <h4>Welcome {user?.first_name}</h4>
                    </div>
                    {data?.results?.map((item, i) => (
                      <div key={`item-${i}`} className="row">
                        <div className="col-5 ">
                          <div className="card border-0 greyGrad rounded-25">
                            <div className="card-body p-0 img-fluid">
                              <div>
                                <div className="pos-top d-flex ">
                                  <div className="col-6 justify-content-start p-3">
                                    {/* <div className="col-2">
                                    {item?.image && (
                                      <Image
                                        src={item?.image}
                                        className="img-fluid py-2 pe-2  rounded-circle"
                                        alt="Study Image"
                                        height="100"
                                        width="100"
                                      />
                                    )}
                                  </div> */}

                                    <p className="m-0 text-white fw-bold txt-shadow">
                                      {item?.user?.first_name}
                                      <br></br>
                                      {/* <small>@dianneed</small> */}
                                    </p>
                                  </div>
                                  <div className="col-6 p-3 text-end">
                                    <span class="badge bg-success d-inline text-end">
                                      400 <small>HRS</small>
                                    </span>
                                  </div>
                                </div>

                                {item?.image && (
                                <Image
                                  src={item?.image}
                                  className="rounded-25 img-fluid"
                                  alt="Study Image"
                                  height="420"
                                  width="400"
                                />
                              )}
                              </div>
                              <div className="pos-bottom">
                                <div className="col m-4 p-4 rounded-25 bg-secondary bg-gradient text-center text-white fw-bold">
                                  {item.name}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="row bg-light rounded-25 px-3 py-4 d-flex justify-content-center d-none d-lg-block">
                            <Features
                              features={[
                                {
                                  image: "/image/Group%20223.svg",
                                  text: "Get Live Hands-on Training",
                                },
                                {
                                  image: "/image/Group%20222.svg",
                                  text: "6 Months of Paid Internship",
                                },
                                {
                                  image: "/image/Group%20225.svg",
                                  text: "Learn from the Licensed Chiropractors",
                                },
                                {
                                  image: "/image/Group%20223.svg",
                                  text: "Unlock 400hrs of Study Material",
                                },
                              ]}
                            />
                          </div>

                          <div className="row align-items-center mt-5">
                            <div className="col">
                              <h5>
                                INR {item.cost}
                                <br></br>
                                <small className="text-success small-text-12">
                                  EMI Available
                                </small>
                              </h5>
                              <h6 className="text-success py-3 btn px-0">
                                <Link
                                  href={`/dashboard/${item.id}/preview`}
                                  className="pointer-cursor"
                                  legacyBehavior
                                >
                                  <b>Preview Course</b>
                                </Link>
                              </h6>
                            </div>
                            <div className="col text-end">
                              <Link type="button" href="#" legacyBehavior>
                                <button className="col-12 col-lg-12 col-xl-10 btn btn-lg btn-success rounded-pill mb-3">
                                  Buy Now
                                </button>
                              </Link>
                              <button className="col-12  col-lg-12 col-xl-10 btn btn-lg btn-outline-success rounded-pill ">
                                Enquire Now
                              </button>
                            </div>
                          </div>

                          <div className="row align-items-center mt-3">
                            <div className="col-2 col-md-4 col-lg-6 ">
                              {" "}
                              &nbsp;{" "}
                            </div>
                            <div className="col-6 col-md-8 col-lg-6 text-center"></div>
                          </div>
                        </div>
                        <hr class="border border-success border-1 my-5 opacity-50"></hr>
                      </div>
                    ))}

                    <CommunityBox></CommunityBox>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Layout>
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

export default withCookies(withRouter(Dashboard));
