import { ReactNode } from "react";

import { icons } from "../../assets";
import { Container } from "./styles";

interface IButtonProps {
  children: ReactNode;
  link: string;
  icon: keyof typeof icons;
}

export function Button({ children, link, icon }: IButtonProps) {
  return (
    <Container href={link}>
      <img
        src={icons[icon]}
        alt="Icone Esquerdo"
        className="Icon"
        height={30}
        width={30}
      />
      <div className="Children">{children}</div>
      <img
        src={icons.chevronRight}
        alt="Icone Direito"
        className="Right_icon"
      />
    </Container>
  );
}
