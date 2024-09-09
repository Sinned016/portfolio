import Image from 'next/image'
import authorImage from '@/public/images/authors/Dennis_blomberg1.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Dennis.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a frontend developer from Sweden with expertise in React,
          TypeScript, and various other technologies. I’m eager to apply my
          skills in a collaborative environment and contribute to impactful
          projects.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg'
          src={authorImage}
          alt='Dennis Blomberg'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
