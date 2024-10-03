import db from '@/config/firebaseConfig'
import { ProjectsData } from '@/types/projectTypes'
import { collection, getDocs } from 'firebase/firestore'
import React from 'react'
import HomeProjects from '@/components/homeProjects'
export const revalidate = 5

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

    console.log(projects)

    return projects
  } catch (err) {
    console.error(err)
    return []
  }
}

export default async function Projects() {
  const projects: ProjectsData[] = await getProjects()
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <h2 className='title mb-12'>Projects</h2>

        <HomeProjects projects={projects} />
      </div>
    </section>
  )
}
