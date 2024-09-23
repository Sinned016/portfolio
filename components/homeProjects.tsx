import Image from 'next/image'
import React from 'react'
import { ProjectsData } from '@/types/projectTypes'
import Link from 'next/link'

type Projectsprops = {
  projects: ProjectsData[]
  limit?: number
}

export default function HomeProjects({ projects, limit }: Projectsprops) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects

  if (displayedProjects.length === 0) {
    return <div>No projects available.</div>
  }

  return (
    <ul className='mb-6 grid grid-cols-1 gap-8 sm:grid-cols-2'>
      {displayedProjects.map(project => (
        <li className='group relative' key={project.id}>
          <Link href={`/projects/${project.id}`}>
            <p>{project.name}</p>
            <div className='h-72 w-72 overflow-hidden rounded-lg bg-muted sm:h-60'>
              <Image
                className='rounded-lg object-cover object-center'
                src={project.image1}
                alt={project.name}
                fill
              ></Image>
            </div>

            <div className='absolute inset-[6px] rounded-lg bg-background/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

            <div className='absolute bottom-0 translate-y-2 px-6 py-5 opacity-0 duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
              <h2 className='title line-clamp-1 text-xl no-underline'>
                {project.name}
              </h2>
              <p className='line-clamp-2 text-sm text-muted-foreground'>
                {project.description}
              </p>
              {/* <p className='text-xs font-light text-muted-foreground'>
                {formatDate(project.publishedAt ?? '')}
              </p> */}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
