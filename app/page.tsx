import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import profilePic from 'public/profile.jpg'

export default function Page() {
  return (
    <section>
      <div className='mb-16'>
        <Image className='rounded-full'
          src={profilePic}
          width={225}
          height={225}
          alt="Picture of the author"
        />
      </div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>
      <p className="mb-4">
        {`My name is Troj Andersen, I'm a developer currently studying a 2-year programme at Folkuniversitet in Gothenburg.
        Im mainly focused in improving my skills using the MERN-stack before exploring different techstacks. Some of the tools I've picked up so far include
        HTML, CSS, Figma, JS/TS, Scrum, React, Node, MongoDB, Next.js & TailwindCSS.`}
      </p>
      <p className="mb-4">{`Previously I studied as a backend dev where I learnt Java, testing, git, mySQL, 
        REST, Insomnia. I also learnt more theoretical knowledge in OOP about abstraction, encapsulation, inheritance, the stack, TDD and CI/CD amongst other concepts.`}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
