import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/creations", label: "Creations" },
  { href: "/contact", label: "Contact" }
].map(link => {
  link.key = `nav-tab-${link.label}`;
  return link;
});

const Navigation = () => (
  <Navbar
    style={{
      backgroundColor: "black",
      borderBottom: "10px solid #B1DDF1",
      height: "30vh",
      width: "100vw",
      padding: "0.25rem !important",
    }}
    variant="dark"
    expand="md"
  >
    <Logo />

    <Navbar.Toggle aria-controls="nav-menu" />

    <Navbar.Collapse className="nav-menu">
      {links.map(({ key, href, label }) => (
        <Link href={href} key={key} passHref>
          <Nav.Link
            title={label}
            aria-label={label}
            style={{ color: "#9f87af" }}
          >
            {label.toUpperCase()}
          </Nav.Link>
        </Link>
      ))}
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
