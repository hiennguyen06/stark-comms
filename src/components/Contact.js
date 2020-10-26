import React from "react"
import styled from "styled-components"
import { FaTimes } from "react-icons/fa"

const ContactStyles = styled.div`
  .contact {
    background: var(--black);
    color: var(--white);
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2000;
    opacity: 0;
    pointer-events: none;
    transition: all 0.25s linear;
  }

  .show-contact {
    opacity: 1;
    pointer-events: auto;
  }
`

const Contact = ({ handleContactToggle, openContact }) => {
  return (
    <ContactStyles>
      <div className={`contact ${openContact ? "show-contact" : ""}`}>
        <button className="btn-close" onClick={handleContactToggle}>
          <FaTimes />
        </button>
        <div className="inner-container">
          <h1>I am the contact modal with a form</h1>
        </div>
      </div>
    </ContactStyles>
  )
}

export default Contact
