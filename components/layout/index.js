import Head from "next/head";
import Footer from "../common/footer";
import Header from "../common/header";
import { config } from "../../config/config";
import Headerdashboard from "../common/headerdashboard";
import Headerlanding from "../common/headerlanding";

export default function Layout({ children, user = {}, type = null }) {
  return (
    <>
      <Head>
        <title>{config.siteTitle}</title>
        <meta name="description" content={config.siteDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        {(!type || type === "user") && <Header user={user} />}
        {type === "dashboard" && <Headerdashboard user={user} />}
        {type === "landing" && <Headerlanding user={user} />}

        <main>{children}</main>
        <Footer />
      </body>
    </>
  );
}
