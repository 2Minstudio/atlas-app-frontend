import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createModule, getModule, updateModule } from "../../helpers/admin";
import { Alert, Col, Row } from "react-bootstrap";

class ModuleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      create: true,
      name: "",
      course: "",
      attend_type: "online",
      status: "0",
      submited: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    console.log("Update state", name, value);
    this.setState({ [name]: value });
  }

  handleCheckbox(event) {
    const { name, value, checked } = event.target;
    // const setvalue = checked ? value : "";
    this.setState({ [name]: value });
  }

  async handleSubmit() {
    const { closeTrigger, id } = this.props;
    this.setState({ submited: true });
    // event.preventDefault();
    // event.stopPropagation();

    if (id) {
      await updateModule(this.state).then((resp) => {
        const { status, data } = resp;
        if (status) closeTrigger();
        else {
          this.setState({ errors: data });
          console.log(data, "error");
        }
        this.setState({ submited: false });
      });
    } else {
      await createModule(this.state).then((resp) => {
        const { status, data } = resp;
        if (status) closeTrigger();
        else {
          this.setState({ errors: data });
          console.log(data, "error");
        }
        this.setState({ submited: false });
      });
    }
  }

  async componentDidMount() {
    const { id, courseId } = this.props;
    this.setState({ course: courseId });
    if (id) {
      this.setState({ create: false });
      const { data, state } = await getModule(id);
      if (state) {
        this.setState({ ...data });
      }
      console.log("Edit mode ", id, data);
    }
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

  render() {
    const { name, attend_type, status, submited, create, errors } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            autoFocus
            value={name}
            onChange={this.handleChange}
          />
          {errors?.name && <Alert variant={"danger"}>{errors.name}</Alert>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Attend Type</Form.Label>
          <Form.Select
            value={attend_type}
            onChange={this.handleChange}
            name="attend_type"
          >
            <option>Select</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </Form.Select>
          {errors?.attend_type && (
            <Alert variant={"danger"}>{errors.attend_type}</Alert>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Row className="align-items-right">
            <Col xs="auto">
              <Button
                variant="light"
                onClick={() => this.setStatusAction("cancel")}
              >
                Cancel
              </Button>{" "}
            </Col>
            <Col xs="auto">
              <Button
                variant="success"
                onClick={() => this.setStatusAction("draft")}
              >
                Save as Draft
              </Button>{" "}
            </Col>
            <Col xs="auto">
              <Button onClick={() => this.setStatusAction("publish")}>
                Publish
              </Button>
            </Col>
          </Row>
          {/* <Form.Label>Status</Form.Label>

          <Form.Check
            checked={status == "1"}
            inline
            label="Published"
            name="status"
            type={"radio"}
            value={1}
            onChange={this.handleCheckbox}
          />
          <Form.Check
            checked={status == "0"}
            inline
            label="Draft"
            name="status"
            type={"radio"}
            value={0}
            onChange={this.handleCheckbox}
          /> */}
        </Form.Group>

        {/* <Button disabled={submited} variant="primary" type="submit">
          {create ? "Create" : "Update"}
        </Button> */}
      </Form>
    );
  }
}

export default ModuleForm;
