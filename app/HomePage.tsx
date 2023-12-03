import Container from "@/components/Container";
import { Button } from '@nextui-org/react';

export default function HomeSection() {
  return (
    <Container>
      <div className="md:px-28 md:py-20 lg:py-28 lg:w-3/5 p-10 w-full">
        <h5 className="font-semibold">Hi there, I&apos;m</h5>
        <h1 className="font-bold my-3 text-5xl md:text-6xl">CYUSA Alain Tresor.</h1>
        <h1 className="font-semibold my-5 text-3xl w-full">Skilled in crafting robust, scalable software solutions.</h1>
        <p className="text-justify">Passionate and skilled software developer with a proven track record of crafting robust and innovative solutions, eager to contribute expertise in different technologies to drive excellence in software development. Ready to bring a dynamic blend of technical proficiency and creativity to your team.</p>
        <div className="action-buttons mt-10 space-x-5">
          <Button color="primary" className="text-white" variant="shadow">Contact</Button>
          <Button color="primary" variant="ghost">My Resume</Button>
        </div>
      </div>
    </Container>
  )
}
