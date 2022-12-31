import Head from "next/head";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../common/footer";
import Header from "../common/header";
import { config } from "../../config/config";

export default function LayoutDashboard({ children, user = {} }) {
  console.log(user,"layout user")
  return (
    <>
      <Head>
        <title>{config.siteTitle}</title>
        <meta name="description" content={config.siteDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Header user={user} />
        <Container>
          <Row>
            <Col md={3}>
              <Nav defaultActiveKey="/admin/admissions" className="flex-column">
                <Nav.Link href="/admin/admissions">Adminisions</Nav.Link>
                <Nav.Link href="/admin/courses">Course</Nav.Link>
                <Nav.Link href="/admin/users">Users</Nav.Link>
              </Nav>
            </Col>
            <Col>
              <main>{children}</main>
            </Col>
          </Row>
        </Container>

        <Footer />
      </body>
    </>
  );
}
