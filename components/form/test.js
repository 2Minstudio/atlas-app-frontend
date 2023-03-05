import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getTest, updateTest } from "../../helpers/admissions";
import { Alert, Col, Row } from "react-bootstrap";
import AutoHideAlert from "../common/autoHideAlert";
class TestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      create: true,
      name: "",
      duration: "",
      price: "",
      final_price: "",
      tax_percentage: "",
      elegible_percentage: "",
      status: "0",
      submited: false,
      previouseImage: "",
      showSuccess: false,
    };

    this.handleChange = this.handleChange.bind(this);
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

  async handleSubmit() {
    // event
    const { closeTrigger } = this.props;
    this.setState({ submited: true, errors: {} });
    // event.preventDefault();
    // event.stopPropagation();
    const { id } = this.props;

    if (id) {
      await updateTest(this.state).then((resp) => {
        const { status, data } = resp;
        if (status) {
          //show alert on success then trigger this close
          this.setState({ showSuccess: true });
        } else {
          console.log(data, "update error");
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
      const { data, state } = await getTest(id);
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
      duration,
      price,
      final_price,
      tax_percentage,
      elegible_percentage,
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fw-bold">Duration</Form.Label>
            <Form.Control
              required
              type="text"
              name="duration"
              autoFocus
              value={duration}
              onChange={this.handleChange}
            />
            {errors?.duration && (
              <Alert variant={"danger"}>{errors.duration}</Alert>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.price">
            <Form.Label className="fw-bold">Price</Form.Label>
            <Form.Control
              required
              type="number"
              name="price"
              autoFocus
              value={price}
              onChange={this.handleChange}
            />
            {errors?.price && <Alert variant={"danger"}>{errors.price}</Alert>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.final_price">
            <Form.Label className="fw-bold">Final Price</Form.Label>
            <Form.Control
              required
              type="number"
              name="final_price"
              autoFocus
              value={final_price}
              onChange={this.handleChange}
            />
            {errors?.final_price && (
              <Alert variant={"danger"}>{errors.final_price}</Alert>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.tax_percentage">
            <Form.Label className="fw-bold">Tax %</Form.Label>
            <Form.Control
              required
              type="number"
              name="tax_percentage"
              autoFocus
              value={tax_percentage}
              onChange={this.handleChange}
            />
            {errors?.tax_percentage && (
              <Alert variant={"danger"}>{errors.tax_percentage}</Alert>
            )}
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="exampleForm.elegible_percentage"
          >
            <Form.Label className="fw-bold">Pass Elegible %</Form.Label>
            <Form.Control
              required
              type="number"
              name="elegible_percentage"
              autoFocus
              value={elegible_percentage}
              onChange={this.handleChange}
            />
            {errors?.elegible_percentage && (
              <Alert variant={"danger"}>{errors.elegible_percentage}</Alert>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Row className="d-flex align-items-center justify-content-center">
              <Col xs="auto">
                <Button
                  className="btn rounded-pill"
                  variant="outline-success"
                  size="lg"
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

export default TestForm;
