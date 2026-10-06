import React from 'react'
import {
  ArrowTopRightIcon,
  EnvelopeClosedIcon,
  MobileIcon
} from '@radix-ui/react-icons'

import { Reveal } from '@/components/motion'
import SectionHeading from '@/components/section-heading'

const channels = [
  {
    label: 'Mail',
    value: '97sinned@gmail.com',
    href: 'mailto:97sinned@gmail.com',
    icon: EnvelopeClosedIcon
  },
  {
    label: 'Phone Number',
    value: '+46 722 514 194',
    href: 'tel:+46722514194',
    icon: MobileIcon
  }
]

export default function Contact() {
  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <SectionHeading as='h1' index='Say hello'>
          Contact Page
        </SectionHeading>

        <Reveal delay={0.05}>
          <p className='mb-10 inline-flex rounded-full border border-dashed px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground'>
            Work in progress.
          </p>
        </Reveal>

        <div className='grid gap-4 sm:grid-cols-2'>
          {channels.map(({ label, value, href, icon: Icon }, i) => (
            <Reveal key={label} delay={0.1 + i * 0.1}>
              <a
                href={href}
                className='group relative flex flex-col gap-6 overflow-hidden rounded-2xl border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-xl hover:shadow-foreground/5'
              >
                <div className='flex items-center justify-between'>
                  <span className='flex size-10 items-center justify-center rounded-full border bg-background'>
                    <Icon className='size-4' />
                  </span>
                  <ArrowTopRightIcon className='size-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground' />
                </div>
                <div>
                  <p className='mb-1 font-mono text-xs uppercase tracking-widest text-muted-foreground'>
                    {label}
                  </p>
                  <p className='font-serif text-xl font-bold'>{value}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
