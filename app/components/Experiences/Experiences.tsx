import React from 'react'
import experiences from '@/data/experiences.json'
import SectionContainer from '../Section/SectionContainer'
import SectionHeader from '../Section/SectionHeader'
import Experience from './Experience'

const Experiences = () => {
  return (
    <SectionContainer id='experience'>
      <div className='section-contents mb-10'>
        <SectionHeader plainText='My prior' hightlightText='Work Experience' />
      </div>
      <div className='relative flex w-full flex-col gap-5 px-5 md:px-10'>
        <div className='absolute bottom-8 left-[2.4rem] top-8 w-px bg-gradient-to-b from-primary/70 via-white/10 to-transparent md:left-[3.4rem]' />
        {experiences.map((experience, id) => (
          <Experience
            key={id}
            id={id}
            image={experience.image}
            company={experience.company}
            role={experience.role}
            description={experience.description}
            dates={experience.dates}
          />
        ))}
      </div>
      {/* <div className='circle-icon h-14 w-14 top-[77px] right-1.5 md:top-[153px] md:right-[90px] -z-10 '>
        <Image
          src='/bracket_icon.svg'
          alt='Bracket icon'
          width={23}
          height={23}
        />
      </div>
      <div className='circle-icon h-14 w-14 left-1.5 bottom-0 md:left-[90px] -z-10 '>
        <Image
          src='/electricity_icon.svg'
          alt='Electricity icon'
          width={23}
          height={23}
        />
      </div> */}
    </SectionContainer>
  )
}

export default Experiences
