import db from '@/config/firebaseConfig'
import { ProjectsData } from '@/types/projectTypes'
import { collection, getDocs } from 'firebase/firestore'
import Link from 'next/link'
import React from 'react'
import HomeProjects from './homeProjects'

async function getProjects(): Promise<ProjectsData[]> {
  const docsRef = collection(db, 'projects')

  try {
    const querySnapshot = await getDocs(docsRef)
    const projects: ProjectsData[] = querySnapshot.docs.map(doc => {
      const data = doc.data() as Omit<ProjectsData, 'id'> // Ensure id is not in data
      return {
        id: doc.id,
        ...data
      }
    })

    return projects
  } catch (err) {
    console.error(err)
    return []
  }
}

export default async function RecentProjects() {
  const projects: ProjectsData[] = await getProjects()
  return (
    <section className=''>
      <div>
        <h2 className='title mb-12'>Recent projects</h2>

        <HomeProjects projects={projects} limit={2} />

        <Link
          className='font-light text-muted-foreground underline'
          href='/projects'
        >
          All projects
        </Link>
      </div>
    </section>
  )
}
