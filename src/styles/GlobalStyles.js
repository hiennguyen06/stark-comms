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
    .inner-container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem;
        /* background: yellow; */
    }
`

export default GlobalStyles
