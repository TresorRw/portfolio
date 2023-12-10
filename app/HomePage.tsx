import Container from "@/components/Container";
import { Button, Link } from '@nextui-org/react';

export default function HomeSection() {
  return (
    <Container>
      <div className="md:px-28 md:py-20 lg:py-28 lg:w-4/5 px-10 py-14 w-full">
        <h5 className="font-semibold text-warning">Hey! my name is</h5>
        <h1 className="font-extrabold my-3 text-4xl md:text-6xl text-success">CYUSA Alain Tresor.</h1>
        <h1 className="font-semibold text-success-300 my-5 text-3xl w-full">Skilled in crafting robust, scalable software solutions.</h1>
        <p className="text-primary-600 text-justify text-lg">Passionate and skilled software developer with a proven track record of crafting robust and innovative solutions, eager to contribute expertise in different technologies to drive excellence in software development. Ready to bring a dynamic blend of technical proficiency and creativity to your team.</p>
        <div className="action-buttons mt-10 space-x-5">
          <Button color="primary" as={Link} href="/#contact" className="text-white bg-success-300" variant="shadow">Contact</Button>
          <Button color="success" variant="ghost">My Resume</Button>
        </div>
      </div>
    </Container>
  )
}
