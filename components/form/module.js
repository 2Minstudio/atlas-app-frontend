import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createCourse, getCourse } from "../../helpers/admin";

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
    console.log(event.target.name, "event.target");
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    const { closeTrigger, courseId } = this.props;
    this.setState({ submited: true });
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
            type="text"
            name="cost"
            autoFocus
            value={cost}
            onChange={this.handleChange}
          />
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
