import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

// import components
import Header from "../components/Header"
import AboutSection from "../components/AboutSection"

const HomePage = ({ data }) => {
  const header = data.allStrapiHome.nodes[0].header
  const about = data.allStrapiHome.nodes[0].about_section

  return (
    <Layout>
      <Header header={header} />
      <AboutSection about={about} />
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
        services_section {
          service_card {
            description
            id
            title
          }
          id
          title
        }
      }
    }
  }
`
export default HomePage
