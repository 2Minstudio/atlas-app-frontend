import { Image } from "react-bootstrap";
import Layout from "../../../components/layout/index";
import styles from "../../styles/Home.module.css";
import Router, { withRouter } from "next/router";
import Link from "next/link";
import { withCookies } from "react-cookie";
import { isClientLoggedin, getUser } from "../../../helpers/helper";
import React from "react";
import { getCoursesList } from "../../../helpers/course";
import Features from "../../../components/freatures";
import Menu from "../../../components/menu/studentLeft";
import SupportContact from "../../../components/common/supportContact";
import CommunityBox from "../../../components/common/communitybox";

class Settings extends React.Component {
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
    console.log(data, "data");
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
                    <h3>User Settings - Coming soon</h3>

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

export default withCookies(withRouter(Settings));
