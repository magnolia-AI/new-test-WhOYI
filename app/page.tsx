'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { ContactForm } from '@/components/contact-form'
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Palette, Smartphone } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import { useInViewAnimation } from '@/hooks/use-animation'

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
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Avatar className="w-48 h-48 md:w-64 md:h-64">
                <AvatarImage src="/images/profile.jpg" alt="Profile" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </motion.div>
          </motion.div>
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              John <span className="text-primary">Doe</span>
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl text-muted-foreground mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Senior Frontend Developer & UI/UX Designer
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              I create beautiful, functional, and user-centered digital experiences. 
              With over 5 years of experience in web development, I specialize in 
              building modern web applications with React and Next.js.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center md:justify-start gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button onClick={scrollToContact}>
                  Contact Me
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" onClick={handleDownloadResume}>
                  <Download className="mr-2 h-4 w-4" /> Resume
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex justify-center md:justify-start gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <Separator className="my-8" />

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delayChildren: 0.2, staggerChildren: 0.1 }}
        >
          <motion.div 
            className="flex flex-col items-center p-6 bg-card rounded-lg border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Code className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-muted-foreground text-center">
              Building responsive and interactive user interfaces with modern JavaScript frameworks
            </p>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center p-6 bg-card rounded-lg border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Palette className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-muted-foreground text-center">
              Creating intuitive and visually appealing user experiences with design systems
            </p>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center p-6 bg-card rounded-lg border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Smartphone className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
            <p className="text-muted-foreground text-center">
              Developing cross-platform mobile applications with native-like performance
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3 
            className="text-2xl font-semibold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delayChildren: 0.2, staggerChildren: 0.1 }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                  <motion.div 
                    className="bg-primary h-2.5 rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 1, 
                      delay: 0.5 + index * 0.1,
                      ease: "easeOut"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <Separator className="my-8" />

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="web">Web Apps</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-8">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delayChildren: 0.2, staggerChildren: 0.1 }}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="overflow-hidden h-full">
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
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          <TabsContent value="web" className="mt-8">
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground">Web application projects would be shown here</p>
            </motion.div>
          </TabsContent>
          <TabsContent value="mobile" className="mt-8">
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground">Mobile application projects would be shown here</p>
            </motion.div>
          </TabsContent>
          <TabsContent value="design" className="mt-8">
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground">Design projects would be shown here</p>
            </motion.div>
          </TabsContent>
        </Tabs>
      </section>

      <Separator className="my-8" />

      {/* Contact Section */}
      <section ref={contactRef} className="container mx-auto px-4 py-16">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delayChildren: 0.2, staggerChildren: 0.1 }}
          >
            <motion.div 
              className="p-6 bg-card rounded-lg border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">john.doe@example.com</p>
            </motion.div>
            <motion.div 
              className="p-6 bg-card rounded-lg border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Linkedin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-muted-foreground">linkedin.com/in/johndoe</p>
            </motion.div>
            <motion.div 
              className="p-6 bg-card rounded-lg border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Github className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-muted-foreground">github.com/johndoe</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardContent className="p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
 









