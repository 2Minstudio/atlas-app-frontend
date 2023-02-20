import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import ReactPlayer from "react-player";
import Button from "react-bootstrap/Button";

function ChapterInfo({ test }) {
  const durarion = test?.duration.split(":")
  return (
    <Card className="mt-4">
      <Card.Header>
        <Card.Title>
          <h4>{test?.name}</h4>
          <Badge className="rounded-25" bg="secondary" variant="secondary">
            {durarion?.[0]} H {durarion?.[1]} M  {durarion?.[2]} S
          </Badge>
          <Badge className="rounded-25" bg="primary" variant="primary">
            Rs.{test?.price}
          </Badge>
        </Card.Title>
      </Card.Header>
    </Card>
  );
}

export default ChapterInfo;
