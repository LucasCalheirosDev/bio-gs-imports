import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.gray0};
  .Cover {
  }
  .Division {
    margin-top: -8%;
    width: 100%;
    height: auto;
  }
  .Ornaments {
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -30%;

  .Avatar {
    border-radius: 50%;
    width: 45%;
    box-shadow: 0px 4px 15px ${({ theme }) => theme.colors.shadow};
    border: 0.4rem solid ${({ theme }) => theme.colors.gray0};
    margin-bottom: 1.5rem;
  }
  .Name {
    font-family: "Findream";
    font-size: 1.8rem;
    text-align: center;
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
