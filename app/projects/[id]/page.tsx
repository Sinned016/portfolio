import ImageSlider from '@/components/imageSlider'
import db from '@/config/firebaseConfig'
import { ProjectsData } from '@/types/projectTypes'
import { ArrowLeftIcon, ArrowTopRightIcon } from '@radix-ui/react-icons'
import { doc, getDoc } from 'firebase/firestore'
import Link from 'next/link'
import React from 'react'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'

async function getProject(id: string): Promise<ProjectsData | null> {
  const docRef = doc(db, 'projects', id)

  try {
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data() as ProjectsData
    } else {
      console.log('No such document!')
      return null
    }
  } catch (err) {
    console.error(err)
    return null
  }
}

export default async function Project({ params }: { params: { id: string } }) {
  const { id } = params
  const project: ProjectsData | null = await getProject(id)

  if (!project) {
    return (
      <section className='pb-24 pt-32'>
        <div className='container max-w-3xl'>
          <h2 className='title mb-12'>404 - Project Not Found</h2>
          <p>The project with ID {id} does not exist.</p>
        </div>
      </section>
    )
  }
  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/projects'
          className='group mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1' />
          <span>Back to projects</span>
        </Link>

        <Reveal className='mb-10'>
          <h1 className='font-serif text-4xl font-bold tracking-tight sm:text-5xl'>
            {project.name}
          </h1>
          <div className='mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground'>
            <span>Dennis Blomberg</span>
            {project.linkToPage && (
              <a
                className='group inline-flex items-center gap-1 rounded-full border bg-card/60 px-3 py-1 text-foreground transition-colors hover:border-foreground/30'
                href={`${project.linkToPage}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {project.linkToPage}
                <ArrowTopRightIcon className='size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
              </a>
            )}
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className='mb-12 rounded-2xl border bg-card/60 p-2 shadow-xl shadow-foreground/5 [&>div]:mb-0'
        >
          <ImageSlider images={project.images} />
        </Reveal>

        {/* Description */}
        <Reveal className='mb-16'>
          <p className='text-lg font-light leading-relaxed text-muted-foreground'>
            {project.description}
          </p>
        </Reveal>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className='mb-16'>
            <Reveal>
              <h3 className='mb-6 font-serif text-2xl font-bold'>Features</h3>
            </Reveal>
            <Stagger className='grid gap-3 sm:grid-cols-2'>
              {project.features.map((feature, i) => (
                <StaggerItem
                  key={i}
                  className='rounded-xl border bg-card/60 p-5 backdrop-blur-sm transition-colors hover:border-foreground/30'
                >
                  <p className='mb-1 font-semibold'>{feature.name}</p>
                  <p className='text-sm font-light leading-relaxed text-muted-foreground'>
                    {feature.description}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        )}

        {/* Technologies */}
        {project.techStack && project.techStack.length > 0 && (
          <div>
            <Reveal>
              <h3 className='mb-6 font-serif text-2xl font-bold'>
                Technologies
              </h3>
            </Reveal>
            <Stagger className='divide-y border-y'>
              {project.techStack.map((stack, i) => (
                <StaggerItem
                  key={i}
                  className='grid gap-1 py-4 sm:grid-cols-[160px_1fr] sm:gap-6'
                >
                  <span className='font-mono text-sm'>{stack.techName}</span>
                  <span className='font-light text-muted-foreground'>
                    {stack.techInfo}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        )}
      </div>
    </section>
  )
}
