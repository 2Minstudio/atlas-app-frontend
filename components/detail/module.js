import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function ModuleInfo({ module }) {
  return (
    <Card className="mt-4">
      <Card.Header>
        <Card.Title>
          <h4>{module?.name}</h4>
          <Badge className="rounded-25" bg="success" variant="success">
            {module?.status ? "Published" : "Draft"}
          </Badge>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{module?.attend_type}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ModuleInfo;
