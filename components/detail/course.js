import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CourseInfo({ course, showImage = false }) {
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          <h1>{course?.name}</h1>
        </Card.Title>
      </Card.Header>
      {showImage && <Card.Img variant="top" src={course?.image} />}
      <Card.Body>
        <Card.Subtitle>₹ {course?.cost}</Card.Subtitle>
        <Card.Text>{course?.description}</Card.Text>
        <Button variant="primary">
          {course?.status ? "Publishd" : "Draft"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CourseInfo;
