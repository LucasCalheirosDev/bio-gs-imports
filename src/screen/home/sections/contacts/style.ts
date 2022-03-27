import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  border-radius: 2rem 0 0 2rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray0};
  margin-left: 5%;
  margin-top: 1.5rem;

  .Contacts_list {
    margin-top: 2rem;
  }

  a + a {
    margin-top: 1rem;
  }

  .Title {
    color: ${({ theme }) => theme.colors.primary100};
  }
`;
