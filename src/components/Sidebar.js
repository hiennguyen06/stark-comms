import React from "react"
import styled from "styled-components"
import { FaTimes } from "react-icons/fa"

const SidebarStyles = styled.div`
  .sidebar {
    width: 100vw;
    height: 100vh;
    background: var(--black);
    color: var(--white);
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 100000;
    opacity: 0;
    pointer-events: none;
    transition: all 0.25s linear;
  }
  .show-sidebar {
    opacity: 1;
    pointer-events: auto;
  }
`
const Sidebar = ({ openSidebar, handleSidebarToggle }) => {
  return (
    <SidebarStyles>
      <div className={`sidebar ${openSidebar ? "show-sidebar" : ""}`}>
        <button
          type="button"
          className="btn-close"
          onClick={handleSidebarToggle}
        >
          <FaTimes />
        </button>
        <h1>I'm am the sidebar</h1>
      </div>
    </SidebarStyles>
  )
}

export default Sidebar
