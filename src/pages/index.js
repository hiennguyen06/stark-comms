import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

// import components
import Header from "../components/Header"
import AboutSection from "../components/AboutSection"
import ServiceSection from "../components/ServiceSection"
import ContactSection from "../components/ContactSection"

const HomePage = ({ data }) => {
  const header = data.allStrapiHome.nodes[0].header
  const about = data.allStrapiHome.nodes[0].about_section
  const contact = data.allStrapiHome.nodes[0].contact_section
  console.log(contact)

  return (
    <Layout>
      <Header header={header} />
      <AboutSection about={about} />
      <ServiceSection />
      <ContactSection contact={contact} />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiHome {
      nodes {
        header {
          description
          id
          title
          button {
            id
            title
          }
        }
        about_section {
          id
          title
          content {
            description
            id
          }
          button {
            id
            title
          }
        }
        contact_section {
          button {
            id
            title
          }
          content {
            description
            id
          }
        }
      }
    }
  }
`
export default HomePage
