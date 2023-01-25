import {Card, Badge, Image} from "react-bootstrap";
// View Course Details

function CourseInfo({ course, showImage = false }) {
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          <h3>{course?.name}</h3>
          <Badge bg="info">₹ {course?.cost}</Badge>{" "}
          <Badge variant="primary">
            {course?.status ? "Published" : "Draft"}
          </Badge>
        </Card.Title>
      </Card.Header>
      
      <Card.Body>
      {showImage && <Image alt="course cover" thumbnail={true} src={course?.image} />}
        <Card.Text>{course?.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CourseInfo;
