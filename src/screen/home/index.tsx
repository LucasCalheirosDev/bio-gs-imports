import {
  HeaderSection,
  ContactsSection,
  ServicesSection,
  AboutSection,
  OnlineSection,
  FooterSection,
} from "./sections";
import { Container } from "./styles";

export function HomeScreen() {
  return (
    <Container>
      <div style={{ zIndex: 99 }}>
        <HeaderSection />
        <ContactsSection />
        <OnlineSection />
        <ServicesSection />
        <AboutSection />
        <FooterSection />
      </div>
    </Container>
  );
}
