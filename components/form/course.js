import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createCourse, getCourse, updateCourse } from "../../helpers/admin";
import { Col, Row } from "react-bootstrap";

class CourseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      create: true,
      name: "",
      cost: "",
      description: "",
      notes: "",
      status: "0",
      submited: false,
      image: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleCheckbox(event) {
    const { name, value, checked } = event.target;
    this.setState({ [name]: value });
  }

  handleImageChange = (event) => {
    const { name, files } = event.target;
    this.setState({
      [name]: files[0],
    });
  };

  async handleSubmit() {
    // event
    const { closeTrigger } = this.props;
    this.setState({ submited: true });
    // event.preventDefault();
    // event.stopPropagation();
    const { id } = this.props;

    if (id) {
      await updateCourse(this.state).then((resp) => {
        const { status, data } = resp;
        if (status) closeTrigger();
        else {
          console.log(data, "update error");
          this.setState({ error: data });
        }
        this.setState({ submited: false });
      });
    } else {
      await createCourse(this.state).then((resp) => {
        const { status, data } = resp;
        if (status) closeTrigger();
        else {
          console.log(data, "create error");
          this.setState({ error: data });
        }
        this.setState({ submited: false });
      });
    }
  }

  async componentDidMount() {
    const { id } = this.props;
    if (id) {
      this.setState({ create: false });
      const { data, state } = await getCourse(id);
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
    const { name, description, image, notes, cost, status, submited, create } =
      this.state;
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
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            as="textarea"
            name="description"
            rows={3}
            value={description}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Course Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            // value={image}
            accept="image/png, image/jpeg"
            onChange={this.handleImageChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            required
            as="textarea"
            name="notes"
            rows={3}
            value={notes}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Cost</Form.Label>
          <Form.Control
            required
            type="number"
            name="cost"
            autoFocus
            value={cost}
            onChange={this.handleChange}
          />
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
          {/*
          <Form.Label>Status</Form.Label>
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

export default CourseForm;
