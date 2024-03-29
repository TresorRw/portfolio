import Container from "@/components/Container";
import { Card, CardHeader, CardBody, Link, Image } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

export default function WorkSection() {
  return (
    <Container>
      <div id="projects" className="md:px-24 md:py-16 p-5">
        <h3 className="text-4xl text-success font-bold mb-5">Things I&apos;ve built</h3>
        <div className="flex flex-col pb-20 w-full items-center md:flex-row">
          <div className="md:w-full lg:w-2/3 p-4">
            <Link isExternal showAnchorIcon href="https://nextsjs-issue-tracker.vercel.app/" className="text-xl font-semibold uppercase text-success">Issue Tracker App</Link>
            <p className="text-md mb-5 text-default-500">Issue tracking application built for teams</p>
            <p className="text-justify text-slate-200 text-lg">An issue tracker is a web application used to manage and keep track of various tasks, bugs, feature requests, and other issues in a project or organization. It&apos;s a valuable tool for project management, software development, and other collaborative work environments.</p>
            <p className="my-3 text-slate-200 text-lg">This is what am currently working on, the demo will be live ASAP</p>
            <div className="footer-links my-5 space-x-5">
              <Link isExternal className="text-warning" showAnchorIcon href="https://github.com/TresorRw/issue-tracker-app">GitHub</Link>
              <Link isExternal className="text-warning" showAnchorIcon href="https://nextsjs-issue-tracker.vercel.app/">Live demo</Link>
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
          <div className="hidden lg:block lg:w-1/3 p-4 justify-center">
            <Image isZoomed alt="Issue tracker web application" src="/issue-tracker.png" />
          </div>
        </div>

        <div className="flex flex-col pb-20 w-full items-center md:flex-row">
          <div className="hidden lg:block lg:w-1/3 p-4 justify-center order-last lg:order-first">
            <Image
              isZoomed
              alt="e-commerce web app"
              src="/web-ecom.png"
            />
          </div>
          <div className="md:w-full lg:w-2/3 p-4">
            <Link href="https://e-comm-team-emma25-fe.netlify.app/" isExternal showAnchorIcon className="text-xl text-success font-semibold uppercase ">
              e-commerce
            </Link>
            <p className="text-md mb-5 text-default-500">Complete e-commerce web with many products</p>
            <p className="text-justify text-slate-200 text-lg">A complete e-commerce platform that features user authentication and authorization, seller and buyer dashboard, payment integrations with ease of use</p>
            <p className="my-2 text-slate-200 text-lg">Used Role Based Access Control (RBAC) to ensure that a each user can perform an action based on the role where only the super admin can modify user roles.</p>

            <p className="text-warning">Demo may perform differently due to the end of the subsciptions of used tools and integrations.</p>
            <div className="footer-links my-2">
              <Link
                isExternal
                className="text-success"
                showAnchorIcon
                href="https://github.com/atlp-rwanda/e-comm-team-emma25-bn"
              >
                Back-end (GitHub)
              </Link>
              <Link
                isExternal
                className="text-success"
                showAnchorIcon
                href="https://github.com/atlp-rwanda/e-comm-team-emma25-fe"
              >
                Front-end (GitHub)
              </Link>
              <Link
                isExternal
                className="text-success"
                showAnchorIcon
                href="https://e-comm-team-emma25-bn.onrender.com/docs/"
              >
                Docs
              </Link>
            </div>
            <div className="my-5 flex flex-wrap gap-2">
              <Chip color="primary" variant="dot">ExpressJS</Chip>
              <Chip color="primary" variant="dot">ReactJS</Chip>
              <Chip color="success" variant="dot">PostgreSQL</Chip>
              <Chip color="danger" variant="dot">Stripe</Chip>
              <Chip color="primary" variant="dot">TypeScript</Chip>
              <Chip color="warning" variant="dot">Mongoose</Chip>
              <Chip color="warning" variant="dot">Sockets</Chip>
              <Chip variant="dot">+ others</Chip>
            </div>
          </div>
        </div>
        <h4 className="text-2xl font-semibold pb-5 text-center text-success">Featured Projects</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="w-full md:max-w-[360px] bg-primary-100">
            <CardHeader>
              <h3 className="text-center font-bold text-lg text-success uppercase">Home Security System Narada</h3>
            </CardHeader>
            <CardBody>
              <ul className="list-inside list-disc text-lg text-slate-200">
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
          <Card className="w-full md:max-w-[360px] bg-primary-100">
            <CardHeader>
              <h3 className="text-center font-bold text-lg uppercase text-success">Maize Incubator</h3>
            </CardHeader>
            <CardBody>
              <ul className="list-inside list-disc text-slate-200 text-lg">
                <li>
                  Designed and Implemented the API for this project.
                </li>
                <li>
                  Designed and shipped the dashboard for better data visualization with use of charts.
                </li>
                <li>
                  Built API for sharing data between software and sensors mounted in the incubator.
                </li>
              </ul>
            </CardBody>
          </Card>
          <Card className="w-full md:max-w-[360px] bg-primary-100">
            <CardHeader>
              <h3 className="text-center font-bold text-lg uppercase text-success">Smart Parking System</h3>
            </CardHeader>
            <CardBody>
              <ul className="list-inside list-disc text-lg text-slate-200">
                <li>
                  Designed and Implemented the API for this project.
                </li>
                <li>
                  Web app for managing the parking slots, data visualizations and more.
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>
    </Container>
  )
}
