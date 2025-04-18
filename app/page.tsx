import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import EducationSection from "./components/education-section"
import ExperienceSection from "./components/experience-section"
import Hero from "./components/Hero"
import FeaturedProject from "./components/FeaturedProject"
import SectionFadeIn from './components/SectionFadeIn'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Manan.dev</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">About</Link>
              <Link href="#education" className="transition-colors hover:text-foreground/80">Education</Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">Experience</Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">Projects</Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">Contact</Link>
            </nav>
          </div>
          <Link href="/resume.pdf" target="_blank">
            <Button variant="outline" className="ml-auto">Resume</Button>
          </Link>
        </div>
      </header>

      <Hero />

      <main className="container px-4 md:px-6">
        <FeaturedProject
          title="Distributed Rate Limiter"
          description="C++17 system to control API traffic across AWS-hosted microservices, using Redis for real-time quota tracking."
          image="/project-preview3.jpeg"
          github="https://github.com/Mananshah237/Distributed-Rate-Limiter"
        />

        <FeaturedProject
          title="Real-Time Log Aggregator"
          description="Built a C++17 app to aggregate logs from distributed nodes into AWS S3, processing 1M+ entries daily with Kafka streaming."
          image="/project-preview2.png"
          github="https://github.com/Mananshah237/Real-Time-Log-Aggregator"
        />

        <FeaturedProject
          title="Arti Designer Studio"
          description="Design portfolio and client collaboration tool built with Next.js and shadcn/ui, deployed on Vercel."
          image="/project-preview1.jpg"
          github="https://github.com/Mananshah237/arti-designer-studio"
        />

        <FeaturedProject
          title="HPC Container Scanner"
          description="Python-based tool to collect and verify container images from Docker Hub, Quay.io, and Singularity Library for HPC domains."
          image="/project-preview4.jpg"
          github="https://github.com/Mananshah237/scientific-container-verifier"
        />

        <FeaturedProject
          title="Service Request System"
          description="AI-powered Android app using Docker and NLP APIs to auto-schedule and process service requests — pitched to Uber."
          image="/project-preview5.png"
          github="https://github.com/Mananshah237"
        />

        <div className="h-12" />

        <SectionFadeIn>
          <section id="education" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Education</h2>
              <EducationSection />
            </div>
          </section>
        </SectionFadeIn>

        <SectionFadeIn>
          <section id="experience" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Experience</h2>
              <ExperienceSection />
            </div>
          </section>
        </SectionFadeIn>

        <SectionFadeIn>
          <section className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Tech Stack</h2>
              <TechStack />
            </div>
          </section>
        </SectionFadeIn>

        <SectionFadeIn>
          <section id="contact" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Get in Touch</h2>
                <ContactForm />
              </div>
            </div>
          </section>
        </SectionFadeIn>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Manan Shah. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">Terms of Service</Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">Privacy</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
