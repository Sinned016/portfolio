import db from '@/config/firebaseConfig'
import { ProjectsData } from '@/types/projectTypes'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import HomeProjects from './homeProjects'
import ArrowLink from './arrow-link'
import SectionHeading from './section-heading'

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

  return (
    <section>
      <div>
        <SectionHeading index='02'>Recent projects</SectionHeading>

        <HomeProjects projects={projects} limit={2} />

        <ArrowLink href='/projects'>All projects</ArrowLink>
      </div>
    </section>
  )
}
