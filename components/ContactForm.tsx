'use client'
import { Button, Divider, Input, Textarea } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { AiOutlineSend } from 'react-icons/ai';

const classnames = {
  input: 'text-success font-semibold',
  label: 'text-primary-500 font-semibold'
}
interface formData {
  names: string,
  email: string,
  message: string
}

const ContactForm = () => {
  const { register, formState: { errors }, reset, handleSubmit } = useForm<formData>();
  const submitMessage = (data: formData) => {
    console.log(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(submitMessage)} className='mt-5 space-y-2'>
      <Divider />
      <Input
        type='text' {...register('names', { required: true })}
        classNames={classnames} color='primary'
        required
        label={'Your Names'}
      />
      {errors.names && <p className="text-danger">Your names are required</p>}
      <Input
        type='email'
        {...register('email', {
          required: 'A valid email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Please provide a valid email address'
          }
        })}
        classNames={classnames}
        color='primary'
        required
        label={'Your email'}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <Textarea label="What is on your mind?" {...register('message', { required: { value: true, message: 'Provide your message please' } })} color='primary' required classNames={classnames} />
      {errors.message && <p>{errors.message.message}</p>}
      <Button type='submit' size="lg" startContent={<AiOutlineSend />} variant="ghost" color='success'>Send my message</Button>
    </form>
  )
}

export default ContactForm