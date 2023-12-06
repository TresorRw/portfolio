import Container from "@/components/Container";
import { Chip, Link, Divider } from "@nextui-org/react";

export default function ContactSection() {
  return (
    <Container>
      <div id="contact" className="h-screen flex items-center justify-center flex-col md:px-28 md:pt-20 lg:pt-28 p-5">
        <h1 className="text-3xl font-bold mb-5">Get In Touch</h1>
        <div className="contact-options">
          <div className="my-5 flex flex-wrap gap-2">
            <Link href="https://linkedin.com/in/catresor" isExternal>
              <Chip color="primary" variant="dot">LinkedIn</Chip>
            </Link>
            <Link href="https://twitter.com/TresorRw" isExternal>
              <Chip color="success" variant="dot">Twitter</Chip>
            </Link>
            <Link href="" isExternal>
              <Chip color="warning" variant="dot">Replit</Chip>
            </Link>
            <Link href="mailto:alaintresorcyusa683@gmail.com" isExternal>
              <Chip color="danger" variant="dot">Mail Me</Chip>
            </Link>
            <Link href="" isExternal>
              <Chip color="secondary" variant="dot">FreeCodeCamp</Chip>
            </Link>
          </div>
        </div>
      </div>
      <footer className="p-1 text-center text-sm">Designed &amp; Built by CYUSA Alain Tresor</footer>
    </Container>
  )
}
