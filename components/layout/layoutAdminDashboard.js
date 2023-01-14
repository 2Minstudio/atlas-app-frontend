import Head from "next/head";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../common/footer";
import Header from "../common/header";
import { config } from "../../config/config";
import AdminBreadcrumb from "../breadcrumb/admin";

export default function LayoutAdminDashboard({ children, user = {}, paths = {} }) {
  return (
    <>
      <Head>
        <title>{config.siteTitle}</title>
        <meta name="description" content={config.siteDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-light">
        <Header user={user} />
        <Container>
          <Row>
            <Col md={2} className="dashboard-menu-box d-flex align-items-center g-0">
              <Nav defaultActiveKey="/admin/admissions" className="flex-fill list-group">
                <Nav.Link className="list-group-item" href="/admin/admissions">Admissions</Nav.Link>
                <Nav.Link className="list-group-item" href="/admin/courses">Course</Nav.Link>
                <Nav.Link  className="list-group-item " href="/admin/users">Users</Nav.Link>
              </Nav>
            </Col>
            <Col className="col-lg-10 bg-white rounded-top-25 rounded-bottom-25 p-sm-3 p-md-4 p-lg-5">
              {Object.keys(paths).length > 0 && (
                <AdminBreadcrumb items={paths} />
              )}
              <main>{children}</main>
            </Col>
          </Row>
        </Container>

        <Footer />
      </body>
    </>
  );
}
