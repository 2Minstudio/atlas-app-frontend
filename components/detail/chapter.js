import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import ReactPlayer from "react-player";
import Button from "react-bootstrap/Button";

function ChapterInfo({ chapter }) {
  return (
    <Card className="mt-4">
      <Card.Header>
        <Card.Title>
          <h3>{chapter?.name}</h3>
          <Badge className="rounded-25" bg="secondary" variant="secondary">
            {chapter?.status ? "Published" : "Draft"}
          </Badge>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{chapter?.content}</Card.Text>
        {chapter?.video && (
          <>
            <ReactPlayer
              className="react-player"
              url={chapter.video}
              width="100%"
              height="100%"
              controls={true}
            />
          </>
        )}
      </Card.Body>
      <Card.Footer>
        <div>
          {chapter?.meterial && (
            <a href={chapter?.meterial} target="_blank" rel="noreferrer">
              <Button className="btn btn-success rounded-pill p-3 me-3" variant="success">Download Material</Button>
            </a>
          )}
        </div>
      </Card.Footer>
    </Card>
  );
}

export default ChapterInfo;
