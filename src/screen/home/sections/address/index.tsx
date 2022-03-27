import { icons, svg, images } from "../../../../assets";
import { Container } from "./style";

export function AddressSection() {
  return (
    <Container>
      <h1 className="Title">
        Nosso
        <br />
        espaço
      </h1>
      <div className="Alert">
        <img src={icons.maps} alt="mapas" className="Icon" />
        <p>
          Em breve novidades.
          <br />
          Aguardem ...
        </p>
      </div>
      <img
        src={images.addressOrnaments}
        alt="ornaments"
        className="Ornaments"
      />
      <img src={svg.borderFrame} alt="borderFrame" className="Border-top" />
    </Container>
  );
}
