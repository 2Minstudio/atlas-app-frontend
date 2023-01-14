import Head from "next/head";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../common/footer";
import Header from "../common/header";
import { config } from "../../config/config";
import AdminBreadcrumb from "../breadcrumb/admin";
import Router, { withRouter } from "next/router";
function LayoutAdminDashboard(props) {
  console.log(props, "propsprops");
  const {
    children,
    user = {},
    paths = {},
    router: { asPath },
  } = props;

  return (
    <>
      <Head>
        <title>{config.siteTitle}</title>
        <meta name="description" content={config.siteDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="container-fluid bg-light">
          {user?.id && (
            <>
              <Header user={user} />

              <Container>
                <Row>
                  <Col className="d-flex align-items-start mt-5 g-0" md={3}>
                    <Nav
                      className="list-group flex-fill"
                      defaultActiveKey={asPath}
                    >
                      <Nav.Link
                        className="list-group-item"
                        href="/admin/admissions"
                      >
                        Admissions
                      </Nav.Link>
                      <Nav.Link
                        className="list-group-item"
                        href="/admin/courses"
                      >
                        Course
                      </Nav.Link>
                      <Nav.Link className="list-group-item" href="/admin/users">
                        Users
                      </Nav.Link>
                    </Nav>
                  </Col>
                  <Col className="g-0">
                    <div className="bg-white rounded-top-25 rounded-bottom-25 p-sm-3 p-md-4 p-lg-5">
                      {Object.keys(paths).length > 0 && (
                        <AdminBreadcrumb items={paths} />
                      )}
                      <main>{children}</main>
                    </div>
                  </Col>
                </Row>
              </Container>
              <Footer />
            </>
          )}
        </div>
      </body>
    </>
  );
}

export default withRouter(LayoutAdminDashboard);
