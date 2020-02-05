import { NavbarBrand, Container } from "react-bootstrap";
import Link from "next/link";

const Logo = () => (
  <Container
    className="justify-content-center"
    style={{
      width: "auto",
      height: "25vh",
      paddingLeft: 0
    }}
  >
    <Link href="/" passHref>
      <NavbarBrand style={{ height: "inherit", width: "auto", float: "left" }}>
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
