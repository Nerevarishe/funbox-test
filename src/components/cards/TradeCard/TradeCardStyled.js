import styled from "styled-components";
import bgCat from "../../../assets/img/cat.png";

// TODO: Make clip relative!
const TradeCardStyled = styled.div`
  position: relative;
  min-width: 320px;
  min-height: 480px;
  border: 4px solid ${(props) => props.theme.colors.border.default};
  border-radius: 12px;
  margin-bottom: 14px;
  background: url(${bgCat}) no-repeat, ${(props) => props.theme.colors.bg.card};
  overflow: hidden;
  clip-path: polygon(49px 0, 100% 0, 100% 100%, 0 100%, 0 49px, 49px 0);

  :before {
    content: "";
    width: 86px;
    height: 86px;
    margin: -51px;
    position: absolute;
    transform: rotate(45deg);
    border: 4px solid ${(props) => props.theme.colors.border.default};
  }
`;

export default TradeCardStyled;
