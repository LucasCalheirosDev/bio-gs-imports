import { svg } from "../../../../assets";
import { Title, Animation } from "../../../../components";
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
      <Title>
        Sobre
        <br />
        mim
      </Title>
      <Animation.Container>
        <ul>
          {about.map((item, index) => (
            <li key={item}>
              <Animation.ContentContainer
                animationType="showRight"
                delay={index * 0.4}
              >
                {item}
              </Animation.ContentContainer>
            </li>
          ))}
        </ul>
        <Animation.ContentContainer
          animationType="opacity"
          delay={1}
          duration={2}
        >
          <img src={svg.logo} alt="logo" className="Logo" />
        </Animation.ContentContainer>
      </Animation.Container>
    </Container>
  );
}
