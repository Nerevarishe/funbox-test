import styled from "styled-components";

const TradeCardWeightStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.border.default};

  > * {
    :first-child {
      margin-top: 20px;
      margin-bottom: 8px;
    }
  }
`;

export default TradeCardWeightStyled;
