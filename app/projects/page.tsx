import db from '@/config/firebaseConfig'
import { ProjectsData } from '@/types/projectTypes'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import React from 'react'
import HomeProjects from '@/components/homeProjects'
import SectionHeading from '@/components/section-heading'
export const revalidate = 60

async function getProjects(): Promise<ProjectsData[]> {
  const docsRef = collection(db, 'projects')
  const q = query(docsRef, orderBy('createdAt', 'desc'))

  try {
    const querySnapshot = await getDocs(q)
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

export default async function Projects() {
  const projects: ProjectsData[] = await getProjects()
  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <SectionHeading as='h1' index='Selected work'>
          Projects
        </SectionHeading>

        <HomeProjects projects={projects} />
      </div>
    </section>
  )
}
