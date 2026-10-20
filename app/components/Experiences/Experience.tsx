import Image from 'next/image'
import React from 'react'
import Reveal from '../Reveal'

type Props = {
  id: number
  image: string
  company: string
  role: string
  description: string
  dates: string
}

const Experience = ({
  id,
  image,
  company,
  role,
  description,
  dates
}: Props) => {
  return (
    <Reveal initialX={id % 2 === 0 ? -60 : 60} delay={0.5 * id}>
      <div
        className='card group relative flex w-full flex-col gap-5 overflow-hidden rounded-2xl
      p-5 transition duration-500 hover:-translate-y-1 hover:border-amber-200/25 hover:bg-white/[0.055]
      sm:p-7 md:p-8'
      >
        <span className='absolute left-0 top-7 h-3 w-3 rounded-full border-2 border-amber-100 bg-primary shadow-[0_0_18px_rgb(240,213,138,0.55)] md:left-2' />
        <div className='absolute -right-12 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition duration-500 group-hover:bg-primary/20' />
        <div className='relative flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center'>
          <div className='flex items-center gap-4'>
            <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] p-2'>
              <Image
                src={image}
                alt={`Company image for ${company}`}
                width={34}
                height={34}
                className='h-full w-full object-contain'
              />
            </span>
            <h3 className='text-base font-semibold tracking-tight sm:text-lg md:text-xl'>
              {company}
            </h3>
          </div>
          <span className='rounded-full border border-amber-200/15 bg-amber-200/10 px-3 py-1 text-xs font-medium text-amber-100 sm:text-sm'>
            {dates}
          </span>
        </div>
        <p className='relative text-sm leading-7 text-white/65 sm:text-base'>
          {description}
        </p>
        <p className='relative text-sm font-medium text-primary'>{role}</p>
      </div>
    </Reveal>
  )
}

export default Experience
