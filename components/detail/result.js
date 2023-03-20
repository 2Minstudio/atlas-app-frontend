import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

function ResultInfo({ results }) {
  return results?.map((r, i) => (
    <Card className="mt-2 mb-5" key={`res-${i}`}>
      <Card.Header>
        <Card.Title>
          <h4>{r?.exam}</h4>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <Badge className="me-2 fs-6" bg={r.result == "fail" && "danger"}>Result: {r?.result}</Badge>
          <Badge className="me-2 fs-6"  bg={r.result == "fail" && "danger"}>Score: {r?.score}</Badge>
          <Badge className="fs-6" bg={r.result == "fail" && "danger"}>{r?.percentage} %</Badge>
        </Card.Text>
        <Card.Text>
          <ListGroup as="ol" numbered>
            {r?.answers?.map((a, ix) => {
              return (
                <ListGroup.Item
                  key={`ans-${ix}`}
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{a.question}</div>
                    {a.answer?.[0].value}
                  </div>
                  <Badge bg={a.is_correct ? "success" : "danger"} pill >
                    <FontAwesomeIcon
                      className="AiconSocial"
                      icon={a.is_correct ? faCircleCheck : faCircleXmark}
                    ></FontAwesomeIcon>
                  </Badge>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  ));
}

export default ResultInfo;
