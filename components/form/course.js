import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createCourse, getCourse, updateCourse } from "../../helpers/admin";
import { Alert, Col, Row, Image } from "react-bootstrap";
import AutoHideAlert from "../common/autoHideAlert";
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
      created_by: "",
      updated_by: "",
      previouseImage: "",
      showSuccess: false,
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
    this.setState({ submited: true, errors: {} });
    // event.preventDefault();
    // event.stopPropagation();
    const { id } = this.props;

    if (id) {
      await updateCourse(this.state).then((resp) => {
        const { status, data } = resp;
        if (status) {
          //show alert on success then trigger this close
          this.setState({ showSuccess: true });
        } else {
          console.log(data, "update error");
          this.setState({ errors: data });
        }
      });
    } else {
      await createCourse(this.state).then((resp) => {
        const { status, data } = resp;
        if (status) {
          this.setState({ showSuccess: true });
        } else {
          console.log(data, "create error");
          this.setState({ errors: data });
        }
      });
    }
    this.setState({ submited: false });
  }

  async componentDidMount() {
    const {
      id,
      user: { id: userid },
    } = this.props;
    if (id) {
      this.setState({ create: false, updated_by: userid });
      const { data, state } = await getCourse(id);
      if (state) {
        const { image: previouseImage } = data;
        this.setState({ ...data, previouseImage });
      }
    } else {
      this.setState({ created_by: userid, updated_by: userid });
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
    const {
      name,
      description,
      image,
      notes,
      cost,
      status,
      submited,
      create,
      errors,
      previouseImage,
      showSuccess,
    } = this.state;
    const { closeTrigger } = this.props;
    return (
      <div className="d-flex align-items-center justify-content-center bg-light">
        <Form className="col-11" onSubmit={this.handleSubmit}>
          {showSuccess && (
            <AutoHideAlert
              message={`Course ${create ? "created" : "updated"} successfully!`}
              onClose={closeTrigger}
            />
          )}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fw-bold">Name</Form.Label>
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="fw-bold">Description</Form.Label>
            <Form.Control
              required
              as="textarea"
              name="description"
              rows={3}
              value={description}
              onChange={this.handleChange}
            />
            {errors?.description && (
              <Alert variant={"danger"}>{errors.description}</Alert>
            )}
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label className="fw-bold">Course Image</Form.Label>
            <Form.Control
              type="file"
              name="image"
              // value={image}
              accept="image/png, image/jpeg"
              onChange={this.handleImageChange}
            />
            {previouseImage && (
              <>
                <Image
                  alt="course cover"
                  thumbnail={true}
                  src={previouseImage}
                ></Image>
              </>
            )}
            {errors?.image && <Alert variant={"danger"}>{errors.image}</Alert>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="fw-bold">Notes</Form.Label>
            <Form.Control
              required
              as="textarea"
              name="notes"
              rows={3}
              value={notes}
              onChange={this.handleChange}
            />
            {errors?.notes && <Alert variant={"danger"}>{errors.notes}</Alert>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fw-bold">Cost</Form.Label>
            <Form.Control
              required
              type="number"
              name="cost"
              autoFocus
              value={cost}
              onChange={this.handleChange}
            />
            {errors?.cost && <Alert variant={"danger"}>{errors.cost}</Alert>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Row className="d-flex align-items-center justify-content-center">
              <Col xs="auto">
                <Button
                  className="btn rounded-pill mt-2 mt-sm-0"
                  variant="outline-success"
                  size="lg"
                  onClick={() => this.setStatusAction("cancel")}
                >
                  Cancel
                </Button>{" "}
              </Col>
              <Col xs="auto">
                <Button
                  className="btn rounded-pill mt-2 mt-sm-0"
                  size="lg"
                  variant="outline-success"
                  disabled={submited}
                  onClick={() => this.setStatusAction("draft")}
                >
                  Save as Draft
                </Button>{" "}
              </Col>
              <Col xs="auto">
                <Button
                  className="btn rounded-pill mt-2 mt-sm-0"
                  size="lg"
                  variant="success"
                  disabled={submited}
                  onClick={() => this.setStatusAction("publish")}
                >
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
      </div>
    );
  }
}

export default CourseForm;
