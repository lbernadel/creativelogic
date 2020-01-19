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
      <link
        href="https://fonts.googleapis.com/css?family=Architects+Daughter|Sedgwick+Ave&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Navigation />

    <div className="main-container">{children}</div>

    <Footer />

    <style jsx global>{`
      // General layout
      html,
      body {
        font-family: Verdana, Geneva, sans-serif;
        color: #453f37;
        text-align: center;
        align-items: center;
        background: #e6e6e6 url("/static/brushed-alum.png");
      }
      body {
        margin: 0;
      }
      h1 {
        font-family: "Sedgwick Ave", cursive;
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
      .main-container {
        min-height: 100vh;
        max-width: 90vw;
        margin: 0 5vw;
        padding: 3vh 0 15vh 0;
      }
      .site-wrapper {
        min-height: 100vh;
        position: relative;
        width: 100vw;
        margin: 0;
        padding: 0;
      }
      // Navbar
      .nav-link {
        font-family: "Architects Daughter", cursive;
        font-size: 1.5rem;
      }
      .nav-link:hover {
        color: #b1ddf1 !important;
        border-bottom: 2px solid #e6e6e6;
      }
      .nav-menu.navbar-collapse.collapse.show {
        background-color: rgba(136, 82, 127, 1);
        width: 100vw;
        padding: 0;
        margin: 0;
        position: relative;
        z-index: 5;
        border: 1px solid;
        border-radius: 5px;
      }
      .nav-menu.navbar-collapse.collapse.show>a.nav-link {
        width: 33.33vw;
        text-align: center !important;
        color: #e6e6e6 !important;
        margin: auto;
      }
      .nav-menu.navbar-collapse.collapse.show>a.nav-link:hover {
        color: #453F37 !important;
        font-weight: bold;
      }
      // Creations page
      .card-img.project-img {
        max-width: 200px !important;
        max-height: 200px !important;
      }
      .project-link {
        background-color: #88527f;
        color: #b1ddf1;
        border: #fff solid 1px;
        text-transform: uppercase;
        padding: 0.5rem 0.75rem;
      }
      .project-link:hover {
        background-color: #b1ddf1;
        color: #88527f;
        border: none;
      }
      .creation-tech {
        color: #fff !important;
      }
      // Contact page
      form {
        margin: 0 15vw !important;
      }
    `}</style>
  </div>
);
