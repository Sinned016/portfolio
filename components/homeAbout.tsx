import Link from 'next/link'
import React from 'react'

export default function HomeAbout() {
  return (
    <section className='pb-24'>
      <div className='mb-5'>
        <h2 className='title'>About me</h2>
        <p className='mt-3 font-light text-muted-foreground'>
          I am a collaborative 26-year-old who recently completed my education
          as a frontend developer. I attended a vocational school in Stockholm
          called KYH and am now highly motivated and ready to step into the
          professional world.
        </p>
      </div>

      <Link
        className='font-light text-muted-foreground underline'
        href='/about'
      >
        More about me
      </Link>
    </section>
  )
}
