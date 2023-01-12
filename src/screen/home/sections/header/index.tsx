import { images, svg } from "../../../../assets";
import { Animation } from "../../../../components";
import { Container, AvatarContainer } from "./style";

export function HeaderSection() {
  return (
    <Container>
      <img src={images.cover} alt="Foto de Capa" className="Cover" />
      <AvatarContainer>
        <img src={images.profile} alt="GS Imports" className="Avatar" />
        <Animation.Container>
          <Animation.ContentContainer animationType="showBottomTop">
            <img src={svg.logoText} alt="Imports" className="Logo" />
          </Animation.ContentContainer>
          <Animation.ContentContainer animationType="showBottomTop" delay={0.5}>
            <span className="Function">tudo em eletrônicos</span>
          </Animation.ContentContainer>
        </Animation.Container>
        <img
          src={images.headerOrnaments}
          alt="Ornamentos"
          className="Ornaments"
        />
      </AvatarContainer>
    </Container>
  );
}
