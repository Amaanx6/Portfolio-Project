'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    // Replace with your form submission logic
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isSubmitted ? (
        <div className="text-center p-8 bg-[#002222] rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Thank you for your message!</h3>
          <p className="text-gray-400">I&apos;ll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-[#002222] border-none focus:ring-yellow-300"
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-[#002222] border-none focus:ring-yellow-300"
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            required
            className="bg-[#002222] border-none focus:ring-yellow-300 min-h-[150px]"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-yellow-300 text-black hover:bg-yellow-400"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </motion.div>
  )
}

