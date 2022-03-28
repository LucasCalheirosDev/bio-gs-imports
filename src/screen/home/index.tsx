import { Particles } from "../../components";
import {
  HeaderSection,
  ContactsSection,
  ServicesSection,
  AboutSection,
  AddressSection,
  FooterSection,
} from "./sections";
import { Container } from "./styles";

export function HomeScreen() {
  return (
    <Container>
      <div style={{ zIndex: 99 }}>
        <HeaderSection />
        <ContactsSection />
        <ServicesSection />
        <AboutSection />
        <AddressSection />
        <FooterSection />
      </div>
      <Particles />
    </Container>
  );
}
