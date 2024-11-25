import Head from "next/head";
import React from "react";
import Header3 from "../components/header/Header3";
import Footer2 from "../components/footer/Footer2";

function Layout({ children }) {
  return (
    <>
        <Head>
        <title>JOBES</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="assets/images/sm-logo.svg"
          type="image/gif"
          sizes="20x20"
        />
      </Head>
      <Header3 />
      {children}
      <Footer2 />
    </>
  );
}

export default Layout;
