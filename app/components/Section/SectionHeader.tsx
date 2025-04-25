import React from 'react'

type Props = {
  plainText: string
  hightlightText: string
}

const SectionHeader = ({ plainText, hightlightText }: Props) => {
  return (
    <h2 className='text-[22px] md:text-[35px] px-20 text-center mt-16'>
      {plainText}
      {` `}
      <span className='px-2 highlight whitespace-nowrap'>{hightlightText}</span>
    </h2>
  )
}

export default SectionHeader
