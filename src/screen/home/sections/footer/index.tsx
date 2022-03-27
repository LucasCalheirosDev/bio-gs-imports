import { svg, images } from "../../../../assets";
import { Container, ContentContainer } from "./style";

export function FooterSection() {
  return (
    <Container>
      <ContentContainer>
        <img src={svg.leftHeart} alt="corações" />
        <p className="FooterText">
          Transforme sua autoestima com a Estética Avançada
        </p>
        <img src={svg.rightHeart} alt="coraçoes" />
      </ContentContainer>
      <img src={images.footerOrnaments} alt="ornaments" className="Ornaments" />
    </Container>
  );
}
