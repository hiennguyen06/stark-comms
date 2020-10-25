import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    :root {
        --red: #FF3437;
        --blue: #0A2E9E;
        --black: #000;
        --white: #FFFFFF;
    }
    * {
        margin: 0;
        padding: 0;
    }
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    html {
        font-size: 10px;
    }
    .container {
        width: 100%;
        position: relative;
        display: flex; 
        justify-content: center;
        align-items: center;
    }
    .blue-bg {
        background: var(--blue);
    }
    .red-bg {
        background: var(--red);
    }
    .blue-divider {
        border-top: 2px solid rgba(255, 255, 255, 0.15);

    }
    .inner-container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem;
        @media (max-width: 450px) {
            padding: 2.4rem;
        }
    }
    .extra-space {
        padding: 16rem 0;
    }
    .btn {
        font-size: 1.6rem;
        border: 0;
        outline: 0;
        background: transparent;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        cursor: pointer;
        border-radius: 4px;
        font-weight: 500;
        color: var(--red);
        padding: 1.2rem 2.4rem;
        border: 1px solid var(--red);
        transition: all 0.25s;
        &:hover {
            color: var(--white);
            background: var(--red);
        }
    }
    .btn-bluebg {
        color: var(--white);
        border: 1px solid var(--white);
        &:hover {
            color: var(--blue);
            background: var(--white);
        }
    }
    .btn-redbg {
        color: var(--white);
        border: 1px solid var(--white);
        &:hover {
            color: var(--red);
            background: var(--white);
        }
    }
    .logo {
        margin-left: -1.6rem;
    }
    .service-icon {
        font-size: 4rem;
        padding-bottom: 8px;
        border-bottom: 4px solid var(--white)
    }
`

export default GlobalStyles
