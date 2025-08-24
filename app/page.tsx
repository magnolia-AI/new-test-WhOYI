'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { ContactForm } from '@/components/contact-form'
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Palette, Smartphone } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"

export default function Portfolio() {
  const { toast } = useToast()
  const contactRef = useRef<HTMLDivElement>(null)

  const skills = [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Tailwind CSS', level: 90 },
  ]

  const projects = [
    {
      id: 1,
      title: 'Dashboard Analytics Platform',
      description: 'A comprehensive analytics dashboard with real-time data visualization and reporting features.',
      image: '/images/project1.jpg',
      tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      id: 2,
      title: 'Mobile Fitness App',
      description: 'A cross-platform mobile application for tracking workouts and nutrition with social features.',
      image: '/images/project2.jpg',
      tags: ['React Native', 'Firebase', 'Redux'],
      link: '#',
    },
    {
      id: 3,
      title: 'E-commerce Solution',
      description: 'A full-featured online store with payment integration and inventory management.',
      image: '/images/project3.jpg',
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
      link: '#',
    },
  ]

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDownloadResume = () => {
    toast({
      title: "Resume Download",
      description: "Your resume download would start here.",
    })
  }

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <Avatar className="w-48 h-48 md:w-64 md:h-64">
              <AvatarImage src="/images/profile.jpg" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              John <span className="text-primary">Doe</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mt-2">
              Senior Frontend Developer & UI/UX Designer
            </h2>
            <p className="mt-4 text-lg max-w-2xl">
              I create beautiful, functional, and user-centered digital experiences. 
              With over 5 years of experience in web development, I specialize in 
              building modern web applications with React and Next.js.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              <Button onClick={scrollToContact}>
                Contact Me
              </Button>
              <Button variant="outline" onClick={handleDownloadResume}>
                <Download className="mr-2 h-4 w-4" /> Resume
              </Button>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-card rounded-lg border">
            <Code className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-muted-foreground text-center">
              Building responsive and interactive user interfaces with modern JavaScript frameworks
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-card rounded-lg border">
            <Palette className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-muted-foreground text-center">
              Creating intuitive and visually appealing user experiences with design systems
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-card rounded-lg border">
            <Smartphone className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
            <p className="text-muted-foreground text-center">
              Developing cross-platform mobile applications with native-like performance
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="web">Web Apps</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" /> View Project
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="web" className="mt-8">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Web application projects would be shown here</p>
            </div>
          </TabsContent>
          <TabsContent value="mobile" className="mt-8">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Mobile application projects would be shown here</p>
            </div>
          </TabsContent>
          <TabsContent value="design" className="mt-8">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Design projects would be shown here</p>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <Separator className="my-8" />

      {/* Contact Section */}
      <section ref={contactRef} className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
            <div className="p-6 bg-card rounded-lg border">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">john.doe@example.com</p>
            </div>
            <div className="p-6 bg-card rounded-lg border">
              <Linkedin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-muted-foreground">linkedin.com/in/johndoe</p>
            </div>
            <div className="p-6 bg-card rounded-lg border">
              <Github className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-muted-foreground">github.com/johndoe</p>
            </div>
          </div>
          
          <Card>
            <CardContent className="p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

