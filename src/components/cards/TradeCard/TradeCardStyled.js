import styled from "styled-components";
import bgCat from "../../../assets/img/cat.png";

const TradeCardStyled = styled.div`
  position: relative;
  min-width: 320px;
  min-height: 480px;
  border: 4px solid ${(props) => props.theme.colors.border.default};
  border-radius: 12px;
  background: no-repeat url(${bgCat}), ${(props) => props.theme.colors.bg.card};
`;

export default TradeCardStyled;
