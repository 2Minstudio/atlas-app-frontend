import Link from "next/link";
import React from "react";
import { Form } from "react-bootstrap";
import Layout from "../../components/layout/index";
import styles from "../../styles/Home.module.css";
import Router, { withRouter } from "next/router";
import { withCookies } from "react-cookie";
import { isLoggedin, isClientLoggedin, getUser } from "../../helpers/helper";
import StopWatch from "../../components/stopwatch/StopWatch";
import { getUserTest, submitTest, checkUserIsAllowed } from "../../helpers/helper";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      test: {},
      answers: {},
      testId: 1,
    };
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  async componentDidMount() {
    
    const token = isClientLoggedin(this.props);
    const {testId} = this.state;
    
    if (token) {
      const {
        state,
        data: { user },
      } = await getUser(token);

      if (state) {
        const is_allowed = await checkUserIsAllowed(testId, user);
        const { data: test } = await getUserTest(testId);
        this.setState({ user, test });
      }
    } else {
      Router.push("/");
    }
  }

  handleCheckbox(event) {
    const { answers } = this.state;
    const { name, value, checked } = event.target;
    const newanswers = { ...answers, [name]: value };
    this.setState({ answers: newanswers });
  }

  submit = async () => {
    const { answers, test, user } = this.state;
    const is_submited = await submitTest({ user, test, answers });
    this.setState({ is_submited: true });
    console.log("Triggered ", answers,'"/finalcongratulations"');
  };

  render() {
    const { user, test } = this.state;
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
                            {test?.duration && (
                              <StopWatch
                                duration={test.duration}
                                callback={this.submit}
                              />
                            )}{" "}
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
                              <Form.Check
                                type="radio"
                                label={o}
                                key={index}
                                name={q?.id}
                                value={o}
                                onClick={this.handleCheckbox}
                              />
                            ))}
                          </Form.Group>
                        );
                      })}
                    </div>
                    <div className="row text-center justify-content-center">
                      <div className="col">
                        {/* <Link href={'#'} legacyBehavior> */}
                          <button onClick={this.submit} className="btn btn-success rounded-pill mt-5 col-5 col-sm-4 col-md-3 align-middle my-5">
                            Submit
                          </button>
                        {/* </Link> */}
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
