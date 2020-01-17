const Footer = () => (
  <footer className="footer-wrapper">
    <p className="copyright">© {new Date().getFullYear()} Creative Logic. All rights reserved.</p>
    <style jsx>{`
      .footer-wrapper {
        text-align: center;
        background-color: #B1DDF1;
        padding: 1rem;
        height: 15vh;
        position: absolute;
        bottom: 0;
        width: 100vw;
      }
      .copyright {
        margin: 1em 0;
        color: #614344;
        font-size: 0.8rem;
      }
    `}</style>
  </footer>
);

export default Footer;