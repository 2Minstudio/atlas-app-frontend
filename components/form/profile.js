import React from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import { updateUser } from "../../helpers/helper";
import AutoHideAlert from "../common/autoHideAlert";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      first_name: "",
      email: "",
      password: "",
      confirm_password: "",
      change_password: 0,
      change_email: 0,
      submited: false,
      showSuccess: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }
  handleSubmit = async () => {
    const {
      id,
      first_name,
      last_name,
      email,
      phone_number,
      password,
      confirm_password,
      change_password,
      change_email,
    } = this.state;
    this.setState({ submited: true, errors: {} });
    const submited = await updateUser({
      id,
      first_name,
      last_name,
      email,
      phone_number,
      password,
      confirm_password,
      change_password,
      change_email,
    }).then((resp) => {
      const { state, data } = resp;
      if (!state) {
        this.setState({ errors: data, submited: false });
        console.log(data, "error");
      } else {
        this.setState({ errors: {}, showSuccess: true });
      }
    });
  };

  handleCheckbox(event) {
    const { name, value, checked } = event.target;
    console.log(name, value, checked);
    this.setState({ [name]: checked ? 1 : 0 });
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  async componentDidMount() {
    const { user } = this.props;
    this.setState({ ...user });
  }

  render() {
    const {
      first_name,
      last_name,
      email,
      password,
      phone_number,
      confirm_password,
      change_email,
      submited,
      change_password,
      errors,
      showSuccess,
    } = this.state;
    return (
      <div className="d-flex align-items-center justify-content-center bg-light">
        
        <Form className="col-11" onSubmit={this.handleSubmit}>
        {showSuccess && (
          <AutoHideAlert
            message={`Profile settings updated successfully!`}
          />
        )}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fw-bold">First Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="first_name"
              autoFocus
              value={first_name}
              onChange={this.handleChange}
            />
            {errors?.first_name && (
              <Alert variant={"danger"}>{errors.first_name}</Alert>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fw-bold">Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="last_name"
              autoFocus
              value={last_name}
              onChange={this.handleChange}
            />
            {errors?.last_name && (
              <Alert variant={"danger"}>{errors.last_name}</Alert>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control
              required
              readOnly={!change_email}
              type="email"
              name="email"
              autoFocus
              value={email}
              onChange={this.handleChange}
            />
            {errors?.email && <Alert variant={"danger"}>{errors.email}</Alert>}
            <Form.Check
              type="checkbox"
              name="change_email"
              value={"1"}
              label="Change Email"
              checked={change_email == 1 ? true : false}
              onChange={this.handleCheckbox}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fw-bold">Phone Number</Form.Label>
            <Form.Control
              required
              type="text"
              name="phone_number"
              autoFocus
              value={phone_number}
              onChange={this.handleChange}
            />
            {errors?.phone_number && (
              <Alert variant={"danger"}>{errors.phone_number}</Alert>
            )}
          </Form.Group>
          <Form.Check
            type="checkbox"
            name="change_password"
            value={"1"}
            label="Change Password"
            checked={change_password == 1 ? true : false}
            onChange={this.handleCheckbox}
          />
          {change_password === 1 && (
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                autoFocus
                value={password}
                onChange={this.handleChange}
              />
              {errors?.password && (
                <Alert variant={"danger"}>{errors.password}</Alert>
              )}

              <Form.Label className="fw-bold">Confirm Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="confirm_password"
                autoFocus
                value={confirm_password}
                onChange={this.handleChange}
              />
              {errors?.confirm_password && (
                <Alert variant={"danger"}>{errors.confirm_password}</Alert>
              )}
            </Form.Group>
          )}
          <Form.Group className="mb-3 mt-4">
            <Row className="d-flex align-items-center justify-content-center">
              <Col xs="auto">
                <Button
                  className="btn rounded-pill mt-2 mt-sm-0"
                  size="lg"
                  variant="success"
                  onClick={() => this.handleSubmit()}
                >
                  Save
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
export default Profile;
