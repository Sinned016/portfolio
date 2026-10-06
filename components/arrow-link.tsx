import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export default function ArrowLink({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className='group inline-flex items-center gap-2 rounded-full border bg-card/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:border-foreground/30 hover:text-foreground'
    >
      {children}
      <ArrowRightIcon className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
    </Link>
  )
}
