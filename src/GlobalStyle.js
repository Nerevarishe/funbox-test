import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  html {
    font-size: 16px;
  }
  
  html, body, #root {
    height: 100vh;
  }
  
  img {
    vertical-align: bottom;
  }
  
  // TODO: Remove before publish!
  // * {
  //   border: 1px solid #f00 !important;
  // }
  
  @media (min-width: 768px) {}
  
  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {}
`;

export default GlobalStyle;
