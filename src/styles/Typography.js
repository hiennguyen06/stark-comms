import { createGlobalStyle } from 'styled-components'



const Typography = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    html {
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: var(--black);
    }

    h1,h2,h3,h4,h5,h6 {
        font-weight: 400;
        margin: 0;
    }
    li {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;
export default Typography;