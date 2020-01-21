import { NavbarBrand, Container } from "react-bootstrap";
import Link from "next/link";

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
    <Link href="/" passHref>
      <NavbarBrand style={{ height: "inherit", margin: "auto", width: "auto" }}>
        <img
          style={{ height: "inherit", width: "inherit" }}
          src="/static/creativelogic_long-black.png"
          alt="Creative Logic Logo"
        />
      </NavbarBrand>
    </Link>
  </Container>
);

export default Logo;
