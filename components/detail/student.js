import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function StudentInfo({ student }) {
  return (
    <Card className="mt-4">
      <Card.Header>
        <Card.Title>
          <h4>{student?.first_name}</h4>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StudentInfo;
