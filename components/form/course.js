import Form from "react-bootstrap/Form";
export default function CourseForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control required type="text" name="name" autoFocus />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control required as="textarea" name="description" rows={3} />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Course Image</Form.Label>
        <Form.Control type="file" name="image" />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type={"switch"}
          id="status"
          name="status"
          label="Publish"
          value="1"
        />
      </Form.Group>
    </Form>
  );
}
