import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.gray0};
  z-index: 10;

  .Cover {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -10%;
  position: relative;

  .Avatar {
    border-radius: 50%;
    width: 40vw;
    height: 40vw;
    max-width: 300px;
    max-height: 300px;
    box-shadow: 0px 4px 15px ${({ theme }) => theme.colors.shadow};
    border-style: inset;
    border: 0.4rem solid ${({ theme }) => theme.colors.gray0};
    margin-bottom: 1.2rem;
  }

  .Logo {
    width: 100%;
    height: 1.7rem;
    margin-top: 0.5rem;
    margin-bottom: 0.4rem;
  }

  .Function {
    display: block;
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .Ornaments {
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: 0;
    width: 65%;
  }
`;
