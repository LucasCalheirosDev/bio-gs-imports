import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  padding: 2rem;
  margin-left: 5%;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.gray0};

  .Title {
    line-height: 50px;
  }

  ul {
    margin-top: 1.5rem;
    list-style-type: none;
  }

  li + li {
    margin-top: 1.4rem;
  }

  .Ornaments {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    z-index: -1;
  }

  .Alert {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
  }

  .Icon {
    margin-right: 1rem;
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
