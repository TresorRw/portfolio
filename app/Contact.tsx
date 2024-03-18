import Container from "@/components/Container";
import ContactSocials from "@/components/ContactSocials";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <Container>
      <div id="contact" className="h-screen flex items-center justify-start flex-col md:px-24 md:pt-16 p-5">
        <h1 className="text-3xl font-bold text-success mb-5">Get In Touch</h1>
        <p className="text-slate-200 md:text-center max-w-[720px] w-full text-lg text-justify p-3">
          Excited about the possibility of collaborating on exciting projects! With a solid background in Software Development, I offer a mix of creativity and dedication. Let&apos;s create something extraordinary together. Reach out via below channels to explore potential opportunities. Can&apos;t wait to connect!
        </p>
        <div className="my-5 flex flex-wrap justify-center gap-2">
          <ContactSocials />
        </div>
        <ContactForm />
      </div>
      <footer className="p-1 text-center text-sm">Designed &amp; Built by CYUSA Alain Tresor</footer>
    </Container>
  )
}
