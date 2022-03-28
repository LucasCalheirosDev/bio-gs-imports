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
      <HeaderSection />
      <ContactsSection />
      <ServicesSection />
      <AboutSection />
      <AddressSection />
      <FooterSection />
    </Container>
  );
}
