/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import React, { useCallback } from 'react'
import Reveal from '../Reveal'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const Hero = () => {
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const springX = useSpring(pointerX, { stiffness: 140, damping: 18 })
  const springY = useSpring(pointerY, { stiffness: 140, damping: 18 })
  const rotateX = useTransform(springY, [-0.5, 0.5], ['8deg', '-8deg'])
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-10deg', '10deg'])

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (event.pointerType !== 'mouse') return
      const bounds = event.currentTarget.getBoundingClientRect()
      pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
      pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5)
    },
    [pointerX, pointerY]
  )

  const resetPointer = useCallback(() => {
    pointerX.set(0)
    pointerY.set(0)
  }, [pointerX, pointerY])

  return (
    <section className='relative z-20 mx-auto grid w-full items-center gap-12 px-5 md:grid-cols-[1.05fr_0.95fr] md:gap-8 lg:gap-12 lg:px-12'>
      <div className='flex flex-col items-center gap-6 text-center md:items-start md:text-left'>
        <Reveal initialX={-25}>
          <h1 className='flex flex-col items-center gap-3 text-[clamp(2rem,5vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.055em] md:items-start'>
            Hello I&apos;m Xuan Sang Nguyen,
            <br /> I&apos;m a
            <span className='highlight text-[clamp(1.65rem,4vw,3.5rem)] tracking-[-0.04em]'>
              Software Engineer
            </span>
          </h1>
        </Reveal>
        <Reveal initialX={-30} delay={0.2}>
          <p className='max-w-xl text-base leading-8 text-white/65 md:text-lg'>
            I aim to build scalable, high-quality software and create reliable
            solutions that deliver real value.
          </p>
        </Reveal>
        <Reveal initialX={-40} delay={0.4}>
          <a
            href='https://github.com/nxsag100301'
            target='_blank'
            rel='noreferrer'
            className='group inline-flex items-center gap-3 rounded-xl border border-amber-100/30
          bg-amber-300 px-5 py-3 text-sm font-medium text-[#211b0c] shadow-[0_12px_40px_rgb(240,213,138,0.18)]
          transition duration-300 hover:-translate-y-1 hover:bg-amber-200 md:text-base'
          >
            My Github {` `}
            <img
              src='/arrow_right_icon.svg'
              alt='Arrow right icon'
              className='transition-transform duration-300 group-hover:translate-x-1'
            />
          </a>
        </Reveal>
      </div>
      <Reveal initialY={25} delay={0.15}>
        <div className='mx-auto w-full max-w-[360px]'>
          <motion.div
            onPointerMove={handlePointerMove}
            onPointerLeave={resetPointer}
            className='relative aspect-[0.88] w-full overflow-hidden rounded-[2rem] border border-white/15
          bg-gradient-to-br from-white/10 to-amber-300/10 p-2.5 shadow-[0_30px_80px_rgb(0,0,0,0.45)]
          [perspective:1100px] sm:p-3'
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          >
            <div className='absolute inset-2.5 rounded-[1.5rem] border border-amber-100/10 sm:inset-3' />
            <div className='relative h-full overflow-hidden rounded-[1.5rem] bg-[#15111f] [transform:translateZ(16px)]'>
              <Image
                src='/avatar.jpg'
                alt='John Doe profile picture'
                fill
                priority
                sizes='(max-width: 768px) 85vw, 360px'
                className='object-cover object-center transition duration-700 hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-[#09070f]/75 via-transparent to-amber-200/10' />
            </div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  )
}

export default Hero
