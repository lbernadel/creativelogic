import Header from './header';
import Footer from './footer';

export default ({ children }) => (
  <div className="site-wrapper">
    <Header />
    <div className="container">{children}</div>
    <Footer />

    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      html,
      body {
        font-family: Verdana, Geneva, sans-serif;
        font-style: normal;
        font-variant: normal;
        font-size: 16px;
        line-height: 1.1;
        font-weight: 400;
        color: #332C23;
        background: #fff url("https://www.transparenttextures.com/patterns/groovepaper.png");
      }
      h1 {
        font-size: 96px;
        font-weight: 300;
      }
      h2 {
        font-size: 60px;
        font-weight: 300;
      }
      h3 {
        font-size: 48px;
      }
      h4 {
        font-size: 34px;
      }
      h5 {
        font-size: 24px;
      }
      h6 {
        font-size: 20px;
        font-weight: 500;
      }
      button {
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
      }
      caption {
        font-size: 12px;
      }
      img {
        max-width: 100%;
      }
      // Layout
      .container {
        min-height: 80vh;
        text-align: center;
      }
    `}</style>
  </div>
);
