'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import formSchema from '@/lib/validation/validator'
import axios from 'axios'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    console.log('Form Data:', data)
    try {
      const res = await axios.post('/api/contact', data)
      console.log(res)
    } catch (error) {
      console.log(error, 'Data send error')
    }
  }

  return (
    <Card className="max-w-md mx-auto mt-10 border-none ">
      <CardHeader className=" text-center text-2xl ">
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label className="py-1">Name</Label>
            <Input {...register('name')} placeholder="Enter your name" />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label className="py-1">Email</Label>
            <Input
              type="email"
              {...register('email')}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label className="py-1">Phone</Label>
            <Input
              type="tel"
              {...register('phone')}
              placeholder="Enter your phone"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <Label className="py-1">Message</Label>
            <Textarea
              {...register('message')}
              placeholder="Write your message here"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-500 cursor-pointer hover:bg-blue-700  "
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
