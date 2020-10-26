import React, { useState } from "react"
import "normalize.css"

import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Typography"
import { useStaticQuery } from "gatsby"

import Nav from "./Nav"
import Footer from "./Footer"
import Contact from "./Contact"
import ContactSection from "../components/ContactSection"
import Sidebar from "./Sidebar"

const query = graphql`
  {
    allStrapiContactSection {
      nodes {
        contact {
          description
          title
          button {
            id
            title
          }
          id
        }
      }
    }
  }
`

const Layout = ({ children }) => {
  const {
    allStrapiContactSection: { nodes: contact },
  } = useStaticQuery(query)

  const [openContact, setOpenContact] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)

  const handleContactToggle = () => {
    setOpenContact(!openContact)
  }

  const handleSidebarToggle = () => {
    setOpenSidebar(!openSidebar)
  }

  console.log(openSidebar)

  return (
    <>
      <GlobalStyles />
      <Typography />
      <Nav handleSidebarToggle={handleSidebarToggle} />
      <Sidebar
        handleSidebarToggle={handleSidebarToggle}
        openSidebar={openSidebar}
      />
      <Contact
        openContact={openContact}
        handleContactToggle={handleContactToggle}
      />
      {children}
      <ContactSection
        contact={contact}
        handleContactToggle={handleContactToggle}
      />
      <Footer />
    </>
  )
}

export default Layout
