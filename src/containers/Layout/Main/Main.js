import React from "react";
import MainPosition from "./MainPosition";
import MainStyled from "./MainStyled";
import Store from "../../Store";

const Main = () => {
  return (
    <MainPosition>
      <MainStyled>
        <Store />
      </MainStyled>
    </MainPosition>
  );
};

export default Main;
