import React from "react"
import styled from "styled-components"

const ContactSectionStyles = styled.div`
  color: var(--white);
  padding: 8rem 0;
  h1 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 4rem;
  }
`

const ContactSection = ({ contact, handleContactToggle }) => {
  return (
    <div className="container red-bg">
      <div className="inner-container">
        <ContactSectionStyles>
          <h1>{contact[0].contact.description}</h1>
          <button
            type="button"
            className="btn btn-redbg"
            onClick={handleContactToggle}
          >
            {contact[0].contact.button.title}
          </button>
        </ContactSectionStyles>
      </div>
    </div>
  )
}
export default ContactSection
