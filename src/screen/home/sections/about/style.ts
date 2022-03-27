import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  border-radius: 2rem 0 0 2rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray0};
  margin-left: 5%;
  position: relative;

  .Logo {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 140px;
    height: auto;
  }

  ul {
    margin-top: 2rem;
    list-style-type: none;
  }

  li + li {
    margin-top: 1.5rem;
  }

  .Title {
    color: ${({ theme }) => theme.colors.primary100};
  }
`;
