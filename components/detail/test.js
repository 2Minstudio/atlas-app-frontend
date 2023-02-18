import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import ReactPlayer from "react-player";
import Button from "react-bootstrap/Button";

function ChapterInfo({ test }) {
  return (
    <Card className="mt-4">
      <Card.Header>
        <Card.Title>
          <h4>{test?.name}</h4>
          <Badge className="rounded-25" bg="secondary" variant="secondary">
            {test?.duration}
          </Badge>
          <Badge className="rounded-25" bg="secondary" variant="secondary">
            {test?.price}
          </Badge>
        </Card.Title>
      </Card.Header>
    </Card>
  );
}

export default ChapterInfo;
