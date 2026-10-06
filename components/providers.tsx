'use client'

import { MotionConfig } from 'framer-motion'
import { ThemeProvider } from 'next-themes'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
    >
      <MotionConfig reducedMotion='user'>{children}</MotionConfig>
    </ThemeProvider>
  )
}
