import React, { Fragment } from "react";
import Main from "./containers/Layout/Main";
import GlobalStyle from "./GlobalStyle";
import Theme from "./containers/Theme";

function App() {
  return (
    <Fragment>
      <Theme>
        <GlobalStyle />
        <Main />
      </Theme>
    </Fragment>
  );
}

export default App;
