import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  border-radius: 2rem 0 0 2rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray0};
  margin-left: 5%;
  position: relative;

  .Title {
    line-height: 50px;
    color: ${({ theme }) => theme.colors.primary100};
  }

  ul {
    margin-top: 2rem;
    list-style-type: none;
  }

  .Ornaments {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }

  .Icon {
    margin-right: 1rem;
  }

  li + li {
    margin-top: 0.8rem;
  }
`;
