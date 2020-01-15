import React from "react";
import Link from "next/link";
import Logo from "./logo";

const links = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/creations", label: "CREATIONS" },
  { href: "/contact", label: "CONTACT" }
].map(link => {
  link.key = `nav-link-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <Logo />
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}>
            <a title={label} aria-label={label} className="nav-tabs">
              {label}
            </a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        margin: 5px 0;
        padding: 0;
        list-style: none;
        // float: right;
        // justify-content: space-around;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        // display: flex;
        padding: 1%;
        font-size: 1.5rem;
        margin: 0 1em;
      }
      a {
        color: #614344;
        text-decoration: none;
      }
      a:hover {
        color: #9f87af;
        padding-bottom: 5px;
        border-bottom: 2px solid #88527F;
      }
      @media (max-width: 600px) {
        ul {
          display: block;
          margin-top: 3vh;
        }
        li {
          display: inline-block;
          font-size: 1rem;
        }
      }
    `}</style>
  </nav>
);

export default Nav;
