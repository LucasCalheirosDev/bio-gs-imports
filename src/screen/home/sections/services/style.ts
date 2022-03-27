import styled from "styled-components";

export const ContainerContent = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  padding: 2rem;
  margin-left: 5%;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.gray0};

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

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;

  .Border-top {
    position: absolute;
    top: 0;
    right: 5%;
  }

  .Border-bottom {
    position: absolute;
    bottom: 0;
    right: 5%;
    transform: rotate(90deg);
  }

  .Border-right {
    width: 5%;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.gray0};
    border-radius: -20px;
    height: auto;
  }
`;
