import { icons, svg, images } from "../../../../assets";
import { Title, Animation } from "../../../../components";
import { Container, ContainerContent } from "./style";

const services: string[] = [
  "Toxina Botulínica",
  "Preenchimento",
  "Bioestimuladores",
  "Intradermoterapia",
  "Limpeza de  pele",
];

export function ServicesSection() {
  return (
    <Container>
      <ContainerContent>
        <Title>
          Meus
          <br />
          serviços
        </Title>
        <Animation.Container>
          <ul>
            {services.map((item, index) => (
              <li key={item}>
                <Animation.ContentContainer
                  animationType="showRight"
                  delay={index * 0.4}
                >
                  <img src={icons.circle} alt="marcador" className="Icon" />
                  {item}
                </Animation.ContentContainer>
              </li>
            ))}
          </ul>
        </Animation.Container>
        <img
          src={images.servicesOrnaments}
          alt="ornaments"
          className="Ornaments"
        />
      </ContainerContent>
      <img src={svg.borderFrame} alt="borderFrame" className="Border-top" />
      <img src={svg.borderFrame} alt="borderFrame" className="Border-bottom" />
      <div className="Border-right" />
    </Container>
  );
}
