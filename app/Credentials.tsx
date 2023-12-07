import Container from "@/components/Container";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function CredentialsSection() {
  return (
    <Container>
      <div id="certificates" className="md:px-28 md:py-20 lg:py-28 p-5">
        <h1 className="text-3xl font-bold mb-5 text-success">Awards &amp; Certifications</h1>
        <div className="flex gap-4 flex-col flex-wrap md:flex-row">
          <Card className="w-full md:max-w-[400px] lg:1/4 bg-primary-100">
            <CardHeader>
              <h3 className="text-center font-bold text-lg text-success">JavaScript Algorithms &amp; Data Structures</h3>
            </CardHeader>
            <CardBody>
              <Image isZoomed src="/dsa.png" alt="Cyusa's JavaScript Algorithms & Data Structures certificate" />
            </CardBody>
          </Card>
          <Card className="w-full md:max-w-[400px] lg:1/4 bg-primary-100">
            <CardHeader>
              <h3 className="text-center text-success font-bold text-lg">Back End Development &amp; APIs</h3>
            </CardHeader>
            <CardBody>
              <Image isZoomed alt="Cyusa's Back End Development and APIs certificate" src="/bn-apis.png" />
            </CardBody>
          </Card>
        </div>
      </div>
    </Container>
  )
}
