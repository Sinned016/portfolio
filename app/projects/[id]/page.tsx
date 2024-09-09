import db from '@/lib/firebaseConfig'
import { ProjectsData } from '@/types/projectTypes'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { doc, getDoc } from 'firebase/firestore'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
      <section className='py-24'>
        <div className='container max-w-3xl'>
          <h2 className='title mb-12'>404 - Project Not Found</h2>
          <p>The project with ID {id} does not exist.</p>
        </div>
      </section>
    )
  }
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Link
          href='/projects'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to projects</span>
        </Link>

        <div className='relative mb-2 h-72 rounded-lg bg-muted sm:h-[380px]'>
          <Image
            className='rounded-lg object-cover object-center'
            src={project.image1}
            alt={project.name}
            fill
          ></Image>
        </div>

        <div className='mb-6'>
          <a
            className='link'
            href={`${project.linkToPage}`}
            target='_blank'
            rel='noopeneer noreferrer'
          >
            <span></span> {project.linkToPage}
          </a>
        </div>

        <div className='mb-12'>
          <h1 className='title mb-2'>{project.name}</h1>
          <p className='text-sm text-muted-foreground'>Dennis Bomberg</p>
        </div>

        {/* Description */}
        <div className='mb-12'>
          <p className='font-light'>{project.description}</p>
        </div>

        {/* Features */}
        <div className='mb-12'>
          <h3 className='mb-6 text-xl font-bold'>Features</h3>
          {project.features &&
            project.features.map((feature, i) => (
              <ul className='mb-4 ml-4 list-disc' key={i}>
                <li>
                  <span className='font-bold'>{feature.name}: </span>
                  <span className='font-light'>{feature.description}</span>
                </li>
              </ul>
            ))}
        </div>

        {/* Technologies */}
        <div className=''>
          <h3 className='mb-6 text-xl font-bold'>Technologies</h3>
          {project.techStack &&
            project.techStack.map((stack, i) => (
              <ul className='mb-4 ml-4 list-disc' key={i}>
                <li>
                  <span className='font-bold'>{stack.techName}: </span>
                  <span className='font-light'>{stack.techInfo}</span>
                </li>
              </ul>
            ))}
        </div>
      </div>
    </section>
  )
}
