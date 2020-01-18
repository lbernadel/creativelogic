import Head from "next/head";

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
      <link href="https://fonts.googleapis.com/css?family=Architects+Daughter|Sedgwick+Ave&display=swap" rel="stylesheet" />
    </Head>

    <Navigation />

    <div className="main-container">{children}</div>

    <Footer />

    <style jsx global>{`
      html,
      body {
        font-family: Verdana, Geneva, sans-serif;
        color: #453f37;
        text-align: center;
        align-items: center;
        background: #d9d9d9 url("/static/brushed-alum.png");
      }
      body {
        margin: 0;
      }
      h1 {
        font-family: 'Sedgwick Ave', cursive;
      }
      h2 {
        font-weight: 300;
      }
      h6 {
        font-weight: 500;
      }
      button {
        text-transform: capitalize;
      }
      .nav-link {
        font-family: 'Architects Daughter', cursive;
      }
      // Layout
      .main-container {
        min-height: 100vh;
        max-width: 90vw;
        margin: 0 5vw;
        padding: 3vh 0 15vh 0;
      }
      a {
        cursor: pointer;
      }
      .site-wrapper {
        min-height: 100vh;
        position: relative;
        width: 100vw;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
);
