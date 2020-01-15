import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'HOME'},
  { href: '/about', label: 'ABOUT' },
  { href: '/creations', label: 'CREATIONS' },
  { href: '/contact', label: 'CONTACT' }
].map(link => {
  link.key = `nav-link-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href} className="nav-tabs">{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: G
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav
