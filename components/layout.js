import Header from './header';
import Footer from './footer';

export default ({ children }) => (
  <div className="site-wrapper">
    <Header />
    <div className="container">{children}</div>
    <Footer />

    <style jsx global>{`
      html,
      body {
        font-family: Verdana, Geneva, sans-serif;
        font-style: normal;
        font-variant: normal;
        font-size: 16;
        line-height: 1.1em;
        font-weight: 400;
      }
      h1 {
        font-size: 96;
        font-weight: 300;
      }
      h2 {
        font-size: 60;
        font-weight: 300;
      }
      h3 {
        font-size: 48;
      }
      h4 {
        font-size: 34;
      }
      h5 {
        font-size: 24;
      }
      h6 {
        font-size: 20;
        font-weight: 500;
      }
      button {
        font-size: 14;
        font-weight: 500;
        text-transform: uppercase;
      }
      caption {
        font-size: 12;
      }
    `}</style>
  </div>
);