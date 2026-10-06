'use client'

import { useEffect } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring
} from 'framer-motion'

// Fixed decorative layer: drifting glows, a dot grid, a cursor spotlight and grain
export default function Background() {
  const x = useMotionValue(-1000)
  const y = useMotionValue(-1000)
  const sx = useSpring(x, { stiffness: 80, damping: 20 })
  const sy = useSpring(y, { stiffness: 80, damping: 20 })
  const spotlight = useMotionTemplate`radial-gradient(500px circle at ${sx}px ${sy}px, hsl(var(--glow) / 0.18), transparent 70%)`

  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])

  return (
    <div
      aria-hidden='true'
      className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'
    >
      <div className='dot-grid absolute inset-0' />

      <motion.div
        className='absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[hsl(var(--glow)/0.35)] blur-3xl'
        animate={{ x: [0, 120, 40, 0], y: [0, 60, 140, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className='absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-[hsl(var(--glow)/0.25)] blur-3xl'
        animate={{ x: [0, -100, -20, 0], y: [0, -80, 60, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className='absolute inset-0 hidden md:block'
        style={{ background: spotlight }}
      />

      <div className='grain absolute inset-0' />
    </div>
  )
}
