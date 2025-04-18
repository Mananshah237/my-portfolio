'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import Image from 'next/image'

type FeaturedProjectProps = {
  title: string
  description: string
  image: string
  github: string
  demo?: string
}

export default function FeaturedProject({ title, description, image, github, demo }: FeaturedProjectProps) {
  return (
    <motion.section
      className="w-full py-20 flex flex-col lg:flex-row items-center justify-between gap-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="rounded-xl shadow-lg object-cover"
      />

      <div className="max-w-xl text-center lg:text-left">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground mb-6">{description}</p>

        <div className="flex justify-center lg:justify-start gap-4">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </Button>
          </a>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <Button>Live Demo</Button>
            </a>
          )}
        </div>
      </div>
    </motion.section>
  )
}
