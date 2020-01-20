import React from "react";
import Logo from "./logo";
import { Navbar, Nav } from "react-bootstrap";

const links = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/creations", label: "CREATIONS" },
  { href: "/contact", label: "CONTACT" }
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
      margin: "auto"
    }}
    variant="dark"
    expand="md"
    collapseOnSelect
  >
    <Logo />

    <Navbar.Toggle aria-controls="nav-menu" />

    <Navbar.Collapse className="nav-menu">
      {links.map(({ key, href, label }) => (
        <Nav.Link
          key={key}
          href={href}
          title={label}
          aria-label={label}
          style={{ textAlign: "right", color: "#9f87af" }} 
        >
          {label}
        </Nav.Link>
      ))}
    </Navbar.Collapse>

    {/* <style jsx>{`
  .nav-menu {
    float: center;
  }
`}</style> */}
  </Navbar>
);

export default Navigation;
