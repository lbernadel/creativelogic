import Nav from "./nav";

const Header = () => (
  <div className="header-wrapper">
    <Nav />

    <style jsx>{`
      .header-wrapper {
        padding: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      @media (max-width: 600px) {
        .header-wrapper {
          display: block;
          text-align: center;
        }
      }
    `}</style>
  </div>
);

export default Header;
