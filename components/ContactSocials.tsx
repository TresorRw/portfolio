import { FaGithub, FaLinkedin, FaTwitter, FaFreeCodeCamp, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { SiReplit, SiGmail } from "react-icons/si";
import { Chip, Link } from "@nextui-org/react";

const ContactSocials = () => {
  return (
    <>
      <Link href="https://wa.me/message/JCUGW6TXACGKL1" isExternal>
        <Chip startContent={<FaWhatsapp />} color="default" variant="dot"> WhatsApp Chat</Chip>
      </Link>
      <Link href="mailto:alaintresorcyusa683@gmail.com" isExternal>
        <Chip startContent={<SiGmail />} color="danger" variant="dot"> Mail Me</Chip>
      </Link>
      <Link href="https://github.com/TresorRw" isExternal>
        <Chip startContent={<FaGithub />} color="default" variant="dot"> GitHub</Chip>
      </Link>
      <Link href="https://linkedin.com/in/catresor" isExternal>
        <Chip startContent={<FaLinkedin />} color="primary" variant="dot"> LinkedIn</Chip>
      </Link>
      <Link href="https://twitter.com/TresorRw" isExternal>
        <Chip startContent={<FaTwitter />} color="success" variant="dot"> Twitter</Chip>
      </Link>
      <Link href="https://replit.com/@CyusaAlain" isExternal>
        <Chip startContent={<SiReplit />} color="warning" variant="dot"> Replit</Chip>
      </Link>
      <Link href="https://www.freecodecamp.org/TresorRw" isExternal>
        <Chip startContent={<FaFreeCodeCamp />} color="secondary" variant="dot"> FreeCodeCamp</Chip>
      </Link>
    </>
  )
}

export default ContactSocials