import Head from "next/head";
import Footer from "../common/footer";
import Header from "../common/header";
import { config } from "../../config/config";

export default function Layout({ children, user = {} }) {
  return (
    <>
      <Head>
        <title>{config.siteTitle}</title>
        <meta name="description" content={config.siteDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Header user={user} />
        <main>{children}</main>
        <Footer />
      </body>
    </>
  );
}
