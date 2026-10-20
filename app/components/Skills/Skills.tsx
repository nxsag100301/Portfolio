import React from 'react'
import skills from '@/data/skills.json'
import SectionContainer from '../Section/SectionContainer'
import SectionHeader from '../Section/SectionHeader'
import Skill from './Skill'
import Image from 'next/image'

const Skills = () => {
  return (
    <SectionContainer id='skills'>
      <div className='sections-contents'>
        <SectionHeader plainText='This is my' hightlightText='Tech Stack' />
        <div
          className='card grid w-full grid-cols-2 gap-3 rounded-3xl p-4 sm:grid-cols-3
        sm:gap-4 sm:p-6 md:grid-cols-4 md:gap-5 md:p-8 lg:grid-cols-6'
        >
          {skills.map((skill, id) => (
            <Skill key={id} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
      <Image
        src='/tech_stack_grid_dark.svg'
        alt='Background grid decoration'
        width={569}
        height={373}
        className='pointer-events-none absolute -left-24 -top-16 -z-10 hidden opacity-40 dark:md:block'
      />
    </SectionContainer>
  )
}

export default Skills
