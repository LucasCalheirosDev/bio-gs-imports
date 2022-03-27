import { images, svg } from "../../../../assets";
import { Container } from "./style";

const about: string[] = [
  "Ministrante de Cursos",
  "Graduada em Biomedicina certificada pelo Conselho Regional de Biomedicina",
  "Especializada em Análises Clínicas",
  "Intradermoterapia",
  "Especializada em Estética Avançada",
];

export function AboutSection() {
  return (
    <Container>
      <h1 className="Title">
        Sobre
        <br />
        mim
      </h1>
      <ul>
        {about.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img src={svg.logo} alt="logo" className="Logo" />
    </Container>
  );
}
