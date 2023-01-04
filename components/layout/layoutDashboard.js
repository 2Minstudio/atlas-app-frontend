import Head from "next/head";
import Headerdashboard from "../common/headerdashboard";
import { config } from "../../config/config";

export default function LayoutDashboard({ children, user = {} }) {
  return (
    <>
      <Head>
        <title>{config.siteTitle}</title>
        <meta name="description" content={config.siteDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Headerdashboard user={user} />
        <main>{children}</main>
      </body>
    </>
  );
}
