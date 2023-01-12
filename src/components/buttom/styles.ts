import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.a).attrs({
  target: "_blank",
  whileHover: { x: 15 },
  whileTap: { scale: 0.95 },
})`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border-radius: 1rem;
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
    height: 100%;
  }

  .Right_icon {
    fill: ${({ theme }) => theme.colors.gray100};
  }
`;
