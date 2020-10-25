import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const AboutSectionStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10rem;
  padding: 8rem 0;
  color: var(--white);
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }

  .about-left {
    h1 {
      font-size: 3.6rem;
      font-weight: 700;
      line-height: 1.4;
      @media (max-width: 1100px) {
        margin-bottom: 4rem;
      }
      @media (max-width: 600px) {
        font-size: 3.2rem;
      }
      @media (max-width: 450px) {
        font-size: 2.4rem;
      }
    }
  }
  .about-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1100px) {
    }
    h1 {
      font-size: 1.6rem;
      font-weight: 700;
      @media (max-width: 1100px) {
        display: none;
      }
    }
    p {
      font-size: 1.8rem;
      line-height: 1.6;
      @media (max-width: 1100px) {
        margin-bottom: 4rem;
      }
      @media (max-width: 450px) {
        font-size: 1.6rem;
      }
    }
  }
`

const AboutSection = ({ about }) => {
  return (
    <div className="container blue-bg">
      <div className="inner-container blue-bg">
        <AboutSectionStyles>
          <div className="about-left">
            <h1>{about.content[0].description}</h1>
          </div>
          <div className="about-right">
            <h1>{about.title}</h1>
            <p>{about.content[1].description}</p>
            <Link to="/services/">
              <button type="button" className="btn btn-white">
                {about.button[0].title}
              </button>
            </Link>
          </div>
        </AboutSectionStyles>
      </div>
    </div>
  )
}

export default AboutSection
