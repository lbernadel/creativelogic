import Head from "next/head";

import "../style.css";
import Navigation from "./nav";
import Footer from "./footer";

export default ({ children }) => (
  <div className="site-wrapper">
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        href="/static/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/static/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Architects+Daughter|Sedgwick+Ave&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Navigation />

    <div className="main-container">{children}</div>

    <Footer />
  </div>
);
