const Footer = () => (
  <footer id="footer-wrapper">
    <p className="copyright">
      © {new Date().getFullYear()} Creative Logic. All rights reserved.
    </p>
    <style jsx>{`
      #footer-wrapper {
        text-align: center;
        background-color: #b1ddf1;
        height: 18vh;
        position: absolute;
        bottom: 0;
        width: 100vw;
      }
      .copyright {
        margin: 7vh auto;
        width: 80vw;
        color: #614344;
        font-size: 0.8rem;
      }
    `}</style>
  </footer>
);

export default Footer;
