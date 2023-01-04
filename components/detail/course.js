import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function CourseInfo({ course, showImage = false }) {
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          <h1>{course?.name}</h1>
          <Badge bg="info">₹ {course?.cost}</Badge>{" "}
          <Badge variant="primary">
            {course?.status ? "Publishd" : "Draft"}
          </Badge>
        </Card.Title>
      </Card.Header>
      {showImage && <Card.Img variant="top" src={course?.image} />}
      <Card.Body>
        <Card.Text>{course?.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CourseInfo;
