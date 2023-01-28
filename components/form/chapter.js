import React from "react";
import { createChapter, getChapter, updateChapter } from "../../helpers/admin";
import { Alert, Col, Row, Button, Form } from "react-bootstrap";
import ReactPlayer from "react-player";
import AutoHideAlert from "../common/autoHideAlert";
class ChapterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      create: true,
      content: "",
      meterial: "",
      name: "",
      status: "0",
      video: "",
      submited: false,
      created_by: "",
      updated_by: "",
      previousMeterial: "",
      previousVideo: "",
      showSuccess: false,
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

  async handleSubmit() {
    const { closeTrigger } = this.props;
    this.setState({ submited: true, errors: {} });
    // event.preventDefault();
    // event.stopPropagation();
    const { id } = this.props;

    if (id) {
      await updateChapter(this.state).then((resp) => {
        const { status, data } = resp;
        if (status) {
          this.setState({ showSuccess: true });
        } else {
          this.setState({ errors: data });
          console.log(data, "error");
        }
      });
    } else {
      await createChapter(this.state).then((resp) => {
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
    const { id, courseId, moduleId } = this.props;
    this.setState({ course: courseId, module: moduleId });
    if (id) {
      this.setState({ create: false });
      const { data, state } = await getChapter(id);
      if (state) {
        const { video: previouseVideo, meterial: previousMeterial } = data;
        this.setState({ ...data, previouseVideo, previousMeterial });
      }
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
      content,
      meterial,
      name,
      status,
      video,
      submited,
      create,
      errors,
      previouseVideo,
      previousMeterial,
      showSuccess,
    } = this.state;
    const { closeTrigger } = this.props;
    return (
      <div className="d-flex align-items-center justify-content-center bg-light">
      <Form className="col-11" onSubmit={this.handleSubmit}>
        {showSuccess && (
          <AutoHideAlert
            message={`Chapter ${create ? "created" : "updated"} successfully!`}
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
          <Form.Label className="fw-bold">Content</Form.Label>
          <Form.Control
            required
            as="textarea"
            name="content"
            rows={3}
            value={content}
            onChange={this.handleChange}
          />
          {errors?.content && (
            <Alert variant={"danger"}>{errors.content}</Alert>
          )}
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label className="fw-bold">Video</Form.Label>
          <Form.Control
            type="file"
            name="video"
            accept="video/mp4"
            onChange={this.handleFileChange}
          />
          <Row className="align-items-right">
            <Col xs="auto">
              {previouseVideo && (
                <ReactPlayer
                  className="react-player"
                  url={previouseVideo}
                  width="200px"
                  height="200px"
                  controls={true}
                />
              )}
            </Col>
          </Row>
          {errors?.video && <Alert variant={"danger"}>{errors.video}</Alert>}
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label className="fw-bold">Meterial</Form.Label>
          <Form.Control
            type="file"
            name="meterial"
            onChange={this.handleFileChange}
          />

          <Row className="align-items-right">
            <Col xs="auto">
              {previousMeterial && (
                <Button target="_blank" href={previousMeterial}>
                  Material
                </Button>
              )}
            </Col>
          </Row>

          {errors?.meterial && (
            <Alert variant={"danger"}>{errors.meterial}</Alert>
          )}
        </Form.Group>

        <Form.Group className="mb-3 mt-4">
          <Row className="d-flex align-items-center justify-content-center">
            <Col xs="auto">
              <Button className="btn rounded-pill" size="lg"
                variant="danger"
                onClick={() => this.setStatusAction("cancel")}
              >
                Cancel
              </Button>{" "}
            </Col>
            <Col xs="auto">
              <Button className="btn rounded-pill" size="lg"
                variant="success"
                onClick={() => this.setStatusAction("draft")}
              >
                Save as Draft
              </Button>{" "}
            </Col>
            <Col xs="auto">
              <Button className="btn rounded-pill" size="lg" onClick={() => this.setStatusAction("publish")}>
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
      </div>
    );
  }
}

export default ChapterForm;
