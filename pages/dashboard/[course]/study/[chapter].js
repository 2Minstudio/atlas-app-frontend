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
import CommunityBox from "../../../../components/common/communitybox";
class DashboardCourseStudy extends React.Component {
  state = {
    user: {},
  };

  async componentDidUpdate() {
    this.loadData();
  }

  async componentDidMount() {
    // console.log("Hello");
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

  loadData = async () => {
    // console.log("Load data");
    const { chapterid, courseid } = this.state;
    if (chapterid) {
      const { data: modules } = await getCourseModulesList(courseid);
      const { data, state } = await getChapterPreview(chapterid);
      if (state) {
        this.setState({ data, modules });
      }
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.router !== prevState.router) {
      const {
        router: {
          query: { course: propcourseid, chapter: propchapterid },
        },
      } = nextProps;
      // this.setState(
      //   { courseid: propcourseid, chapterid: propchapterid },
      //   this.loadData
      // );
      return { courseid: propcourseid, chapterid: propchapterid };
    } else return null;
  }

  render() {
    const { user, data, modules } = this.state;
    const course = data?.course_info;
    // console.log(data, "course ?", modules);
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
                        {data?.video && (
                          <ReactPlayer
                            className="react-player"
                            url={data?.video}
                            width="1296"
                            height="840"
                            controls={true}
                          />
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-8">
                        <div className="row d-flex align-items-center justify-content-center pt-5">
                          <div className="col-1">
                            <Image
                              src="/image/dashboard/student-img.png"
                              className="img-fluid p-1 border rounded-circle border-warning"
                              alt="Study Image"
                              height="100"
                              width="100"
                            />
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
                      <CommunityBox type={'compact'} />
                    </div>
                    <div className="row">
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

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default withCookies(withRouter(DashboardCourseStudy));
