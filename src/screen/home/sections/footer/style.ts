import styled from "styled-components";

export const ContentContainer = styled.footer`
  display: flex;
  flex-direction: row;
  padding: 2rem 1rem;
  border-radius: 2rem 2rem 0 0;
  background-color: ${({ theme }) => theme.colors.gray0};
  margin: 0 5%;

  p {
    flex: 1;
    text-align: center;
  }
`;

export const Container = styled.div`
  position: relative;

  .Ornaments {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 350px;
  }
`;
