import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import ReactPlayer from "react-player";
import Button from "react-bootstrap/Button";

function ChapterInfo({ chapter }) {
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          <h1>{chapter?.name}</h1>
          <Badge variant="primary">
            {chapter?.status ? "Publishd" : "Draft"}
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
              <Button>Download Material</Button>
            </a>
          )}
        </div>
      </Card.Footer>
    </Card>
  );
}

export default ChapterInfo;
