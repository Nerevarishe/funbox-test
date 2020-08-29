import { createGlobalStyle } from "styled-components";
import fontExo2Thin from "./assets/fonts/Exo2.0-Thin.otf";
import bgPattern from "./assets/img/bg-pattern.png";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Exo2Thin";
    src: url(${fontExo2Thin});
  }
  
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
    background-image: url(${bgPattern});
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 5e-5) 49.88%,
      rgba(0, 0, 0, 0.5) 100%
    ),  url(${bgPattern});
  }
  
  h1 {
    margin: 0;
  }
`;

export default GlobalStyle;
