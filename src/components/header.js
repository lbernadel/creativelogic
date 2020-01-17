import Nav from "./nav";

const Header = () => (
  <div className="header-wrapper">
    <Nav />

    <style jsx>{`
      .header-wrapper {
        display: flex;
        height: 25vh;
        padding: 0.5rem;
        justify-content: space-around;
        align-items: center;
        background-color: rgba(177, 221, 241, 0.6);
      }
    `}</style>
  </div>
);

export default Header;