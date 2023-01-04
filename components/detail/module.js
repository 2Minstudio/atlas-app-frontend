import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function ModuleInfo({ module }) {
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          <h1>{module?.name}</h1>
          <Badge variant="primary">
            {module?.status ? "Publishd" : "Draft"}
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
