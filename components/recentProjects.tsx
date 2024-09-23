'use client'
import { useEffect, useState } from 'react'
import db from '@/config/firebaseConfig'
import { ProjectsData } from '@/types/projectTypes'
import { collection, getDocs } from 'firebase/firestore'
import Link from 'next/link'
import HomeProjects from './homeProjects'

// Function to fetch projects from Firebase
async function getProjects(): Promise<ProjectsData[]> {
  const docsRef = collection(db, 'projects')

  try {
    const querySnapshot = await getDocs(docsRef)
    const projects: ProjectsData[] = querySnapshot.docs.map(doc => {
      const data = doc.data() as Omit<ProjectsData, 'id'>
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

// Main component
export default function RecentProjects() {
  const [projects, setProjects] = useState<ProjectsData[]>([]) // State to hold projects
  const [loading, setLoading] = useState<boolean>(true) // Loading state

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getProjects()
      setProjects(projectsData)
      setLoading(false) // Set loading to false after fetching
    }

    fetchProjects()
  }, []) // Empty dependency array to run once on mount

  return (
    <section>
      <div>
        <h2 className='title mb-12'>Recent projects</h2>
        {loading ? (
          <div className='mb-4'>Loading...</div>
        ) : (
          <HomeProjects projects={projects} limit={2} />
        )}

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
