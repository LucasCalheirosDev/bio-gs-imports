import styled from "styled-components";

export const Container = styled.a.attrs({
  target: "_blank",
})`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  border-radius: 2rem;
  border: 0.12rem solid ${({ theme }) => theme.colors.primary100};
  background-color: ${({ theme }) => theme.colors.gray0};
  align-items: center;
  text-decoration: none;
  color: inherit;
  height: 3.5rem;
  cursor: pointer;

  .Children {
    flex: 1;
    text-align: start;
    margin-left: 1rem;
  }

  .Icon {
    align-self: stretch;
    fill: ${({ theme }) => theme.colors.primary100};
  }

  .Right_icon {
    fill: ${({ theme }) => theme.colors.gray100};
  }
`;
