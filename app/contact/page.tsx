'use client'

import { ContactForm } from '@/components/contact-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg border-0 rounded-2xl overflow-hidden bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6 pt-8">
              <CardTitle className="text-3xl font-bold">Get in Touch</CardTitle>
              <CardDescription className="text-lg mt-2">
                Have a question or want to work together? Send us a message!
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <ContactForm />
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>We typically respond within 24 hours.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
