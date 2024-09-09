import HomeAbout from '@/components/homeAbout'
import Intro from '@/components/intro'
import RecentProjects from '@/components/recentProjects'

export default async function Home() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />

        <HomeAbout />

        <RecentProjects />
      </div>
    </section>
  )
}
