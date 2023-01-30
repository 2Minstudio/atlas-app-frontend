import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
function ModuleList({ mode, data }) {
  let i = 0;
  return (
    <>
      <h5 className="pt-4">Lessons</h5>
      <div className="col col-md-6 col-lg-7">
        <Accordion defaultActiveKey="module-1">
          {data?.map((module) => {
            i++;
            return (
              <Accordion.Item key={`module-${i}`} eventKey={`module-${i}`}>
                <Accordion.Header>{module.name}</Accordion.Header>
                <Accordion.Body>
                  {module?.chapters.map((chapter) => {
                    return i === 1 ? <Link href={`/dashboard/${chapter.course_id}/study/${chapter.id}`}><p key={`chapter-${chapter.id}`}>{chapter.name}</p></Link> : <p key={`chapter-${chapter.id}`}>{chapter.name}</p>
                  }
                    
                  )}
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </>
  );
}
export default ModuleList;
