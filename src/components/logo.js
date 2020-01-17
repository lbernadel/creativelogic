import { NavbarBrand, Container } from "react-bootstrap";

const Logo = () => (
  <Container
    className="justify-content-center"
    style={{
      width: "auto",
      height: "25vh",
      margin: "auto",
      padding: "2px !important"
    }}
  >
    <NavbarBrand
      href="/"
      style={{ height: "inherit", margin: "auto", width: "auto" }}
    >
      <img
        style={{ height: "inherit", width: "inherit" }}
        src="/static/creativelogic_long-black.png"
        alt="Creative Logic Logo"
      />
    </NavbarBrand>
  </Container>
);

export default Logo;
