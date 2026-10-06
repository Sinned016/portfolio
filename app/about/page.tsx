import Image from 'next/image'
import React from 'react'
import authorImage from '@/public/images/authors/Dennis_blomberg1.jpg'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'
import SectionHeading from '@/components/section-heading'

const skills = [
  'Swedish & English',
  'HTML & CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Mongoose',
  'Firebase',
  'GraphQL',
  'Git',
  'MUI',
  'Tailwind',
  'Shopify',
  'Framer Motion',
  'Payload CMS',
  'Figma',
  'Agile methodologies'
]

function Block({
  label,
  children
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <Reveal className='grid gap-3 border-t py-10 md:grid-cols-[180px_1fr] md:gap-10'>
      <h3 className='font-serif text-xl font-bold'>{label}</h3>
      <div className='font-light leading-relaxed text-muted-foreground [&>p+p]:mt-4'>
        {children}
      </div>
    </Reveal>
  )
}

export default function About() {
  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <div className='mb-16'>
          <Reveal className='float-right mb-4 ml-6 hidden sm:block'>
            <div className='rotate-3 rounded-2xl border bg-card p-2 shadow-xl shadow-foreground/10 transition-transform duration-500 hover:rotate-0'>
              <Image
                className='rounded-xl'
                src={authorImage}
                alt='Dennis Blomberg'
                width={175}
                height={175}
                priority
              />
            </div>
          </Reveal>
          <SectionHeading as='h1' index='About'>
            About me
          </SectionHeading>
          <Reveal delay={0.1}>
            <p className='text-lg font-light leading-relaxed text-muted-foreground'>
              I&#39;m a fullstack developer from Sweden who builds web
              applications and APIs, with expertise in React, TypeScript, and
              various other technologies. I’m eager to apply my skills in a
              collaborative environment and contribute to impactful projects.
            </p>
          </Reveal>
        </div>

        <Reveal className='clear-both mb-6'>
          <h3 className='mb-5 font-serif text-xl font-bold'>Skills</h3>
        </Reveal>
        <Stagger className='mb-16 flex flex-wrap gap-2'>
          {skills.map(skill => (
            <StaggerItem
              key={skill}
              className='cursor-default rounded-full border bg-card/60 px-3.5 py-1.5 text-sm backdrop-blur-sm transition-colors hover:border-foreground/40 hover:bg-foreground hover:text-background'
            >
              {skill}
            </StaggerItem>
          ))}
        </Stagger>

        <Block label='Current Time'>
          <p>
            I currently work as a freelancer for Dreamify, where I previously
            completed a year-long internship. In my role as a Fullstack
            Developer, I work on both the frontend and backend development.
            Since we collaborate with a variety of clients, my tasks tend to be
            very different. I&#39;ve developed multiple types of applications,
            including desktop and mobile apps for both iOS and Android, often
            using different technology stacks depending on the project. While
            adapting to new stacks can be challenging, it has accelerated my
            learning and broadened my expertise. Throughout this time, I&#39;ve
            gained experience working with a wide range of clients, which has
            strengthened my versatility and problem-solving skills.
          </p>
        </Block>

        <Block label='Internship'>
          <p>
            Both during and after school, I pursued internships to gain easier
            access to the industry. These experiences were highly educational
            and rewarding, giving me the opportunity to apply my knowledge in
            real work environments and tackle new challenges, which I
            successfully overcame and received praise for from my supervisors.
            During this time, I strengthened my frontend development skills and
            worked extensively with a wide range of tools, including Next.js,
            React, and Express.js, among others. I contributed to both frontend
            and API backend development, which has greatly increased my
            confidence in my abilities.
          </p>
        </Block>

        <Block label='School'>
          <p>
            During my education, I focused on frontend development with a
            particular emphasis on React. I completed courses such as “Developer
            methology 1 and 2,” “HTML and CSS,” “JavaScript 1-3,” “UX and
            Graphic Tools,” “Backend Development,” “TypeScript,” and a
            comprehensive frontend project where I applied all these skills. I
            achieved high grades in all courses, reflecting my understanding and
            competence.
          </p>

          <p>
            A significant part of my education also included backend
            development, where I worked extensively with Node.js and Express.js
            in all final projects. This combination of frontend and backend
            knowledge makes me well-prepared to collaborate effectively with
            various team members.
          </p>
        </Block>

        <Block label='Personal Qualities'>
          <p>
            As a person, I am calm, patient, and positive. In a group, I may
            sometimes stay in the background, but I always present my ideas and
            collaborate well with others. I believe it&#39;s important for
            everyone to have a voice and contribute ideas. I am often told that
            I am reliable and fair. My interests include computers, video games,
            working out, listening to music, and riding my longboard. I used to
            play handball and practice martial arts, but now I mostly go to the
            gym. Besides this, I also program in my free time and work on
            personal projects.
          </p>

          <p>
            Thanks to my experience with team sports, I understand what it means
            to be a good teammate. I know the importance of collaboration,
            communication, and supporting my team members to achieve common
            goals.
          </p>

          <p>
            I am looking for a position where I can continue to develop my
            skills in collaboration with you while you can benefit from my
            expertise.
          </p>
        </Block>
      </div>
    </section>
  )
}
