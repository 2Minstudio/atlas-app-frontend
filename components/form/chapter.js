import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createChapter, getChapter, updateChapter } from "../../helpers/admin";

class ChapterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      create: true,
      content: "",
      meterial: "",
      name: "",
      status: "0",
      video: "",
      submited: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
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

  handleFileChange = (event) => {
    const { name, files } = event.target;
    this.setState({
      [name]: files[0],
    });
  };

  async handleSubmit(event) {
    const { closeTrigger } = this.props;
    this.setState({ submited: true });
    event.preventDefault();
    event.stopPropagation();
    const { id } = this.props;

    if (id) {
      await updateChapter(this.state).then((resp) => {
        const { status, data } = resp;
        if (status) closeTrigger();
        else console.log(data, "error");
        this.setState({ submited: false });
      });
    } else {
      await createChapter(this.state).then((resp) => {
        const { status, data } = resp;
        if (status) closeTrigger();
        else console.log(data, "error");
        this.setState({ submited: false });
      });
    }
  }

  async componentDidMount() {
    const { id, courseId, moduleId } = this.props;
    this.setState({ course: courseId, module: moduleId });
    if (id) {
      this.setState({ create: false });
      const { data, state } = await getChapter(id);
      if (state) {
        this.setState({ ...data });
      }
      console.log("Edit mode ", id, data);
    }
  }

  render() {
    const { content, meterial, name, status, video, submited, create } =
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
          <Form.Label>Content</Form.Label>
          <Form.Control
            required
            as="textarea"
            name="content"
            rows={3}
            value={content}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Video</Form.Label>
          <Form.Control
            type="file"
            name="video"
            accept="video/mp4"
            onChange={this.handleFileChange}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Meterial</Form.Label>
          <Form.Control
            type="file"
            name="meterial"
            // accept="image/png, image/jpeg"
            onChange={this.handleFileChange}
          />
        </Form.Group>
        <Form.Group>
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
          />
        </Form.Group>

        <Button disabled={submited} variant="primary" type="submit">
          {create ? "Create" : "Update"}
        </Button>
      </Form>
    );
  }
}

export default ChapterForm;
