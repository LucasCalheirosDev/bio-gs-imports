import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.gray0};
  z-index: 10;

  .Division {
    margin-top: -8%;
    width: 100%;
    height: auto;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -30%;
  position: relative;

  .Avatar {
    border-radius: 50%;
    width: 45%;
    max-width: 300px;
    box-shadow: 0px 4px 15px ${({ theme }) => theme.colors.shadow};
    border-style: inset;
    border: 0.4rem solid ${({ theme }) => theme.colors.gray0};
    margin-bottom: 1.2rem;
  }

  .Name {
    font-family: "Findream";
    font-size: 2.1rem;
    font-weight: 300;
    text-align: center;
    margin-bottom: 0.6rem;
  }
  .Function {
    display: block;
    text-align: center;
  }
  .Ornaments {
    position: absolute;
    z-index: -1;
    width: 100%;
  }
`;
