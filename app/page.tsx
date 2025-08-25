'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Modern Contact Form
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Check out our enhanced contact form with floating labels and smooth animations.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                Try Contact Form
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105">
              <Link href="https://github.com" target="_blank">
                View Code
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span>Floating labels for better UX</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span>Smooth animations and transitions</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span>Responsive design</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span>Accessible form elements</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
