'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Reveal from './Reveal'
import { motion, useMotionValue } from 'framer-motion'

const Contact = () => {
  const ref = useRef<HTMLElement>(null)
  const posX = useMotionValue(0)
  const posY = useMotionValue(0)
  const updatePos = (e: MouseEvent) => {
    if (!ref.current) return
    const { top, left } = ref.current.getBoundingClientRect()
    posX.set(e.x - left)
    posY.set(e.y - top)
  }
  useEffect(() => {
    window.addEventListener('mousemove', updatePos)
    return () => {
      window.removeEventListener('mousemove', updatePos)
    }
  })
  return (
    <Reveal initialY={40} delay={0.5}>
      <section
        id='contact'
        className='card relative items-center mx-6 flex flex-col px-[33px] mt-[64px]
      py-[27px] z-30 gap-[24px] md:gap-[35px] mb-[42px] group overflow-hidden'
        ref={ref}
      >
        <div className='flex flex-col md:flex-row gap-5 md:justify-between md:w-full'>
          <h2 className='font-semibold text-[22px] md:text-[40px] md:max-w-[462px]'>
            Want me on your team? Let&apos;s make it happen
          </h2>
          <div className='flex flex-col gap-5 items-center md:items-end '>
            <a
              href='mailto:nxsag100301@gmail.com'
              target='_blank'
              className='self-center md:self-start bg-primary text-white p-2.5
            rounded flex gap-2.5 items-center text-lg md:text-xl/l font-normal '
            >
              Let&apos;s get in touch
            </a>
            <div className='flex flex-row gap-1 '>
              <a
                href='https://github.com/nxsag100301'
                target='_blank'
                className='contact-button'
              >
                <Image
                  src='/github_logo_dark.svg'
                  alt='Github logo'
                  height={16}
                  width={17}
                />
              </a>
            </div>
          </div>
        </div>
        <small>Copyright &copy; Nxsag 2025</small>
        <motion.div
          className='absolute w-64 h-64 bg-gradient-radial from-violet-700/100 to-transparent rounded-full
        blur-3xl -z-10 opacity-0 group:hover:opacity-100 transition duration-300'
          style={{
            left: posX,
            top: posY,
            transform: 'translate(-50%, -50%)'
          }}
        />
      </section>
    </Reveal>
  )
}

export default Contact
