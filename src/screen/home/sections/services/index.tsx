import { icons, svg, images } from "../../../../assets";
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
        <h1 className="Title">
          Meus
          <br />
          serviços
        </h1>
        <ul>
          {services.map((item) => (
            <li>
              <img src={icons.circle} alt="marcador" className="Icon" />
              {item}
            </li>
          ))}
        </ul>
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
