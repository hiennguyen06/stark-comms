import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --red: #FF3437;
        --blue: #0A2E9E;
        --black: #000;
        --white: #FFFFFF;
    }
    html {
        font-size: 10px;
    }
`;

export default GlobalStyles;