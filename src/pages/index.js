import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

// import components
import Header from "../components/Header"

const HomePage = ({ data }) => {
  const headerInfo = data.allStrapiHome.nodes[0]
  return (
    <Layout>
      <Header headerInfo={headerInfo} />
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
      }
    }
  }
`
export default HomePage
