import Head from "next/head";
import Headerlanding from "../common/headerlanding";
import { config } from "../../config/config";

export default function LayoutUser({ children, user = {} }) {
  console.log("Layout user", user);
  return (
    <>
      <Head>
        <title>{config.siteTitle}</title>
        <meta name="description" content={config.siteDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Headerlanding user={user} />
        <main>{children}</main>
      </body>
    </>
  );
}
