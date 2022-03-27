import { icons } from "../../../../assets";
import { Button } from "../../../../components";
import { Container } from "./style";

interface IContacts {
  icon: keyof typeof icons;
  text: string;
  link: string;
}

const contactsArray: IContacts[] = [
  {
    icon: "whats",
    link: "https://api.whatsapp.com/send/?phone=5579998475885",
    text: "Meu whatsApp",
  },
  {
    icon: "email",
    link: "mailto:draanaportela@gmail.com",
    text: "Mande um email",
  },
  {
    icon: "insta",
    link: "https://www.instagram.com/dra.anaportela/",
    text: "Siga no instagram",
  },
];

export function ContactsSection() {
  return (
    <Container>
      <h1 className="Title">
        Fale
        <br />
        comigo
      </h1>
      <ul className="Contacts_list">
        {contactsArray.map((item) => (
          <Button icon={item.icon} link={item.link}>
            {item.text}
          </Button>
        ))}
      </ul>
    </Container>
  );
}
