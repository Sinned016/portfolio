import Link from 'next/link'
import React from 'react'

export default function HomeAbout() {
  return (
    <section className='pb-24'>
      <div className='mb-5'>
        <h2 className='title'>About me</h2>
        <p className='mt-3 font-light text-muted-foreground'>
          I am a collaborative 28-year-old who&#39;s currently working as a
          Fullstack developer for Dreamify. Prior to this role, I completed a
          intership and attended KYH vocational school, where I built a strong
          foundation in software development.
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
