import styled from "styled-components";

export const ContentContainer = styled.footer`
  padding: 1.2rem 1rem;
  border-radius: 2rem 0 0 0;
  background-color: ${({ theme }) => theme.colors.gray0};
  margin-left: 5%;

  p {
    width: 100%;
    text-align: center;
  }
`;
