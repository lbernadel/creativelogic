import React from "react";
import Link from "next/link";
import Logo from "./logo";

const links = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/creations", label: "CREATIONS" },
  { href: "/contact", label: "CONTACT" }
].map(link => {
  link.key = `nav-tab-${link.label}`;
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
        height: inherit;
        width: 100vw;
      }
      nav>ul {
        display: flex;
        padding: 0 0.5em;
        margin: auto;
        height: inherit;
        width: 66%;
        list-style: none;
        align-items: center;
        justify-content: space-evenly;
      }
      li {
        padding: auto;
        font-size: 1rem;
        margin: 0 1em;
        text-decoration: none;
      }
      a {
        color: #614344;
        text-decoration: none;
      }
      a:hover {
        color: #9f87af;
        border-bottom: 2px solid #88527f;
      }
      @media (max-width: 860px) {
        nav {
          flex-direction: column;
          flex-wrap: wrap;
          align-content: center;
        }
        ul {
          flex-shrink: 2;
          // align-self: flex-end;
          float: right;
        }
        li {
          display: inline-block;
          font-size: 0.8rem;
        }
      }
    `}</style>
  </nav>
);

export default Nav;
