import Container from "@/components/Container";
import { Chip, Card, CardHeader, CardBody, Divider, Image } from '@nextui-org/react'

export default function ExperienceSection() {
  return (
    <Container>
      <div id="experience" className="md:px-24 md:pt-20 p-5">
        <h3 className="text-2xl text-success mb-5 font-bold">Where I&apos;ve worked</h3>
        <div className="flex flex-wrap justify-between">
          <Card shadow="none" className="bg-background lg:w-1/2">
            <CardHeader className='flex gap-3'>
              <Image
                alt={"Tekki company logo"}
                height={40}
                width={40}
                radius='sm'
                src='/tekki-logo.png'
              />
              <div className="flex flex-col">
                <p className="text-md font-semibold text-warning">Tekki</p>
                <p className="text-small text-primary-600">Backend Developer Apprentice</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="font-semibold text-success">
                22<sup>nd</sup> May - 11<sup>th</sup> November 2023
              </p>
              <p className="text-justify text-primary-600 my-3 text-lg">
                During my apprenticeship program at <b className="text-warning">Tekki Ltd</b> I was working on the backend side of the application we were building. Here is the summary:
              </p>
              <ul className="list-disc list-inside text-lg text-justify text-primary-600 space-y-1">
                <li>
                  Played a pivotal role in shaping and refining project ideas through extensive contribution to the development process.
                </li>
                <li>
                  Collaborated closely with innovative developers to conduct research, devise technical solutions, and establish robust architectures that align with business requirements.
                </li>
                <li>
                  Fostered effective communication among cross-functional teams, including designers, project managers, and fellow engineers, to seamlessly translate creative concepts into tangible production outcomes.
                </li>
                <li>
                  Spearheaded the creation and deployment of a real-time communication system, enhancing the efficiency of quick updates across the entire system.
                </li>
                <li>
                  Developed and delivered comprehensive project documentation utilizing compodoc and swagger, ensuring seamless knowledge transfer and enabling efficient collaboration among cross-functional teams.
                </li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                <Chip color="primary" variant="dot">PostgreSQL</Chip>
                <Chip color="danger" variant="dot">NestJS</Chip>
                <Chip color="primary" variant="dot">TypeScript</Chip>
                <Chip color="success" variant="dot">Docker</Chip>
                <Chip color="warning" variant="dot">PrismaORM</Chip>
                <Chip color="primary" variant="dot">Compodoc</Chip>
                <Chip variant="dot">+ others</Chip>
              </div>
            </CardBody>
          </Card>
          <Card shadow="none" className="bg-background lg:w-1/2">
            <CardHeader className='flex gap-3'>
              <Image
                alt={"Polystar NanoTech"}
                height={40}
                width={40}
                radius='sm'
                src='/po-icon.png'
              />
              <div className="flex flex-col">
                <p className="text-md text-warning">Polystar NanoTech Ltd</p>
                <p className="text-small text-primary-600">Full Stack Web Developer</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="font-semibold text-success">
                November 2022 - April 2023
              </p>
              <p className="text-justify text-lg my-3 text-primary-600">
                <b className="text-warning">Polystar NanoTech Ltd</b> is company that excells in embedded programming, electronics and robotics. as a full stack developer here is the summary of my tasks:
              </p>
              <ul className="list-disc list-inside text-justify text-primary-600 text-lg space-y-1">
                <li>
                  Produced robust production code for diverse projects at Polystar Nanotech, serving both internal needs and external clients like Narada Electronics.
                </li>
                <li>
                  Collaborated with creative developers to research, develop, and architect technical solutions that met specific business requirements.
                </li>
                <li>
                  Demonstrated keen attention to client and project manager input, meticulously understanding and executing digital solutions based on client ideas.
                </li>
                <li>
                  Engineered and deployed the Admin panel for the company&apos;s website, enhancing overall user experience and functionality.
                </li>
                <li>
                  Designed and implemented various system dashboards, optimizing data management processes for improved efficiency.
                </li>
                <li>
                  Provided leadership within the web development department through collaborative efforts, knowledge sharing, and mentorship.
                </li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                <Chip color="primary" variant="dot">MySQL</Chip>
                <Chip color="success" variant="dot">JavaScript</Chip>
                <Chip color="danger" variant="dot">PHP</Chip>
                <Chip color="warning" variant="dot">ChartJS</Chip>
                <Chip color="warning" variant="dot">Plotly.js</Chip>
                <Chip variant="dot">+ others</Chip>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </Container>
  )
}
