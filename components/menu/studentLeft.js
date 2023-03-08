import Nav from "react-bootstrap/Nav";
import Router, { withRouter } from "next/router";
function Menu(props) {
  const {
    router: { asPath },
  } = props;
  return (
    <div className="dashboard-menu-box d-flex align-items-cente d-none d-md-block">
      <Nav className="list-group flex-fill" defaultActiveKey={asPath}>
        {/* <Nav.Link className="list-group-item" href="/dashboard">
          Home
        </Nav.Link> */}
        <Nav.Link className="list-group-item" href="/dashboard/progress">
          Progress
        </Nav.Link>
        <Nav.Link className="list-group-item" href="/dashboard/community">
          Community
        </Nav.Link>
        <Nav.Link className="list-group-item" href="/dashboard/settings">
          Settings
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default withRouter(Menu);
