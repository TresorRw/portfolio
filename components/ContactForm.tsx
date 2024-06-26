'use client'
import { useState } from 'react';
import "@fillout/react/style.css";
import { FilloutPopupEmbed } from "@fillout/react";
import { Button, Link } from '@nextui-org/react';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex gap-4'>
      <Button color="success" variant="shadow" size="lg" onClick={() => setIsOpen(true)}>Send a message</Button>
      <Button as={Link} isExternal href="https://calendly.com/ca_tresor/discovery-call" color="warning" variant="ghost" size="lg">Schedule a call</Button>
      {isOpen && (
        <FilloutPopupEmbed
          filloutId="caqHqksdVcus"
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default ContactForm