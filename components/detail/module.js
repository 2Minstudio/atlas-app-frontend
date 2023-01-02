import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ModuleInfo({ module }) {
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          <h1>{module?.name}</h1>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{module?.attend_type}</Card.Text>
        <Button variant="primary">
          {module?.status ? "Publishd" : "Draft"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ModuleInfo;
