'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import { ThemeToggle } from './theme-toggle'

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
]

export default function Header() {
  const pathname = usePathname()

  return (
    <motion.header
      className='fixed inset-x-0 top-4 z-50 px-4'
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className='mx-auto flex max-w-3xl items-center justify-between rounded-full border bg-card/60 py-1.5 pl-5 pr-1.5 shadow-sm shadow-foreground/5 backdrop-blur-md'>
        <Link
          href='/'
          className='font-serif text-xl font-bold transition-opacity hover:opacity-70'
        >
          DB
        </Link>

        <ul className='flex items-center text-sm'>
          {links.map(({ href, label }) => {
            const active = pathname.startsWith(href)
            return (
              <li key={href} className='relative'>
                <Link
                  href={href}
                  className={cn(
                    'relative z-10 block rounded-full px-3 py-1.5 transition-colors sm:px-4',
                    active
                      ? 'text-background'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {label}
                </Link>
                {active && (
                  <motion.span
                    layoutId='nav-pill'
                    className='absolute inset-0 rounded-full bg-foreground'
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        <ThemeToggle />
      </nav>
    </motion.header>
  )
}
