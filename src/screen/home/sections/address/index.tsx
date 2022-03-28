import { icons, svg, images } from "../../../../assets";
import { Title, Animation } from "../../../../components";
import { Container } from "./style";

export function AddressSection() {
  return (
    <Container>
      <Title>
        Nosso
        <br />
        espaço
      </Title>
      <Animation.Container>
        <Animation.ContentContainer animationType="showRight">
          <div className="Alert">
            <img src={icons.maps} alt="mapas" className="Icon" />
            <p>
              Em breve novidades.
              <br />
              Aguardem ...
            </p>
          </div>
        </Animation.ContentContainer>
      </Animation.Container>
      <img
        src={images.addressOrnaments}
        alt="ornaments"
        className="Ornaments"
      />
      <img src={svg.borderFrame} alt="borderFrame" className="Border-top" />
    </Container>
  );
}
