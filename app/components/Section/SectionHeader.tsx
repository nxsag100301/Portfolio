import React from 'react'
import Reveal from '../Reveal'

type Props = {
  plainText: string
  hightlightText: string
}

const SectionHeader = ({ plainText, hightlightText }: Props) => {
  return (
    <Reveal initialX={-40}>
      <div className='flex flex-col items-center gap-4 px-5 pt-4 text-center'>
        <span className='h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent' />
        <h2 className='text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl'>
          <span className='text-white/65'>{plainText} </span>
          <span className='text-primary'>{hightlightText}</span>
        </h2>
      </div>
    </Reveal>
  )
}

export default SectionHeader
