import ArrowLink from './arrow-link'
import { Reveal } from './motion'
import SectionHeading from './section-heading'

export default function HomeAbout() {
  return (
    <section className='pb-32'>
      <SectionHeading index='01'>About me</SectionHeading>

      <Reveal delay={0.1}>
        <p className='mb-8 text-lg font-light leading-relaxed text-muted-foreground'>
          I am a collaborative 29-year-old who&#39;s currently working as a
          Fullstack developer for Dreamify. Prior to this role, I completed a
          intership and attended KYH vocational school, where I built a strong
          foundation in software development.
        </p>

        <ArrowLink href='/about'>More about me</ArrowLink>
      </Reveal>
    </section>
  )
}
