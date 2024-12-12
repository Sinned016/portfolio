import db from '@/config/firebaseConfig'
import { ProjectsData } from '@/types/projectTypes'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import Link from 'next/link'
import HomeProjects from './homeProjects'

export const revalidate = 5

// Function to fetch projects from Firebase
async function getProjects(): Promise<ProjectsData[]> {
  const docsRef = collection(db, 'projects')
  const q = query(docsRef, orderBy('createdAt', 'desc'))

  try {
    const querySnapshot = await getDocs(q)

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
export default async function RecentProjects() {
  const projects = await getProjects()

  console.log('hello')
  console.log(projects)

  return (
    <section>
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
