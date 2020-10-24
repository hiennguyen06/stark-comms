import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "About",
    url: "/about/",
  },
  {
    id: 3,
    text: "Services",
    url: "/services/",
  },
  {
    id: 4,
    text: "Contact",
    url: "/contact/",
  },
]

const NavLinks = ({ styleClass }) => {
  return (
    <ul className={`nav-links ${styleClass ? styleClass : ""}`}>
      {data.map(link => {
        return (
          <li key={link.id}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavLinks
