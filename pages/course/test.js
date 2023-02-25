import Link from "next/link";
import React from "react";
import { Form } from "react-bootstrap";
import Layout from "../../components/layout/index";
import styles from "../../styles/Home.module.css";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import { isLoggedin, isClientLoggedin, getUser } from "../../helpers/helper";
import StopWatch from "../../components/stopwatch/StopWatch";
import { getUserTest } from "../../helpers/helper";

class Test extends React.Component {
  state = {
    user: {},
    test: {},
  };

  async componentDidMount() {
    const token = isClientLoggedin(this.props);
    if (token) {
      const {
        state,
        data: { user },
      } = await getUser(token);

      if (state) {
        const { data: test } = await getUserTest(1);
        this.setState({ user, test });
      }
    } else {
      Router.push("/");
    }
  }

  stopedWatch = () => {
    console.log("Triggered ");
  };

  render() {
    const { user, test } = this.state;
    console.log(test);
    return (
      <Layout type="user" user={user}>
        <div className={styles}>
          <main className={styles.main}>
            <div className="container-fluid bg-light p-5">
              <div className="container  rounded rounded-10">
                <Form>
                  <div className="row bg-white rounded-10 align-items-center">
                    <div className="col-12 p-5 ">
                      <div className="row border-bottom border-dark mb-5">
                        <div className="col">
                          <p>{test?.name}</p>
                        </div>
                        <div className="col text-center">
                          <p className="pb-0 mb-0">
                            <StopWatch max={30} callback={this.stopedWatch} />{" "}
                          </p>
                          <p>
                            <span className="small-text-12">
                              Remaining Time
                            </span>
                          </p>
                        </div>
                      </div>

                      {test?.questions?.map((q, i) => {
                        return (
                          <Form.Group key={i}>
                            <Form.Label>
                              {i + 1}. {q?.question}
                            </Form.Label>
                            {q?.options.map((o, index) => (
                              <Form.Check type="radio" label={o} key={index} />
                            ))}
                          </Form.Group>
                        );
                      })}
                    </div>
                    <div className="row text-center justify-content-center">
                      <div className="col">
                        <Link href={"/finalcongratulations"} legacyBehavior>
                          <button className="btn btn-success rounded-pill mt-5 col-5 col-sm-4 col-md-3 align-middle my-5">
                            Submit
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    );
  }
}
Test.getInitialProps = async (ctx) => {
  const token = await isLoggedin(ctx.req);
  if (!token) {
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: "/",
        "Content-Type": "text/html; charset=utf-8",
      });
      ctx.res.end();
    }
  }

  return { token };
};
export default withCookies(withRouter(Test));
