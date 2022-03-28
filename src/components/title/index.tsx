import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

import { Container, Content } from "./styles";

interface ITitleProps {
  children: ReactNode;
}

export function Title({ children }: ITitleProps) {
  return (
    <Container>
      <Content>
        <h1 className="Title">{children}</h1>
      </Content>
    </Container>
  );
}
