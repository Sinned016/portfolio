'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import authorImage from '@/public/images/authors/Dennis_blomberg1.jpg'

const ease = [0.22, 1, 0.36, 1] as const

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
}

const word: Variants = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.8, ease } }
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
}

const headline = ['Hey,', 'I’m', 'Dennis.']

export default function Intro() {
  return (
    <motion.section
      className='flex flex-col-reverse items-start gap-x-12 gap-y-8 pb-32 md:flex-row md:items-center'
      variants={container}
      initial='hidden'
      animate='show'
    >
      <div className='flex-1'>
        <motion.p
          variants={fadeUp}
          className='mb-5 inline-flex items-center gap-2 rounded-full border bg-card/50 px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground backdrop-blur-sm'
        >
          <span className='relative flex size-2'>
            <span className='absolute inline-flex size-full animate-ping rounded-full bg-foreground/40' />
            <span className='relative inline-flex size-2 rounded-full bg-foreground' />
          </span>
          Fullstack developer · Sweden
        </motion.p>

        <h1 className='font-serif text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl'>
          {headline.map((w, i) => (
            <span
              key={i}
              className='mr-[0.25em] inline-block overflow-hidden pb-1 align-bottom'
            >
              <motion.span variants={word} className='inline-block'>
                {i === headline.length - 1 ? (
                  <span className='italic'>{w}</span>
                ) : (
                  w
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          variants={fadeUp}
          className='mt-6 max-w-lg text-lg font-light leading-relaxed text-muted-foreground'
        >
          I&#39;m a fullstack developer from Sweden who builds web applications
          and APIs, with expertise in React, TypeScript, and various other
          technologies. I’m eager to apply my skills in a collaborative
          environment and contribute to impactful projects.
        </motion.p>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.9, rotate: -8 },
          show: {
            opacity: 1,
            scale: 1,
            rotate: 3,
            transition: { duration: 1, ease }
          }
        }}
        whileHover={{ rotate: 0, scale: 1.04 }}
        className='relative'
      >
        <div className='absolute -inset-3 -z-10 rounded-3xl bg-[hsl(var(--glow)/0.5)] blur-2xl' />
        <div className='rounded-2xl border bg-card p-2 shadow-xl shadow-foreground/10'>
          <Image
            className='rounded-xl'
            src={authorImage}
            alt='Dennis Blomberg'
            width={175}
            height={175}
            priority
          />
        </div>
      </motion.div>
    </motion.section>
  )
}
