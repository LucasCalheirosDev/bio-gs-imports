import styled from "styled-components";

import { fonts } from "../../../../assets";

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
    width: 9.25rem;
    height: 9.25rem;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border: 0.5rem solid ${({ theme }) => theme.colors.gray0};
    margin-bottom: 1.5rem;
  }
  .Name {
    font-family: "Findream";
    font-weight: 400;
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
