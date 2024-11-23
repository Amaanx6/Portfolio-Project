'use client'

import Image from 'next/image'
import { motion } from "framer-motion"

interface SkillIconProps {
  name: string
  icon: string
}

export function SkillIcon({ name, icon }: SkillIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-2"
    >
      <div className="relative w-16 h-16 bg-[#002222] rounded-lg p-3 hover:bg-[#001818] transition-colors">
        <Image
          src={icon}
          alt={name}
          fill
          className="object-contain p-2"
        />
      </div>
      <span className="text-sm text-gray-300">{name}</span>
    </motion.div>
  )
}

