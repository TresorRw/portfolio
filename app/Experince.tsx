import Container from "@/components/Container";
import { Chip, Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from '@nextui-org/react'

export default function ExperienceSection() {
  return (
    <Container>
      <div id="experience" className=" md:px-28 md:py-20 lg:py-28 p-5">
        <h3 className="text-2xl mb-5 font-bold">Where I&apos;ve worked</h3>
        <div className="flex flex-wrap gap-4 justify-between">
          <Card shadow="md" className="bg-background w-full lg:w-5/12 hover:scale-105 ">
            <CardHeader className='flex gap-3'>
              <Image
                alt={"Tekki company logo"}
                height={40}
                width={40}
                radius='sm'
                fallbackSrc="/next.svg"
                src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
              />
              <div className="flex flex-col">
                <p className="text-md font-semibold">Tekki</p>
                <p className="text-small text-default-500">Backend Developer Apprentice</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="font-semibold">
                22<sup>nd</sup> May - 11<sup>th</sup> November 2023
              </p>
              <p className="text-justify my-2">
                During my apprenticeship program at <b className="text-primary">Tekki Ltd</b> I was working on the backend side of the application we were building. Here is the summary:
              </p>
              <ul className="list-disc list-inside text-justify">
                <li className="hover:text-primary">Contributed exitensively to the project idea development.
                </li>
                <li className="hover:text-primary">Work alongside creative developers for the research, development, and architecture of technical solutions to fulfill business requirements.
                </li>
                <li className="hover:text-primary">Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities.
                </li>
                <li className="hover:text-primary">Conducted collaborative coding session with other engineers to resolve more complex tasks together in order to stay on the same track during the process.
                </li>
                <li className="hover:text-primary">Built and shipped the complete projects documentation with compodoc and swagger as well
                </li>
                <li className="hover:text-primary">Built and shipped the real-time communication for quick and real-time updates across the system
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
          <Card shadow="md" className="w-full lg:w-5/12 bg-background hover:scale-105">
            <CardHeader className='flex gap-3'>
              <Image
                alt={""}
                height={40}
                width={40}
                radius='sm'
                fallbackSrc="/next.svg"
                src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
              />
              <div className="flex flex-col">
                <p className="text-md">Polystar NanoTech Ltd</p>
                <p className="text-small text-default-500">Full Stack Web Developer</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="font-semibold">
                November 2022 - April 2023
              </p>
              <p className="text-justify my-2">
                <b className="text-primary">Polystar NanoTech Ltd</b> is company that excells in embedded programming, electronics and robotics. as a full stack developer here is the summary of my tasks:
              </p>
              <ul className="list-disc list-inside text-justify">
                <li className="hover:text-primary">Deliver high-quality, robust production code for a diverse array of projects for either company or clients including Narada Electronics, and more.
                </li>
                <li className="hover:text-primary">Work alongside creative developers for the research, development, and architecture of technical solutions to fulfill business requirements.
                </li>
                <li className="hover:text-primary">Attention to details from clients and project manager to understand, explore and execute the client&apos;s ideas and turn them into digital solution.
                </li>
                <li className="hover:text-primary">Built and shipped the Admin panel for the company&apos; website.
                </li>
                <li className="hover:text-primary">Architected and implemented different system dashboards for better data management.
                </li>
                <li className="hover:text-primary">
                  Provide leadership within web developers department through close collaboration, knowledge shares, and mentorship
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
            <CardFooter>
              <Link isExternal showAnchorIcon href={"https://polystar.rw"}>
                Visit Polystar Nanotech
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Container>
  )
}
