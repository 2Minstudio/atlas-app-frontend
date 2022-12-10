import Head from "next/head";
import { config } from "../../config/config";

export default function LayoutB({ children }) {
  return (
    <>
      <Head>
        <title>{config.siteTitle}</title>
        <meta name="description" content={config.siteDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-grey">
        <main>{children}</main>
      </body>
    </>
  );
}
