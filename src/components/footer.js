const Footer = () => (
  <div className="footer-wrapper">
    <div className="copyright">© {new Date().getFullYear()} Creative Logic. All rights reserved.</div>
    <style jsx>{`
      .footer-wrapper {
        text-align: center;
        margin-top: 10vh;
        padding: 2rem;
        background-color: #B1DDF1;
      }
      .copyright {
        color: #614344;
        font-size: 14px
      }
    `}</style>
  </div>
);

export default Footer;