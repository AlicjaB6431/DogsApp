import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
  
    }

    li {
        text-decoration: none;
        list-style-type:none;
    }
`;

export default GlobalStyle;
