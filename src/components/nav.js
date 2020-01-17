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
      padding: "0.25rem !important",
      margin: "auto"
    }}
    variant="dark"
    expand="md"
    collapseOnSelect
  >
    <Logo />

    <Navbar.Toggle aria-controls="nav-menu" />

    <Navbar.Collapse id="nav-menu">
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

    <style jsx>{`
      // nav {
      //   height: inherit;
      //   width: 100vw;
      // }
      // nav>ul {
      //   display: flex;
      //   padding: 0 0.5em;
      //   margin: auto;
      //   height: inherit;
      //   width: 66%;
      //   list-style: none;
      //   align-items: center;
      //   justify-content: space-evenly;
      // }
      // li {
      //   padding: auto;
      //   font-size: 1rem;
      //   margin: 0 1em;
      //   text-decoration: none;
      // }
      // a {
      //   color: #614344;
      //   text-decoration: none;
      // }
      #nav-menu>a:hover {
        color: #9f87af;
        border-bottom: 2px solid #fff;
      }
      // @media (max-width: 860px) {
      //   nav {
      //     flex-direction: column;
      //     flex-wrap: wrap;
      //     align-content: center;
      //   }
      //   ul {
      //     flex-shrink: 2;
      //     // align-self: flex-end;
      //     float: right;
      //   }
      //   li {
      //     display: inline-block;
      //     font-size: 0.8rem;
      //   }
      // }
    `}</style>
  </Navbar>
);

export default Navigation;
