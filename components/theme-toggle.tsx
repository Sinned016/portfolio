'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Keep the space reserved so the nav doesn't shift once mounted
  if (!mounted) {
    return <div className='size-9' />
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <Button
      size='icon'
      variant='ghost'
      className='rounded-full'
      onClick={() => {
        setTheme(isDark ? 'light' : 'dark')
      }}
    >
      <AnimatePresence mode='wait' initial={false}>
        <motion.span
          key={isDark ? 'sun' : 'moon'}
          initial={{ rotate: -90, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? (
            <SunIcon className='size-4 text-orange-300' />
          ) : (
            <MoonIcon className='size-4 text-sky-950' />
          )}
        </motion.span>
      </AnimatePresence>

      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
