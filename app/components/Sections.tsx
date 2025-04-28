import React from 'react'
import Hero from './Hero/Hero'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Experiences from './Experiences/Experiences'
import Contact from './Contact'

const Sections = () => {
  return (
    <main className='flex flex-col gap[142px] w-full md:max-w-screen-lg pt-[236px] md:pt-60 mx-auto'>
      <Hero />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
    </main>
  )
}

export default Sections
