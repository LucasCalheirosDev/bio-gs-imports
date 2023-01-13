import { svg, images } from "../../../../assets";
import { Title, Animation } from "../../../../components";
import { Container, ContentContainer } from "./style";

export function AboutSection() {
  return (
    <Container>
      <ContentContainer>
        <Title>
          Sobre
          <br />
          nós
        </Title>
        <Animation.Container>
          <Animation.ContentContainer animationType="showRight" delay={0.4}>
            <p>
              Somos uma loja online, com vendas através das redes sociais,
              sempre comprometida em levar até os nossos clientes os melhores
              importados, sempre com atendimento pessoal e personalizado
            </p>
          </Animation.ContentContainer>
        </Animation.Container>
        <img
          src={images.footerOrnaments}
          alt="ornaments"
          className="Ornaments"
        />
      </ContentContainer>
      <img src={svg.borderFrame} alt="borderFrame" className="Border-top" />
      <img src={svg.borderFrame} alt="borderFrame" className="Border-bottom" />
      <div className="Border-right" />
    </Container>
  );
}
