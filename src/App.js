import React, { Fragment } from "react";
import Main from "./containers/Layout/Main";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Main />
    </Fragment>
  );
}

export default App;
