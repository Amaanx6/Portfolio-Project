'use client'

import { motion } from "framer-motion"

interface TimelineItemProps {
title: string
  organization: string
  date: string
  description: string
}

export function TimelineItem({
  title,
  organization,
  date,
  description
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#002222] p-6 rounded-lg hover:bg-[#001818] transition-colors"
    >
      <h4 className="text-lg font-semibold text-yellow-300">{title}</h4>
      <p className="text-gray-300">{organization}</p>
      <p className="text-sm text-gray-400 mb-2">{date}</p>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

