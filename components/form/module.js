import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createModule, getModule, updateModule } from "../../helpers/admin";

class ModuleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      create: true,
      name: "",
      course: "",
      attend_type: "online",
      status: "0",
      submited: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    const { closeTrigger, courseId } = this.props;
    this.setState({ submited: true, courseId });
    event.preventDefault();
    event.stopPropagation();
    const { id } = this.props;

    if (id) {
      await updateModule(this.state).then((resp) => {
        const { status, data } = resp;
        if (status) closeTrigger();
        else console.log(data, "error");
        this.setState({ submited: false });
      });
    } else {
      await createModule(this.state).then((resp) => {
        const { status, data } = resp;
        if (status) closeTrigger();
        else console.log(data, "error");
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

  render() {
    const { name, attend_type, status, submited, create } = this.state;
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

        <Form.Group>
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
        </Form.Group>

        <Form.Group>
          <Form.Label>Status</Form.Label>
          <Form.Select
            value={status ? "1" : "0"}
            onChange={this.handleChange}
            name="status"
          >
            <option>Select</option>
            <option value="1">Publish</option>
            <option value="0">Draft</option>
          </Form.Select>
        </Form.Group>

        <Button disabled={submited} variant="primary" type="submit">
          {create ? "Create" : "Update"}
        </Button>
      </Form>
    );
  }
}

export default ModuleForm;
