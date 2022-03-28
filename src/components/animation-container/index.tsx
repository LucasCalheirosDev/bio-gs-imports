import { Variants, Variant } from "framer-motion";
import { ReactNode } from "react";

import { Container, Content } from "./styles";

interface ITypesInfo {
  onscreen: Variant;
  offscreen: Variant;
}

type TypesName = "opacity" | "showRight" | "showBottomTop";

const types: Record<TypesName, ITypesInfo> = {
  opacity: {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
    },
  },
  showRight: {
    offscreen: {
      x: 20,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
    },
  },
  showBottomTop: {
    offscreen: { y: 30, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
    },
  },
};

interface IContentContainer {
  delay?: number;
  duration?: number;
  children: ReactNode;
  animationType: TypesName;
}

function ContentContainer({
  delay = 0,
  duration = 1,
  children,
  animationType,
}: IContentContainer) {
  const { offscreen, onscreen } = types[animationType];

  const cardVariants: Variants = {
    offscreen,
    onscreen: {
      transition: {
        delay,
        type: "spring",
        duration,
      },
      ...onscreen,
    },
  };
  return <Content variants={cardVariants}>{children}</Content>;
}

export const Animation = { Container, ContentContainer };
