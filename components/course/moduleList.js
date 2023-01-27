import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
function ModuleList({ mode, data }) {
  return (
    <>
      <h5 className="pt-4">Lessons</h5>
      <div className="col col-md-6 col-lg-7">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Back Pain</Accordion.Header>
            <Accordion.Body>
              <p>Lesson 1 . 11 min</p>
              <p>Lesson 2 . 24 min</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Skeleton System</Accordion.Header>
            <Accordion.Body>
              <p>Lesson 1 . 11 min</p>
              <p>Lesson 2 . 24 min</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Best Practices</Accordion.Header>
            <Accordion.Body>
              <p>Lesson 1 . 11 min</p>
              <p>Lesson 2 . 24 min</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
export default ModuleList;
