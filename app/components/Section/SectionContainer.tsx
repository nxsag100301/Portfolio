import React from 'react'

type Props = React.PropsWithChildren<{
  id: string
}>

const SectionContainer = ({ children, id }: Props) => {
  return (
    <section
      id={id}
      className='relative z-30 flex w-full scroll-mt-28 flex-col justify-center'
    >
      {children}
    </section>
  )
}

export default SectionContainer
