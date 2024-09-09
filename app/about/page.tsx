import Image from 'next/image'
import React from 'react'
import authorImage from '@/public/images/authors/Dennis_blomberg1.jpg'

export default function About() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <div className='mb-12'>
          <div className='float-right ml-4 hidden sm:block'>
            <Image
              className='flex-1 rounded-lg'
              src={authorImage}
              alt='Dennis Blomberg'
              width={175}
              height={175}
              priority
            />
          </div>
          <h1 className='title mb-6'>About me</h1>
          <p className='font-light'>
            I am a collaborative 26-year-old who recently completed my education
            as a frontend developer. I attended a vocational school called KYH
            and am now highly motivated and ready to step into the professional
            world.
          </p>
        </div>

        <div className='mb-12'>
          <h3 className='mb-2 text-xl font-bold'>Skills</h3>
          <li className='font-light'>Swedish & English</li>
          <li className='font-light'>HTML & CSS</li>
          <li className='font-light'>JavaScript</li>
          <li className='font-light'>TypeScript</li>
          <li className='font-light'>React</li>
          <li className='font-light'>Next.js</li>
          <li className='font-light'>Node.js</li>
          <li className='font-light'>MongoDB</li>
          <li className='font-light'>Firebase</li>
          <li className='font-light'>Git</li>
          <li className='font-light'>MUI</li>
          <li className='font-light'>Tailwind CSS</li>
          <li className='font-light'>Figma</li>
          <li className='font-light'>Agile methodologies</li>
        </div>

        <div className='mb-12'>
          <h3 className='mb-2 text-xl font-bold'>School</h3>
          <p className='mb-4 font-light'>
            During my education, I focused on frontend development with a
            particular emphasis on React. I completed courses such as “Developer
            methology 1 and 2,” “HTML and CSS,” “JavaScript 1-3,” “UX and
            Graphic Tools,” “Backend Development,” “TypeScript,” and a
            comprehensive frontend project where I applied all these skills. I
            achieved high grades in all courses, reflecting my understanding and
            competence.
          </p>

          <p className='font-light'>
            A significant part of my education also included backend
            development, where I worked extensively with Node.js and Express.js
            in all final projects. This combination of frontend and backend
            knowledge makes me well-prepared to collaborate effectively with
            various team members.
          </p>
        </div>

        <div className='mb-12'>
          <h3 className='mb-2 text-xl font-bold'>Internship</h3>
          <p className='font-light'>
            My internship was an especially educational and rewarding
            experience. I had the opportunity to apply my knowledge in a real
            work environment and encountered several new challenges, which I
            managed successfully, receiving much praise from my supervisor.
            During this time, I strengthened my frontend development skills and
            worked intensively with React and TypeScript, which has made me much
            more confident in my abilities.
          </p>
        </div>

        <div className='mb-12'>
          <h3 className='mb-2 text-xl font-bold'>Current Time</h3>
          <p className='mb-4 font-light'>
            Write about what ive done after school, what i&#39;ve studied etc..
          </p>
        </div>

        <div className=''>
          <h3 className='mb-2 text-xl font-bold'>Personal Qualities</h3>
          <p className='mb-4 font-light'>
            As a person, I am calm, patient, and positive. In a group, I may
            sometimes stay in the background, but I always present my ideas and
            collaborate well with others. I believe it&#39;s important for
            everyone to have a voice and contribute ideas. I am often told that
            I am reliable and fair. My interests include computers, video games,
            working out, listening to music, and riding my longboard. I used to
            play handball and practice martial arts, but now I mostly go to the
            gym. Besides this, I also program in my free time and work on
            personal projects.
          </p>

          <p className='mb-4 font-light'>
            Thanks to my experience with team sports, I understand what it means
            to be a good teammate. I know the importance of collaboration,
            communication, and supporting my team members to achieve common
            goals.
          </p>

          <p className='font-light'>
            I am looking for a position where I can continue to develop my
            skills in collaboration with you while you can benefit from my
            expertise.
          </p>
        </div>
      </div>
    </section>
  )
}
