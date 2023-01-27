import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
function ModuleList({ mode, data }) {
  return (
    <>
      <h5 className="pt-4">Lessons</h5>
      <div className="col col-md-6 col-lg-7">
        <Accordion defaultActiveKey="0">
          {data?.map((module) => (
            <Accordion.Item key={module.id} eventKey="0">
              <Accordion.Header>{module.name}</Accordion.Header>
              <Accordion.Body>
                {module?.chapters.map((chapter) => (
                  <p>{chapter.name}</p>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  );
}
export default ModuleList;
