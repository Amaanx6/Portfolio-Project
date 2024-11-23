import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ProjectCard } from '@/components/project-card'
import { SkillIcon } from '@/components/skill-icon'
import { ContactForm } from '@/components/contact-form'
import { TimelineItem } from '@/components/timeline-item'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#003333] text-white">
      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center justify-center space-y-8 bg-[#002222] z-50">
        <Link href="#home" className="nav-link active" aria-label="Go to Home section">HOME</Link>
        <Link href="#about" className="nav-link" aria-label="Go to About section">ABOUT</Link>
        <Link href="#skills" className="nav-link" aria-label="Go to Skills section">SKILLS</Link>
        <Link href="#projects" className="nav-link" aria-label="Go to Projects section">PROJECTS</Link>
        <Link href="#contact" className="nav-link" aria-label="Go to Contact section">CONTACT</Link>
      </nav>

      {/* Main Content */}
      <main className="pl-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center p-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative w-48 h-48 mx-auto md:mx-0">
              <Image
                src="/placeholder.svg"
                alt="Profile"
                fill
                priority
                className="rounded-full border-4 border-yellow-300"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                I&apos;M A <span className="text-yellow-300">Web Developer</span>
                <br />FROM Hyderabad, India
              </h1>
              <p className="text-gray-300 mb-8 max-w-2xl">
                I&apos;m a passionate MERN stack developer, actively seeking opportunities to further enhance and explore my technical knowledge. My passion lies in the realm of web development, with a particular interest in innovative technologies.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="#projects" passHref>
                  <Button
                    variant="default"
                    className="bg-yellow-300 text-black hover:bg-yellow-400"
                    aria-label="Explore My Projects"
                  >
                    Explore My Projects
                  </Button>
                </Link>
                <Link href="/path-to-your-cv.pdf" passHref>
                  <Button
                    variant="outline"
                    className="border-yellow-300 text-yellow-300 hover:bg-yellow-300/10"
                    aria-label="Download CV"
                  >
                    Download CV
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Experience Section */}
        <section id="about" className="py-20 px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              My Education & Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">Education</h3>
                <TimelineItem
                  title="B.Tech Information Technology"
                  organization="Lords Institute of Engineering and Technology"
                  date="2023 - 2027"
                  description="CGPA: 8.5"
                />
                <TimelineItem
                  title="Full Stack Development Specialization Training"
                  organization="Internshala"
                  date="2022 - 2023"
                  description="Percentage: 95%"
                />
              </div>
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">Experience</h3>
                <TimelineItem
                  title="Full Stack Developer"
                  organization="Company Name"
                  date="2023 - Present"
                  description="Developing a cross-platform trading app using React, and working on an AI-powered assistant for the users."
                />
                <TimelineItem
                  title="Product Engineering Intern"
                  organization="Education Private Limited"
                  date="2021 - 2022"
                  description="Contributed to developing the platform's MOOC Portal, built classes and components using React.js."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-8 bg-[#002828]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              These are the skills I have
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              <SkillIcon name="HTML5" icon="/icons/html5.svg" />
              <SkillIcon name="CSS3" icon="/icons/css3.svg" />
              <SkillIcon name="JavaScript" icon="/icons/javascript.svg" />
              <SkillIcon name="React" icon="/icons/react.svg" />
              <SkillIcon name="Node.js" icon="/icons/nodejs.svg" />
              <SkillIcon name="MongoDB" icon="/icons/mongodb.svg" />
              <SkillIcon name="Git" icon="/icons/git.svg" />
              <SkillIcon name="TypeScript" icon="/icons/typescript.svg" />
              <SkillIcon name="Next.js" icon="/icons/nextjs.svg" />
              <SkillIcon name="Tailwind CSS" icon="/icons/tailwind.svg" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Here are some of my projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Jarvis AI"
                image="/placeholder.svg"
                description="A Python-based voice assistant that performs tasks like greeting users, fetching Wikipedia summaries, and opening applications based on voice commands."
                demoLink="#"
                codeLink="https://github.com/Amaanx6/jarvis-AI"
              />
              <ProjectCard
                title="Cosmic Weather Application"
                image="/placeholder.svg"
                description="An interactive weather application built with HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS that provides current weather data and a 5-day forecast, saving the last searched city in local storage."
                demoLink="https://cosmic-weather-app.vercel.app/"
                codeLink="https://github.com/Amaanx6/Cosmic-Weather-App"
              />
              <ProjectCard
                title="ZenMarket"
                image="/placeholder.svg"
                description="A modern e-commerce platform built with Flask, featuring product listings, a shopping cart, and user account management."
                demoLink="#"
                codeLink="#"
              />
              <ProjectCard
                title="FileSwift"
                image="/placeholder.svg"
                description="FileSwift is a versatile file management tool designed to handle a wide range of PDF and image operations. It allows users to view, edit, convert, merge, and compress files with ease."
                demoLink="https://file-swift.vercel.app/"
                codeLink="https://github.com/Amaanx6/FileSwift"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-8 bg-[#002828]">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Submit the form below to connect with me
            </h2>
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-8 text-center bg-[#002222]">
          <p className="text-sm text-gray-400">
            Made by Md Mubashiruddin
            <br />
            © 2024
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="https://github.com/Amaanx6" className="text-gray-400 hover:text-yellow-300">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/md-mubashiruddin/" className="text-gray-400 hover:text-yellow-300">
              LinkedIn
            </Link>
            <Link href="https://x.com/amaanx_6" className="text-gray-400 hover:text-yellow-300">
              Twitter
            </Link>
          </div>
        </footer>
      </main>
    </div>
  )
}

