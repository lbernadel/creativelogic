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
        <Link key={key} href={href}>
          <a title={label} aria-label={label} className="nav-tabs">{label}</a>
        </Link>
      ))}
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-around;
      }
      nav > ul {
        padding: 4px 16px;
      }
      Link {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #614344;
        text-decoration: none;
      }
      a:hover {
        color: #9F87AF;
      }
    `}</style>
  </nav>
)

export default Nav
