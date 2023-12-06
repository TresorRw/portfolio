import Container from "@/components/Container";
import { Card, CardHeader, CardBody, Link, Image } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

export default function WorkSection() {
  return (
    <Container>
      <div id="projects" className="md:px-28 md:py-20 lg:py-28 p-5">
        <h3 className="text-4xl font-bold mb-5">Things i&apos;ve built</h3>
        <div className="flex gap-4 flex-col pb-20 md:flex-row w-full items-center">
          <div className="md:w-2/4 p-4">
            <Link isExternal showAnchorIcon href="" className="text-xl font-semibold uppercase ">Issue Tracker App</Link>
            <p className="text-md mb-5 text-default-500">Issue tracking application built for teams</p>
            <p className="text-justify">An issue tracker is a web application used to manage and keep track of various tasks, bugs, feature requests, and other issues in a project or organization. It&apos;s a valuable tool for project management, software development, and other collaborative work environments.</p>
            <p className="my-2">This is what am currently working on, the demo will be live ASAP</p>
            <div className="footer-links my-5 space-x-5">
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/TresorRw/issue-tracker-app"
              >
                GitHub
              </Link>
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/nextui-org/nextui"
              >
                Live demo
              </Link>
            </div>
            <div className="my-5 flex flex-wrap gap-2">
              <Chip color="primary" variant="dot">NextJS</Chip>
              <Chip color="success" variant="dot">PostgreSQL</Chip>
              <Chip color="danger" variant="dot">Server Actions</Chip>
              <Chip color="primary" variant="dot">TypeScript</Chip>
              <Chip color="warning" variant="dot">PrismaORM</Chip>
              <Chip color="default" variant="dot">NextUI</Chip>
              <Chip variant="dot">+ others</Chip>
            </div>

          </div>
          <div className="md:w-2/4 p-4 flex justify-center lg:w-1/3">
            <Image
              isBlurred
              width={300}
              alt="NextUI Fruit Image with Zoom"
              fallbackSrc={'/profile.jpg'}
              src="/profile.jpg"
            />
          </div>
        </div>
        <div className="flex gap-4 flex-col pb-20 md:flex-row w-full items-center">
          <div className="md:w-2/4 p-4 flex justify-center lg:w-1/3 order-last lg:order-first">
            <Image
              isBlurred
              width={300}
              alt="NextUI Fruit Image with Zoom"
              fallbackSrc={'/profile.jpg'}
              src="/profile.jpg"
            />
          </div>
          <div className="md:w-2/4 p-4">
            <Link href="" isExternal showAnchorIcon className="text-xl font-semibold uppercase ">
              e-commerce
            </Link>
            <p className="text-md mb-5 text-default-500">Complete e-commerce web with many products</p>
            <p className="text-justify">A complete e-commerce platform that features user authentication and authorization, seller and buyer dashboard, payment integrations with ease of use</p>
            <p className="my-2">Used Role Based Access Control (RBAC) to ensure that a each user can perform an action based on the role where only the super admin can modify user roles.</p>

            <p className="text-warning">Demo may perform differently due to the end of the subsciptions of used tools and integrations.</p>
            <div className="footer-links my-5">
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/nextui-org/nextui"
              >
                Back-end (GitHub)
              </Link>
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/nextui-org/nextui"
              >
                Fronted-end (GitHub)
              </Link>
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/nextui-org/nextui"
              >
                Backend (Documentation)
              </Link>
            </div>
            <div className="my-5 flex flex-wrap gap-2">
              <Chip color="primary" variant="dot">ExpressJS</Chip>
              <Chip color="success" variant="dot">PostgreSQL</Chip>
              <Chip color="danger" variant="dot">Stripe</Chip>
              <Chip color="primary" variant="dot">TypeScript</Chip>
              <Chip color="warning" variant="dot">Mongoose</Chip>
              <Chip color="warning" variant="dot">Sockets</Chip>
              <Chip variant="dot">+ others</Chip>
            </div>
          </div>
        </div>
        <h4 className="text-xl font-semibold text-center pb-10">Featured Projects</h4>
        <div className="flex gap-4 flex-col flex-wrap md:flex-row">
          <Card className="w-full md:max-w-[380px] lg:1/4 bg-primary-100">
            <CardHeader>
              <h3 className="text-center font-bold text-lg uppercase">Home Security System</h3>
            </CardHeader>
            <CardBody>
              <ul className="list-inside list-disc">
                <li >
                  Designed and Implemented the API and management system for this project.
                </li>
                <li>
                  Built API for sharing data between software and sensors on home devices.
                </li>
                <li>
                  Designed, built and shipped management system for devices and their owners.
                </li>
              </ul>
            </CardBody>
          </Card>
          <Card className="w-full md:max-w-[380px] lg:1/4 bg-primary-100">
            <CardHeader>
              <h3 className="text-center font-bold text-lg uppercase">Home Security System</h3>
            </CardHeader>
            <CardBody>
              <ul className="list-inside list-disc">
                <li >
                  Designed and Implemented the API and management system for this project.
                </li>
                <li>
                  Built API for sharing data between software and sensors on home devices.
                </li>
                <li>
                  Designed, built and shipped management system for devices and their owners.
                </li>
              </ul>
            </CardBody>
          </Card>
          <Card className="w-full md:max-w-[380px] lg:1/4 bg-primary-100">
            <CardHeader>
              <h3 className="text-center font-bold text-lg uppercase">Home Security System</h3>
            </CardHeader>
            <CardBody>
              <ul className="list-inside list-disc">
                <li >
                  Designed and Implemented the API and management system for this project.
                </li>
                <li>
                  Built API for sharing data between software and sensors on home devices.
                </li>
                <li>
                  Designed, built and shipped management system for devices and their owners.
                </li>
              </ul>
            </CardBody>
          </Card>
          <Card className="w-full md:max-w-[380px] lg:1/4 bg-primary-100">
            <CardHeader>
              <h3 className="text-center font-bold text-lg uppercase">Home Security System</h3>
            </CardHeader>
            <CardBody>
              <ul className="list-inside list-disc">
                <li >
                  Designed and Implemented the API and management system for this project.
                </li>
                <li>
                  Built API for sharing data between software and sensors on home devices.
                </li>
                <li>
                  Designed, built and shipped management system for devices and their owners.
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>
    </Container>
  )
}
