import styled from "styled-components";

const TradeCardWeightStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({ theme, status }) =>
    status.hover
      ? status.hover && status.selected
        ? theme.colors.border.selectedHover
        : status.selected
        ? theme.colors.border.selected
        : theme.colors.border.defaultHover
      : status.selected
      ? theme.colors.border.selected
      : theme.colors.border.default}};

  > * {
    :first-child {
      margin-top: 20px;
      margin-bottom: 8px;
    }
  }
`;

export default TradeCardWeightStyled;
