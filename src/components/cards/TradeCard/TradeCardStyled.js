import styled from "styled-components";
import bgCat from "../../../assets/img/cat.png";

const TradeCardStyled = styled.div`
  position: relative;
  max-width: 320px;
  height: 480px;
  border: 4px solid
      ${({ theme, status }) =>
        status.hover
          ? status.hover && status.selected
            ? theme.colors.border.selectedHover
            : status.selected
            ? theme.colors.border.selected
            : theme.colors.border.defaultHover
          : status.selected
          ? theme.colors.border.selected
          : theme.colors.border.default}};
  border-radius: 12px;
  margin-bottom: 14px;
  background: url(${bgCat}) no-repeat, ${({ theme }) => theme.colors.bg.card};
  overflow: hidden;
  clip-path: polygon(48px 0, 100% 0, 100% 100%, 0 100%, 0 48px, 48px 0);
  
  cursor: pointer;

  :before {
    content: "";
    width: 86px;
    height: 86px;
    margin: -51px;
    position: absolute;
    transform: rotate(45deg);
    border: 4px solid
      ${({ theme, status }) =>
        status.hover
          ? status.hover && status.selected
            ? theme.colors.border.selectedHover
            : status.selected
            ? theme.colors.border.selected
            : theme.colors.border.defaultHover
          : status.selected
          ? theme.colors.border.selected
          : theme.colors.border.default}};
  }
`;

export default TradeCardStyled;
