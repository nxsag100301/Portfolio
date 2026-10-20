import React from 'react'
import Hero from './Hero/Hero'
import Skills from './Skills/Skills'
import Experiences from './Experiences/Experiences'
import Contact from './Contact'

const Sections = () => {
  return (
    <main className='relative z-20 mx-auto flex w-full max-w-6xl flex-col gap-14 px-2 pt-24 sm:gap-16 sm:px-4 md:gap-24 md:pt-32 lg:gap-40 lg:pt-40'>
      <Hero />
      <Skills />
      {/* <Projects /> */}
      <Experiences />
      <Contact />
    </main>
  )
}

export default Sections
