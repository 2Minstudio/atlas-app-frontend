import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  createQuestion,
  getQuestion,
  updateQuestion,
} from "../../helpers/admissions";
import { Alert, Col, Row } from "react-bootstrap";
import AutoHideAlert from "../common/autoHideAlert";
import AnswerOptions from "./field/answeroptions";
class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      create: true,
      exam: "",
      question: "",
      options: [],
      correct_answers: [],
      question_type: 1,
      status: "0",
      //   created_by: "",
      //   updated_by: "",
      submited: false,
      showSuccess: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.readOptions = this.readOptions.bind(this);
    this.setError = this.setError.bind(this);
  }

  readOptions(data) {
    this.setState({ options: data });
  }

  setError(err) {
    const { errors } = this.state;
    // errors["options"] = err;
    this.setState({ errors: { ...{ options: err }, errors } });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleSubmit() {
    const { closeTrigger, id } = this.props;
    this.setState({ submited: true });
    // event.preventDefault();
    // event.stopPropagation();

    if (id) {
      await updateQuestion(this.state).then((resp) => {
        const { status, data } = resp;
        if (status) {
          this.setState({ showSuccess: true });
        } else {
          this.setState({ errors: data });
          console.log(data, "error");
        }
      });
    } else {
      await createQuestion(this.state).then((resp) => {
        const { status, data } = resp;
        if (status) {
          this.setState({ showSuccess: true });
        } else {
          this.setState({ errors: data });
          console.log(data, "error");
        }
      });
    }
    this.setState({ submited: false });
  }

  async componentDidMount() {
    const {
      id,
      exam,
      // user: { id: userid },
      // questionid,
    } = this.props;
    if (id) {
      this.setState({ create: false });
      const { data, state } = await getQuestion(id);
      if (state) {
        this.setState({ ...data });
      }
    }
    this.setState({ exam });
  }

  setStatusAction = (value) => {
    const { closeTrigger } = this.props;
    const status = value == "publish" ? 1 : 0;
    this.setState({ status }, async () => {
      if (value == "cancel") {
        //hide the popup form
        closeTrigger();
      } else {
        await this.handleSubmit();
        //submit the form
      }
    });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.testid !== this.state.testid) {
  //     this.loadData();
  //   }
  // }

  render() {
    const {
      question,
      options,
      correct_answers,
      question_type,
      submited,
      create,
      errors,
      showSuccess,
    } = this.state;
    const { closeTrigger } = this.props;
    return (
      <div className="d-flex align-items-center justify-content-center bg-light">
        <Form className="col-11" onSubmit={this.handleSubmit}>
          {showSuccess && (
            <AutoHideAlert
              message={`Question ${
                create ? "created" : "updated"
              } successfully!`}
              onClose={closeTrigger}
            />
          )}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fw-bold">Question</Form.Label>
            <Form.Control
              required
              type="text"
              name="question"
              autoFocus
              value={question}
              onChange={this.handleChange}
            />
            {errors?.question && (
              <Alert variant={"danger"}>{errors.question}</Alert>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Type</Form.Label>
            <Form.Select
              value={question_type.toString()}
              onChange={this.handleChange}
              name="question_type"
            >
              {/* <option value="0">Text</option> */}
              <option value="1">Single Select</option>
              <option value="2">Multi Select</option>
            </Form.Select>
            {errors?.question_type && (
              <Alert variant={"danger"}>{errors.question_type}</Alert>
            )}
          </Form.Group>
          <AnswerOptions
            callback={this.readOptions}
            options={options}
            type={question_type}
            seterror={this.setError}
          />
          {errors?.options && (
            <Alert variant={"danger"}>{errors.options}</Alert>
          )}
          <Form.Group className="mb-3 mt-4">
            <Row className="d-flex align-items-center justify-content-center">
              <Col xs="auto">
                <Button
                  className="btn rounded-pill"
                  size="lg"
                  variant="outline-success"
                  onClick={() => this.setStatusAction("cancel")}
                >
                  Cancel
                </Button>{" "}
              </Col>
              <Col xs="auto">
                <Button
                  className="btn rounded-pill"
                  size="lg"
                  variant="outline-success"
                  onClick={() => this.setStatusAction("draft")}
                >
                  Save as Draft
                </Button>{" "}
              </Col>
              <Col xs="auto">
                <Button
                  className="btn rounded-pill"
                  size="lg"
                  variant="success"
                  onClick={() => this.setStatusAction("publish")}
                >
                  Publish
                </Button>
              </Col>
            </Row>
          </Form.Group>

          {/* <Button disabled={submited} variant="primary" type="submit">
          {create ? "Create" : "Update"}
        </Button> */}
        </Form>
      </div>
    );
  }
}

export default QuestionForm;
