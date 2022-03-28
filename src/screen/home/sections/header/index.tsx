import { images, svg } from "../../../../assets";
import { Animation } from "../../../../components";
import { Container, AvatarContainer } from "./style";

export function HeaderSection() {
  return (
    <Container>
      <img src={images.cover} alt="Foto de Capa" className="Cover" />
      <img src={svg.headerDivision} alt="Divisão" className="Division" />
      <AvatarContainer>
        <img
          src={images.profile}
          alt="Dra Ana Paula Portela"
          className="Avatar"
        />
        <Animation.Container>
          <Animation.ContentContainer animationType="showBottomTop">
            <h1 className="Name">Dra Ana Paula Portela</h1>
          </Animation.ContentContainer>
          <Animation.ContentContainer animationType="showBottomTop" delay={0.5}>
            <span className="Function">Biomédica Esteta</span>
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
