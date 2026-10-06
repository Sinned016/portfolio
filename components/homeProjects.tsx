import React from 'react'
import { ProjectsData } from '@/types/projectTypes'
import Link from 'next/link'
import ProjectImage from './projectImage'
import { Reveal } from './motion'

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
    <ul className='mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2'>
      {displayedProjects.map((project, i) => (
        <li className='group relative' key={project.id}>
          <Reveal delay={(i % 2) * 0.12}>
            <Link href={`/projects/${project.id}`}>
              <p className='mb-3 flex items-baseline gap-3'>
                <span className='font-mono text-xs text-muted-foreground'>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {project.name}
              </p>

              {/* ONLY this is the "card zone" */}
              <div className='relative h-72 overflow-hidden rounded-lg ring-1 ring-border sm:h-60'>
                <ProjectImage
                  src={project.images?.[0] ?? project.image1}
                  alt={project.name}
                />

                {/* your overlay stays EXACTLY the same */}
                <div className='absolute inset-[6px] rounded-lg bg-background/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

                <div className='absolute bottom-0 translate-y-2 px-6 py-5 opacity-0 duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
                  <h2 className='title line-clamp-1 text-xl no-underline'>
                    {project.name}
                  </h2>
                  <p className='line-clamp-2 text-sm text-muted-foreground'>
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}
