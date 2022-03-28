import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div).attrs({
  initial: "offscreen",
  whileInView: "onscreen",
  viewport: { once: true, amount: 0.2 },
})``;

export const Content = styled(motion.div)``;
