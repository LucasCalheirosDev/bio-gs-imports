import { svg } from "../../../../assets";
import { Animation } from "../../../../components";
import { ContentContainer } from "./style";

export function FooterSection() {
  return (
    <ContentContainer>
      <Animation.Container>
        <Animation.ContentContainer animationType="showBottomTop">
          <p className="FooterText">
            Estamos te esperando.
            <br />
            Nos siga nas redes sociais
          </p>
        </Animation.ContentContainer>
      </Animation.Container>
    </ContentContainer>
  );
}
