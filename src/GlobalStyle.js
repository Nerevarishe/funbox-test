import { createGlobalStyle } from "styled-components";
import bgPattern from "./assets/img/bg-pattern.png";

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
  
  body {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 5e-5) 49.88%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${bgPattern});
  }
`;

export default GlobalStyle;
