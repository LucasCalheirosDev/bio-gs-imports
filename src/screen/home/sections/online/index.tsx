import { images, svg } from "../../../../assets";
import { Title, Animation } from "../../../../components";
import { Container, ContentContainer } from "./style";

const services = [svg.time, svg.locale, svg.payment];

export function OnlineSection() {
  return (
    <Container>
      <ContentContainer>
        <Title>
          Estamos
          <br />
          online
        </Title>
        <Animation.Container>
          <Animation.Container>
            <ul>
              {services.map((item, index) => (
                <li key={item}>
                  <Animation.ContentContainer
                    animationType="showRight"
                    delay={index * 0.4}
                  >
                    <img src={item} alt="Online" className="Line" />
                  </Animation.ContentContainer>
                </li>
              ))}
            </ul>
          </Animation.Container>
        </Animation.Container>
        <img
          src={images.servicesOrnaments}
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
