'use client'

import Image from 'next/image'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  image: string
  description: string
  demoLink: string
  codeLink: string
}

export function ProjectCard({
  title,
  image,
  description,
  demoLink,
  codeLink
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden bg-[#002222] border-none">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex gap-4">
            <Button
              variant="default"
              className="bg-yellow-300 text-black hover:bg-yellow-400 flex-1"
              asChild
            >
              <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
            </Button>
            <Button
              variant="outline"
              className="border-yellow-300 text-yellow-300 hover:bg-yellow-300/10 flex-1"
              asChild
            >
              <a href={codeLink} target="_blank" rel="noopener noreferrer">Code</a>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

