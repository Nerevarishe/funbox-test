import styled from "styled-components";
import bg from "../../../assets/img/bg-pattern.png";

const MainPosition = styled.main`
  min-width: 320px;
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 5e-5) 49.88%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${bg});
`;

export default MainPosition;
