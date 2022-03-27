import { images, svg } from "../../../../assets";
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
        <h1 className="Name">Dra Ana Paula Portela</h1>
        <span className="Function">Biomédica Esteta</span>
        <img
          src={images.headerOrnaments}
          alt="Ornamentos"
          className="Ornaments"
        />
      </AvatarContainer>
    </Container>
  );
}
