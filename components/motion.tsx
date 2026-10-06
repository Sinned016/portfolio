'use client'

import { motion, type Variants } from 'framer-motion'

import { cn } from '@/lib/utils'

const ease = [0.22, 1, 0.36, 1] as const

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}

// Fades and slides content up the first time it scrolls into view
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } }
}

const item: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease } }
}

// Staggers its direct StaggerItem children in when scrolled into view
export function Stagger({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.ul
      className={className}
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.ul>
  )
}

export function StaggerItem({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.li className={cn(className)} variants={item}>
      {children}
    </motion.li>
  )
}
