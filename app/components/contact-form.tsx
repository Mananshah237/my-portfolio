'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill out all fields.')
      return
    }

    setSubmitting(true)

    // Fake success feedback
    setTimeout(() => {
      toast.success('Message sent successfully!')
      setSubmitting(false)
      setForm({ name: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border px-4 py-2 text-sm bg-background border-muted focus:outline-none focus:ring focus:ring-primary"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border px-4 py-2 text-sm bg-background border-muted focus:outline-none focus:ring focus:ring-primary"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium">Message</label>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border px-4 py-2 text-sm bg-background border-muted focus:outline-none focus:ring focus:ring-primary"
          placeholder="Let's build something amazing..."
        />
      </div>
      <Button type="submit" disabled={submitting}>
        {submitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
