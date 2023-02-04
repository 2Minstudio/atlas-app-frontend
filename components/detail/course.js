import {Card, Badge, Image} from "react-bootstrap";
// View Course Details

function CourseInfo({ course, showImage = false }) {
  return (
    <Card className="mt-4">
      <Card.Header>
        <Card.Title>
          <h3>{course?.name}</h3>
          <Badge className="rounded-25" bg="success">₹ {course?.cost}</Badge>{" "}
          <Badge className="rounded-25" bg="secondary" variant="primary">
            {course?.status ? "Published" : "Draft"}
          </Badge>
        </Card.Title>
      </Card.Header>
      
      <Card.Body>
      {showImage && <Image alt="course cover" className="img-fluid pb-4" thumbnail={false} src={course?.image} />}
        <Card.Text>{course?.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default CourseInfo;
