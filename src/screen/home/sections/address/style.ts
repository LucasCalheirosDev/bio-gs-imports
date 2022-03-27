import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  padding: 2rem;
  margin-left: 5%;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.gray0};

  .Alert {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
  }

  .Ornaments {
    position: absolute;
    top: 0;
    right: 0;
    height: 70%;
  }

  .Icon {
    margin-right: 1rem;
  }

  .Border-top {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
