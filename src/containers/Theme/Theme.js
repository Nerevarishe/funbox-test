import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    border: {
      default: "#1698D9",
      defaultHover: "#2EA8E6",
      selected: "#D91667",
      selectedHover: "#E52E7A",
      disabled: "#B3B3B3",
    },
    bg: {
      card: "#F2F2F2",
    },
    font: {
      white: "#FFFFFF",
      black: "#000000",
      gray: "#666666",
    },
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
