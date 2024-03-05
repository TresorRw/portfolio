import Container from "@/components/Container";
import { Image, Link } from "@nextui-org/react";

export default function CredentialsSection() {
  return (
    <Container>
      <div id="certificates" className="md:px-24 md:pt-16 p-5">
        <h1 className="text-3xl font-bold mb-5 text-success">Awards &amp; Certifications</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Image isZoomed src="/ATLP_Certificate.png" alt="Andela Technical Leadership Program Certificate" className="w-full object-cover h-64" />
            <figcaption>
              <Link isExternal href="/ATLP_Certificate.png" showAnchorIcon className="text-white">Andela Technical Leadership Program</Link>
            </figcaption>
          </div>
          <div>
            <Image isZoomed src="/dsa.png" alt="Data Structures and Algorithms Certificate" className="w-full object-cover h-64" />
            <figcaption>
              <Link isExternal href="/dsa.png" showAnchorIcon className="text-white">Data Structures and Algorithms</Link>
            </figcaption>
          </div>
          <div>
            <Image isZoomed src="/bn-apis.png" alt="Back End Developemnt and APIs Certificate" className="w-full object-cover h-64" />
            <figcaption>
              <Link isExternal href="/bn-apis.png" showAnchorIcon className="text-white">Back End Developemnt and APIs</Link>
            </figcaption>
          </div>
        </div>
      </div>
    </Container >
  )
}
