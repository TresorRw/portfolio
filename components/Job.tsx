import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from '@nextui-org/react'

export default function JobCard({ name, icon, role, url, content }: { icon: string, name: string, role: string, url: string | undefined, content: React.ReactNode }) {
  return (
    <Card>
      <CardHeader className='flex gap-3'>
        <Image
          alt={name}
          height={40}
          width={40}
          radius='sm'
          fallbackSrc="/next.svg"
          src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
        />
        <div className="flex flex-col">
          <p className="text-md">{name}</p>
          <p className="text-small text-default-500">{role}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        {content}
      </CardBody>
      <CardFooter>
        <Link isExternal showAnchorIcon href={url}>
          Company
        </Link>
      </CardFooter>
    </Card>
  );
}