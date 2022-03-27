import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1000px;
  margin: auto;
  background-image: linear-gradient(
    180deg,
    ${({ theme }) => `${theme.colors.primary100}, ${theme.colors.secondary100}`}
  );
  z-index: -1;
`;
