import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  padding: 2rem;
  margin-left: 5%;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.gray0};

  .Logo {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 140px;
    height: auto;
  }

  p {
    margin-top: 2rem;
    line-height: 35px;
    padding-right: 20px;
  }

  ul {
    margin-top: 2rem;
    list-style-type: none;
  }

  li + li {
    margin-top: 1.5rem;
  }

  .Title {
    line-height: 50px;
  }

  .Ornaments {
    position: absolute;
    top: 15%;
    right: 8%;
    height: 80%;
    z-index: -1;
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
