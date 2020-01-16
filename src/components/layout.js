import Header from './header';
import Footer from './footer';

export default ({ children }) => (
  <div className="site-wrapper">
    <Header />
    <div className="main-container">{children}</div>
    <Footer />

    <style jsx global>{`
      // *,
      // *::before,
      // *::after {
      //   box-sizing: border-box;
      // }
      html,
      body {
        font-family: Verdana, Geneva, sans-serif;
        font-style: normal;
        font-variant: normal;
        font-size: 16px;
        line-height: 1.5rem;
        font-weight: 400;
        color: #453F37;
        text-align: center;
        align-items: center;
        background: #fff url("https://www.transparenttextures.com/patterns/brushed-alum.png");
      }
      h1 {
        font-size: 56px;
        font-weight: 300;
        color: #453F37;
      }
      h2 {
        font-size: 48px;
        font-weight: 300;
      }
      h3 {
        font-size: 40px;
      }
      h4 {
        font-size: 32px;
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
      // Layout
      .main-container {
        min-height: 60vh;
        text-align: center;
        max-width: 80vw;
        margin: 2vh 10vw;
      }
      a {
        cursor: pointer;
      }
      .site-wrapper {
        max-height: 100vh;
      }
    `}</style>
  </div>
);
