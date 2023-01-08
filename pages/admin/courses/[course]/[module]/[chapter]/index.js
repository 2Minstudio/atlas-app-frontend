import React from "react";
import LayoutAdminDashboard from "../../../../../../components/layout/layoutAdminDashboard";
import { getUser, isClientLoggedin } from "../../../../../../helpers/helper";
import { withCookies } from "react-cookie";
import Router, { withRouter } from "next/router";
import {
  getCourse,
  getModule,
  getChapter,
} from "../../../../../../helpers/admin";
import CourseInfo from "../../../../../../components/detail/course";
import ModuleInfo from "../../../../../../components/detail/module";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ChapterInfo from "../../../../../../components/detail/chapter";

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
    const { user, chapter, course, module } = this.state;
    const coursepath = `/admin/courses/${course?.id}`;
    const modulepath = `/admin/courses/${course?.id}/${module?.id}`;
    const paths = {
      "/admin/courses": "Courses",
      [coursepath]: course?.name,
      [modulepath]: module?.name,
      "#": chapter?.name,
    };
    return (
      <LayoutAdminDashboard user={user} paths={paths}>
        <Row>
          <Col>
            <h2>Course Information</h2>

            <CourseInfo course={course} showImage={false} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Module Information</h2>
            <ModuleInfo module={module} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Chapter Information</h2>
            <ChapterInfo chapter={chapter} />
          </Col>
        </Row>
      </LayoutAdminDashboard>
    );
  }
}

export default withCookies(withRouter(ChapterDetails));
