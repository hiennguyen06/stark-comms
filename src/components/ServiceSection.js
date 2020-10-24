import React from "react"
import styled from "styled-components"
import ServicesSectionData from "../constants/ServicesSectionData"
import { Link } from "gatsby"

const ServicesSectionStyles = styled.div`
  color: var(--white);
  padding: 8rem 0;
  h1 {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 3rem;
  }

  .services-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 6rem;
    margin-bottom: 6rem;
  }

  .service-card {
    display: grid;
    grid-template-rows: auto auto 1fr;
    grid-row: span 3;
    grid-gap: 1rem;
    border: 2px solid rgba(255, 255, 255, 0.15);
    padding: 6rem 3rem;

    h1 {
      font-size: 3.6rem;
      margin: 3rem 0;
      font-weight: 700;
    }
    p {
      font-size: 1.8rem;
    }
  }
`

const ServiceSection = () => {
  return (
    <div className="container blue-bg blue-divider">
      <div className="inner-container blue-bg">
        <ServicesSectionStyles>
          <h1>How can we help you?</h1>
          <div className="services-cards">
            <ServicesSectionData />
          </div>
          <Link to="/services/">
            <button type="button" className="btn btn-white">
              View all services
            </button>
          </Link>
        </ServicesSectionStyles>
      </div>
    </div>
  )
}

export default ServiceSection
