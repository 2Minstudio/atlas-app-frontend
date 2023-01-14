import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getUser, updateUser } from "../../helpers/admin";
import { Alert, Col, Row } from "react-bootstrap";
import AutoHideAlert from "../common/autoHideAlert";
class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      create: true,
      name: "",
      email: "",
      phone_number: "online",
      submited: false,
      showSuccess: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      await updateUser(this.state).then((resp) => {
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
    const { id, roles } = this.props;
    if (id) {
      this.setState({ create: false });
      const { data, state } = await getUser(id);
      if (state) {
        this.setState({ ...data });
      }
      console.log("Edit mode ", id, data);
    }
  }

  setStatusAction = async (value) => {
    const { closeTrigger } = this.props;

    if (value == "cancel") {
      //hide the popup form
      closeTrigger();
    } else {
      await this.handleSubmit();
      //submit the form
    }
  };

  render() {
    const {
      first_name,
      phone_number,
      groups,
      email,
      submited,
      create,
      errors,
      showSuccess,
    } = this.state;
    const { closeTrigger, roles } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        {showSuccess && (
          <AutoHideAlert
            message={`User ${create ? "created" : "updated"} successfully!`}
            onClose={closeTrigger}
          />
        )}
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
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
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            readOnly={true}
            type="text"
            name="email"
            autoFocus
            value={email}
            onChange={this.handleChange}
          />
          {errors?.email && <Alert variant={"danger"}>{errors.email}</Alert>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Phone Number</Form.Label>
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

        <Form.Group className="mb-3">
          <Form.Label>Role</Form.Label>
          <Form.Select
            value={groups}
            onChange={this.handleChange}
            name="groups"
          >
            <option>Select</option>
            {roles.map((role) => {
              return <option value={role.id}>{role.name}</option>;
            })}
          </Form.Select>
          {errors?.groups && <Alert variant={"danger"}>{errors.groups}</Alert>}
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
              <Button onClick={() => this.setStatusAction("publish")}>
                Save
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    );
  }
}

export default UserForm;
