import { svg, images } from "../../../../assets";
import { Animation } from "../../../../components";
import { Container, ContentContainer } from "./style";

export function FooterSection() {
  return (
    <Container>
      <Animation.Container viewport={{ once: true, amount: 0.8 }}>
        <ContentContainer>
          <Animation.ContentContainer animationType="opacity" delay={1}>
            <img src={svg.leftHeart} alt="corações" />
          </Animation.ContentContainer>
          <Animation.ContentContainer animationType="showBottomTop">
            <p className="FooterText">
              Transforme sua autoestima com a Estética Avançada
            </p>
          </Animation.ContentContainer>
          <Animation.ContentContainer animationType="opacity" delay={1}>
            <img src={svg.rightHeart} alt="coraçoes" />
          </Animation.ContentContainer>
        </ContentContainer>
      </Animation.Container>
      <img src={images.footerOrnaments} alt="ornaments" className="Ornaments" />
    </Container>
  );
}
