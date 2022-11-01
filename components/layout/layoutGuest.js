import Head from "next/head";
import { config } from "../../config/config";

export default function LayoutGuest({ children }) {
  return (
    <html>
      <Head>
        <title>{config.siteTitle}</title>
        <meta name="description" content={config.siteDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
