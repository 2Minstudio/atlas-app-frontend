import Nav from "react-bootstrap/Nav";
import Router, { withRouter } from "next/router";
function Menu(props) {
  const {
    router: { asPath },
  } = props;
  return (
    <div className="ps-3 rounded-topl-25 dashboard-menu-box d-flex align-items-center align-items-md-start justify-content-center">
      <Nav className="list-group flex-fill" defaultActiveKey={asPath}>
        {/* <Nav.Link className="list-group-item" href="/dashboard">
          Home
        </Nav.Link> */}
        <Nav.Link className="list-group-item" href="/dashboard/progress">
          Progress
        </Nav.Link>
        
        <Nav.Link className="list-group-item" href="/dashboard/settings">
          Settings
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default withRouter(Menu);
