'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

export function ContactForm() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <div className="relative">
          <input
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=" "
            required
            className="peer w-full rounded-md border border-input bg-transparent px-3 py-3 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
          <label 
            htmlFor="name" 
            className="absolute left-3 top-3 cursor-text text-muted-foreground transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary"
          >
            Name
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <div className="relative">
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            required
            className="peer w-full rounded-md border border-input bg-transparent px-3 py-3 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
          <label 
            htmlFor="email" 
            className="absolute left-3 top-3 cursor-text text-muted-foreground transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary"
          >
            Email
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <div className="relative">
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder=" "
            rows={5}
            required
            className="peer w-full rounded-md border border-input bg-transparent px-3 py-3 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
          <label 
            htmlFor="message" 
            className="absolute left-3 top-3 cursor-text text-muted-foreground transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary"
          >
            Message
          </label>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" 
        disabled={isLoading}
        size="lg"
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
            Sending...
          </span>
        ) : "Send Message"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        We'll respond to your message as soon as possible.
      </p>
    </form>
  )
} 
