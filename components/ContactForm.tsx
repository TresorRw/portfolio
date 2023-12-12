'use client'
import { Contact } from '@/interfaces';
import { Button, Divider, Input, Spinner, Textarea } from '@nextui-org/react';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiOutlineSend } from 'react-icons/ai';

const classnames = {
  input: 'text-success font-semibold',
  label: 'text-primary-500 font-semibold'
}

const ContactForm = () => {
  const [loading, setIsLoading] = useState(false);
  const { register, formState: { errors }, reset, handleSubmit } = useForm<Contact>();
  const submitMessage = async (data: Contact) => {
    setIsLoading(true);
    toast.loading('Sending your email...');
    const res = await axios.post('/api/send-email', data);
    toast.remove()
    if (res.data.success) {
      toast.success(res.data.message)
      reset()
    } else {
      toast.error(res.data.message)
    }
    setIsLoading(false)
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
      {errors.email && <p className="text-danger">{errors.email.message}</p>}
      <Textarea
        label="What is on your mind?"
        {...register('message',
          { required: { value: true, message: 'Provide your message please' } }
        )} color='primary' required classNames={classnames}
      />
      {errors.message && <p className="text-danger">{errors.message.message}</p>}

      <Button type='submit' aria-disabled={loading} size="lg" startContent={<AiOutlineSend />} variant="ghost" color='success'>{loading ? <Spinner /> : 'Send my message'}</Button>
    </form>
  )
}

export default ContactForm