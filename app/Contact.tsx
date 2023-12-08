import Container from "@/components/Container";
import { Chip, Link } from "@nextui-org/react";

export default function ContactSection() {
  return (
    <Container>
      <div id="contact" className="h-screen flex items-center justify-center flex-col md:px-28 md:pt-16 lg:pt-24 p-5">
        <h1 className="text-3xl font-bold text-success mb-5">Get In Touch</h1>
        <p className="text-primary-600 max-w-[720px] w-full text-lg text-center p-3">
          Excited about the possibility of collaborating on exciting projects! With a solid background in Software Development, I offer a mix of creativity and dedication. Let&apos;s create something extraordinary together. Reach out via below channels to explore potential opportunities. Can&apos;t wait to connect!
        </p>
        <div className="contact-options">
          <div className="my-5 flex flex-wrap justify-center gap-2">
            <Link href="https://github.com/TresorRw" isExternal>
              <Chip color="default" variant="dot">GitHub</Chip>
            </Link>
            <Link href="https://linkedin.com/in/catresor" isExternal>
              <Chip color="primary" variant="dot">LinkedIn</Chip>
            </Link>
            <Link href="https://twitter.com/TresorRw" isExternal>
              <Chip color="success" variant="dot">Twitter</Chip>
            </Link>
            <Link href="https://replit.com/@CyusaAlain" isExternal>
              <Chip color="warning" variant="dot">Replit</Chip>
            </Link>
            <Link href="mailto:alaintresorcyusa683@gmail.com" isExternal>
              <Chip color="danger" variant="dot">Mail Me</Chip>
            </Link>
            <Link href="https://www.freecodecamp.org/TresorRw" isExternal>
              <Chip color="secondary" variant="dot">FreeCodeCamp</Chip>
            </Link>
          </div>
        </div>
      </div>
      <footer className="p-1 text-center text-sm">Designed &amp; Built by CYUSA Alain Tresor</footer>
    </Container>
  )
}
