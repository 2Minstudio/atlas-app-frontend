import Image from "next/image";
import styles from "../../../../styles/Home.module.css";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import { isClientLoggedin, getUser } from "../../../../helpers/helper";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Layout from "../../../../components/layout/index";
import Menu from "../../../../components/menu/studentLeft";
import SupportContact from "../../../../components/common/supportContact";
import ReactPlayer from "react-player";
import {
  getCourseModulesList,
  getChapterPreview,
} from "../../../../helpers/course";
import ModuleList from "../../../../components/course/modulePreviewList";
class DashboardCourseStudy extends React.Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    const token = isClientLoggedin(this.props);
    const {
      router: {
        query: { course: courseid, chapter: chapterid },
      },
    } = this.props;
    if (token) {
      const {
        state,
        data: { user },
      } = await getUser(token);
      if (state) {
        this.setState({ user, courseid, chapterid }, this.loadData);
      }
    } else {
      Router.push("/");
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.router !== prevState.router) {
      const {
        router: {
          query: { course: propcourseid, chapter: propchapterid },
        },
      } = nextProps;
      return { courseid: propcourseid, chapterid: propchapterid };
    } else return null;
  }

  loadData = async () => {
    const { chapterid, courseid } = this.state;
    if (chapterid) {
      const { data: modules } = await getCourseModulesList(courseid);
      const { data, state } = await getChapterPreview(chapterid);
      if (state) {
        this.setState({ data, modules });
      }
    }
  };

  render() {
    const { user, data, modules } = this.state;
    const course = data?.course_info;
    console.log(data, "course ?", modules);
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
                    <div className="row">
                      <div className="col-12">
                        <h3 className="py-3">{course?.name}</h3>
                        {/* <Image
                          src="/image/dashboard/Course-Studying-video.jpg"
                          className="img-fluid"
                          alt="Study course Image"
                          height="840"
                          width="1296"
                        /> */}
                        {data?.video && (
                          <ReactPlayer
                            className="react-player"
                            url={data?.video}
                            controls={true}
                          />
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-8">
                        <div className="row d-flex align-items-center justify-content-center pt-5">
                          <div className="col-1">
                            {/* <Image
                              src="/image/dashboard/student-img.png"
                              className="img-fluid p-1 border rounded-circle border-warning"
                              alt="Study Image"
                              height="100"
                              width="100"
                            /> */}
                          </div>
                          <div className="col-11">
                            <p className="m-0">
                              {data?.module_info?.name} – {data?.name}
                              <br></br>
                              <small>{course?.user?.first_name}</small>
                            </p>
                          </div>
                          <hr className="my-4"></hr>
                          <p>{data?.content}</p>
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
                    <div className="row">
                      <h5 className="pt-4">Course</h5>
                      <div className="col">
                        <ModuleList
                          mode="preview"
                          data={modules}
                          activeModel={data?.module}
                          activeChapter={data?.id}
                        />
                      </div>
                    </div>
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

export default withCookies(withRouter(DashboardCourseStudy));
