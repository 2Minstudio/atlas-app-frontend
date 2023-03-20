import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function StudentInfo({ student }) {
  return (
    <Card className="mt-2 mb-5">
      <Card.Header>
        <Card.Title>
          {student?.first_name}
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{student?.email}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StudentInfo;
