import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function ({ children }) {
  return (
    <html>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
