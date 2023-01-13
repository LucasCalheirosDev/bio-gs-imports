import { icons } from "../../../../assets";
import { Button, Title, Animation } from "../../../../components";
import { Container } from "./style";

interface IContacts {
  icon: keyof typeof icons;
  text: string;
  link: string;
}

const contactsArray: IContacts[] = [
  {
    icon: "whats",
    link: "https://api.whatsapp.com/send/?phone=5579998326271",
    text: "Nosso whatsApp",
  },
  // {
  //   icon: "email",
  //   link: "mailto:draanaportela@gmail.com",
  //   text: "Mande um email",
  // },
  {
    icon: "insta",
    link: "https://www.instagram.com/sou.gsimports",
    text: "Siga no instagram",
  },
];

export function ContactsSection() {
  return (
    <Container>
      <Title>
        Fale
        <br />
        conosco
      </Title>
      <Animation.Container>
        <Animation.ContentContainer animationType="showRight" delay={1}>
          <ul className="Contacts_list">
            {contactsArray.map((item) => (
              <Button icon={item.icon} link={item.link} key={item.text}>
                {item.text}
              </Button>
            ))}
          </ul>
        </Animation.ContentContainer>
      </Animation.Container>
    </Container>
  );
}
