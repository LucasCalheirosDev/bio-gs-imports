import { motion, Variants } from "framer-motion";
import styled from "styled-components";

const cardVariants: Variants = {
  offscreen: {
    x: -500,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.5,
    },
  },
};

export const Container = styled(motion.div).attrs({
  initial: "offscreen",
  whileInView: "onscreen",
  viewport: { once: true, amount: 0.8 },
})``;

export const Content = styled(motion.div).attrs({
  variants: cardVariants,
})``;
