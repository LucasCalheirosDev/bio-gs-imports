import { icons, images } from "../../../../assets";
import { Title, Animation } from "../../../../components";
import { Container } from "./style";

const services: string[] = [
  "Fale conosco",
  "Por whats ou instagram",
  "Peça seus produtos",
  "Receba em sua casa",
  "Escolha como pagar",
  "Aproveite seu produto",
  "Com garantia e qualidade",
  "Curta e compartilhe",
];

export function ServicesSection() {
  return (
    <Container>
      <Title>
        Tudo em
        <br />
        eletrônicos
      </Title>
      <Animation.Container>
        <ul>
          {services.map((item, index) => (
            <li key={item}>
              <Animation.ContentContainer
                animationType="showRight"
                delay={index * 0.3}
              >
                <img src={icons.circle} alt="marcador" className="Icon" />
                {item}
              </Animation.ContentContainer>
            </li>
          ))}
        </ul>
      </Animation.Container>
    </Container>
  );
}
