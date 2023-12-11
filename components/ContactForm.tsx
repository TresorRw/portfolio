'use client'
import { Button, Divider, Input, Textarea } from '@nextui-org/react';
import { AiOutlineSend } from 'react-icons/ai';

const classnames = {
  input: 'text-success font-semibold',
  label: 'text-primary-500 font-semibold'
}

const ContactForm = () => {
  return (
    <form className='space-y-4 mt-5 text-center'>
      <Divider />
      <Input type='email' name='email' classNames={classnames} color='primary' required label={'Your email'}/>
      <Textarea label="What is on your mind?" name='message' color='primary' required classNames={classnames} />
      <Button type='submit' size="lg" startContent={<AiOutlineSend />} variant="ghost" color='success'>Send my message</Button>
    </form>
  )
}

export default ContactForm