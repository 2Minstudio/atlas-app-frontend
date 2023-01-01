import React from "react";
import LayoutDashboard from "../../../../../../components/layout/layout-dashboard";
import { getUser, isClientLoggedin } from "../../../../../../helpers/helper";
import { withCookies } from "react-cookie";
import { withRouter } from "next/router";
import {
  getCourse,
  getModule,
  getCourses,
  getChapter
} from "../../../../../../helpers/admin";
class ChapterDetails extends React.Component {
  state = {
    user: {},
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
      const resp = await getCourses();
      const { data } = resp;
      if (state) {
        await getCourse(courseid).then(async (courseresp) => {
          const { data: course } = courseresp;
          await getModule(moduleid).then(async (moduleresp) => {
            const { data: module } = moduleresp;
            await getChapter(chapterid).then((resp) => {
              const { data: chapter } = resp;
              this.setState({
                user,
                data,
                module,
                course,
                courseid,
                moduleid,
                chapterid,
                chapter,
              });
            });
          });
        });
      }
    } else {
      Router.push("/");
    }
  }
  render() {
    const { user, chapter } = this.state;
    return <LayoutDashboard user={user}>
      <h1>{chapter?.name}</h1>
      <p>{chapter?.content}</p>
      <p>{chapter?.meterial}</p>
      <p>{chapter?.video}</p>
      </LayoutDashboard>;
  }
}

export default withCookies(withRouter(ChapterDetails));
