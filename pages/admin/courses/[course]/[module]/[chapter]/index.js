import React from "react";
import LayoutDashboard from "../../../../../../components/layout/layout-dashboard";
import { getUser, isClientLoggedin } from "../../../../../../helpers/helper";
import { withCookies } from "react-cookie";
import { withRouter } from "next/router";
import {
  getCourse,
  getModule,
  getCourses,
  getChapter,
} from "../../../../../../helpers/admin";
import { Button } from "react-bootstrap";
class ChapterDetails extends React.Component {
  state = {
    user: {},
  };

  loadData = async (courseid, moduleid, chapterid) => {
    await getCourse(courseid).then(async (courseresp) => {
      const { data: course } = courseresp;
      await getModule(moduleid).then(async (moduleresp) => {
        const { data: module } = moduleresp;
        await getChapter(chapterid).then((resp) => {
          const { data: chapter } = resp;
          this.setState({
            module,
            course,
            chapter,
          });
        });
      });
    });
  };

  async componentDidMount() {
    const token = isClientLoggedin(this.props);
    const {
      router: {
        query: { course: courseid, module: moduleid, chapter: chapterid },
      },
    } = this.props;
    if (token) {
      const {
        state,
        data: { user },
      } = await getUser(token);
      if (state) {
        this.setState(
          {
            user,
            courseid,
            moduleid,
            chapterid,
          },
          async () => {
            if (courseid && moduleid && chapterid)
              await this.loadData(courseid, moduleid, chapterid);
          }
        );
      }
    } else {
      Router.push("/");
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.router !== prevState.router) {
      const {
        router: {
          query: { course: courseid, module: moduleid, chapter: chapterid },
        },
      } = nextProps;
      return {
        courseid,
        moduleid,
        chapterid,
      };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.courseid !== this.state.courseid &&
      prevState.moduleid !== this.state.moduleid &&
      prevState.chapterid !== this.state.chapterid
    ) {
      this.loadData(
        this.state.courseid,
        this.state.moduleid,
        this.state.chapterid
      );
    }
  }

  render() {
    const { user, chapter } = this.state;
    return (
      <LayoutDashboard user={user}>
        <h1>{chapter?.name}</h1>
        <p>{chapter?.content}</p>
        <div>
          {chapter?.meterial && (
            <>
              <Button>Download Material</Button>
            </>
          )}
        </div>
        {chapter?.video && (
          <>
            <video width="320" height="240">
              <source src={chapter?.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>
        )}
      </LayoutDashboard>
    );
  }
}

export default withCookies(withRouter(ChapterDetails));
