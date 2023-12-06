import Container from "@/components/Container";
import { Image } from "@nextui-org/react";

export default function AboutSection() {
  return (
    <Container>
      <div id="about" className="flex gap-4 flex-col md:flex-row md:px-28 md:py-20 lg:py-28 p-5 w-full">
        <div className="md:w-3/4 p-4">
          <h3 className="text-4xl font-bold mb-5">About Me </h3>
          <p className="text-justify">
            Hi! My name is CYUSA Alain Tresor and i enjoy creating, designing and implementing digital solutions. My interest in Software development started back in ending of 2019 just playing HTML & CSS which gave me the fundation of web development. In 2020 i tried different field which is Machine Learning with python working with OpenCV but later continued in web development with JavaScript and PHP.
          </p>
          <p className="text-justify my-2">
            After finishing High school back in 2022, I joined one of the best Software Engineering programs in Rwanda. The Andela Techinical Leadership Program that last 9 months focusing on industry standards in different technologies for software development and Professional skills. </p>
          <p className="my-5">
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <div className="flex justify-between">
            <div className="dbs">
              <h3 className="mb-3 font-semibold text-primary">Databases</h3>
              <ul>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="langs">
              <h3 className="mb-3 font-semibold text-primary">Languages</h3>
              <ul>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>PHP</li>
              </ul>
            </div>
            <div className="frameworks">
              <h3 className="mb-3 font-semibold text-primary">Frameworks</h3>
              <ul>
                <li>NestJS</li>
                <li>NextJS</li>
                <li>ExpressJS</li>
              </ul>
            </div>
          </div>

          <p className="mt-5 text-center text-primary">Learning more a day by day...</p>
        </div>
        <div className="md:w-2/3 p-4 flex justify-center lg:w-1/3">
          <Image
            isZoomed
            isBlurred
            width={400}
            alt="NextUI Fruit Image with Zoom"
            fallbackSrc={'/profile.jpg'}
            src="/profile.jpg"
          />
        </div>
      </div>
    </Container>
  )
}
