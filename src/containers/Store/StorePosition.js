import styled from "styled-components";

const StorePosition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  @media (max-width: 1049px) {
    height: 100%;
    margin-top: 100px;
  }
`;

export default StorePosition;
