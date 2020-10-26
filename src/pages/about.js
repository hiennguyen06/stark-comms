import React from "react"
import Layout from "../components/Layout"
import { AboutSectionStyles } from "../components/AboutSection"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql } from "gatsby"

const AboutPageHeaderStyles = styled.div`
  padding: 8rem 0;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.4;
    color: var(--red);
  }
`

const AboutPageProfileStyles = styled.div`
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .profile-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 12rem 0 8rem;
    color: var(--blue);
    h1 {
      font-size: 2.1rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.8rem;
    }
  }
`

const AboutPage = ({ data }) => {
  const {
    allStrapiAbout: { nodes: about },
  } = data
  return (
    <>
      <Layout>
        <div className="container">
          <div className="inner-container">
            <AboutPageHeaderStyles>
              <h1>{about[0].header_title}</h1>
            </AboutPageHeaderStyles>
          </div>
        </div>
        <div className="container blue-bg">
          <div className="inner-container extra-space">
            <AboutSectionStyles>
              <div className="about-left">
                <h1>{about[0].content.content[0].description}</h1>
              </div>
              <div className="about-right">
                <h1>{about[0].content.title}</h1>
                <p>{about[0].content.content[1].description}</p>
                <Link to="/services/">
                  <button type="button" className="btn btn-bluebg">
                    {about[0].content.button[0].title}
                  </button>
                </Link>
              </div>
            </AboutSectionStyles>
          </div>
        </div>
        <AboutPageProfileStyles>
          <Img
            fluid={about[0].profile_image.childImageSharp.fluid}
            className="hero-img"
          />
          <div className="profile-info">
            <h1>{about[0].profile.title}</h1>
            <p>{about[0].profile.description}</p>
          </div>
        </AboutPageProfileStyles>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        header_title
        content {
          id
          title
          button {
            id
            title
          }
          content {
            description
            id
          }
        }
        profile_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        profile {
          description
          id
          title
        }
      }
    }
  }
`

export default AboutPage
