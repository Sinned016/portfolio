import HomeAbout from '@/components/homeAbout'
import Intro from '@/components/intro'
import RecentProjects from '@/components/recentProjects'
export const revalidate = 60

export default async function Home() {
  return (
    <section className='pb-24 pt-36'>
      <div className='container max-w-3xl'>
        <Intro />

        <HomeAbout />

        <RecentProjects />
      </div>
    </section>
  )
}
