import { cn } from '@/lib/utils'
import { Reveal } from './motion'

type SectionHeadingProps = {
  index?: string
  children: React.ReactNode
  as?: 'h1' | 'h2'
  className?: string
}

// Serif title with a small numbered eyebrow and a hairline rule
export default function SectionHeading({
  index,
  children,
  as: Tag = 'h2',
  className
}: SectionHeadingProps) {
  return (
    <Reveal className={cn('mb-10', className)}>
      <div className='mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground'>
        {index && <span>{index}</span>}
        <span className='h-px flex-1 bg-gradient-to-r from-border to-transparent' />
      </div>
      <Tag className='title'>{children}</Tag>
    </Reveal>
  )
}
