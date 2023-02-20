import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LayoutAdminDashboard from "../../../../components/layout/adminDashboard";
import { isClientLoggedin, getUser } from "../../../../helpers/helper";
import {
  deleteQuestion,
  getTest,
  getTestQuestions,
} from "../../../../helpers/admissions";
import { withCookies } from "react-cookie";
import Router, { withRouter } from "next/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import QuestionForm from "../../../../components/form/question";
import TestInfo from "../../../../components/detail/test";
import ConfirmBox from "../../../../components/modal/confirm";
import DataList from "../../../../components/datalist";

class TestQuestions extends React.Component {
  state = {
    user: {},
    deleteId: null,
    modelshow: false,
    editId: null,
    testid: null,
  };

  loadData = async () => {
    const { testid } = this.state;
    if (testid) {
      await getTest(testid).then(async (resp) => {
        const { data: test } = resp;
        await getTestQuestions(testid).then((resp) => {
          const { data } = resp;
          this.setState({ data, test });
        });
      });
    }
  };

  async componentDidMount() {
    const token = isClientLoggedin(this.props);

    const {
      router: {
        query: { testid },
      },
    } = this.props;

    if (token) {
      const {
        state,
        data: { user },
      } = await getUser(token);
      if (state) {
        this.setState({ user, testid }, async () => {
          if (testid) await this.loadData();
        });
      }
    } else {
      Router.push("/");
    }
  }

  handleShow = () => {
    this.setState({ modelshow: true });
  };

  handleClose = () => {
    this.setState({ modelshow: false, editId: null }, () => {
      this.loadData();
    });
  };

  edit = (id) => {
    this.setState({ editId: id, modelshow: true });
  };

  deleteConfirm = (id) => {
    this.setState({ deleteId: id });
  };

  delete = async () => {
    const { deleteId } = this.state;
    await deleteQuestion(deleteId).then(async (resp) => {
      const { state, data } = resp;
      if (state) {
        this.setState({ deleteId: null });
        await this.loadData();
      }
    });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.router !== prevState.router) {
      const {
        router: {
          query: { testid: proptestid },
        },
      } = nextProps;
      return { testid: proptestid };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.testid !== this.state.testid) {
      this.loadData();
    }
  }

  closeConfirm = () => {
    this.setState({ deleteId: null });
  };

  render() {
    const { user, data, modelshow, editId, deleteId, test, questionid } =
      this.state;
    const paths = { "admin/admissions/tests/": "Tests", "#": test?.name };
    return (
      <LayoutAdminDashboard user={user} paths={paths}>
        <ConfirmBox
          isShow={deleteId}
          text={"Are you sure want to delete this Question?"}
          okayText={"Delete"}
          okayAction={this.delete}
          cancelAction={this.closeConfirm}
        />

        <Row>
          <Col>
            <TestInfo test={test} />
          </Col>
        </Row>
        <Row className="d-flex align-items-center pt-4 pb-5">
          <Col>
            <h2>Questions</h2>
          </Col>
          <Col className="text-end">
            <Button
              className="btn btn-success rounded-pill p-3 me-3"
              variant="success"
              onClick={this.handleShow}
            >
              Add New Question
            </Button>
          </Col>
        </Row>
        <Modal size="lg" show={modelshow} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>{editId ? "Edit" : "New"} Question</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <QuestionForm
              user={user}
              id={editId}
              exam={test?.id}
              closeTrigger={this.handleClose}
            />
          </Modal.Body>
        </Modal>
        <DataList
          data={data}
          headings={[
            { id: "#" },
            { question: "Question" },
            { question_type: "Type" },
            { status: "Status" },
          ]}
          pagecallback={this.loadData}
          sourcemapper={{
            status: { true: "Published", false: "Draft" },
            question_type: { 0: "Text", 1: "Single Select", 2: "Multi Select" },
          }}
          buttons={[
            {
              type: "button",
              label: "Edit",
              onclick: this.edit,
              variant: "outline-success",
              key: "id",
            },
            {
              type: "button",
              label: "Delete",
              onclick: this.deleteConfirm,
              variant: "outline-success",
              key: "id",
            },
          ]}
        />
      </LayoutAdminDashboard>
    );
  }
}

export default withCookies(withRouter(TestQuestions));
