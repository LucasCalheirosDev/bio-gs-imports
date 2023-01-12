import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1000px;
  min-width: 360px;
  margin: auto;
  background-image: linear-gradient(
    180deg,
    ${({ theme }) =>
      `${theme.colors.black} , ${theme.colors.gray50} ,${theme.colors.black}, ${theme.colors.gray50}`}
  );
  z-index: -1;
`;
