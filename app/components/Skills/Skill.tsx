/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import Reveal from '../Reveal'

type Props = {
  name: string
  icon: string
}

const Skill = ({ name, icon }: Props) => {
  const xDistance = useMotionValue(0)
  const yDistance = useMotionValue(0)
  const rotateX = useSpring(0, { stiffness: 180, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 180, damping: 20 })

  const mask = useMotionTemplate`radial-gradient(130px 100px at ${xDistance}px ${yDistance}px, #000, transparent)`

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    xDistance.set(event.clientX - bounds.left)
    yDistance.set(event.clientY - bounds.top)
    rotateX.set(y * -9)
    rotateY.set(x * 9)
  }

  const resetPointer = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <Reveal duration={0.7}>
      <motion.div
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className='group relative flex min-h-[76px] items-center gap-3 overflow-hidden rounded-2xl
      border border-white/[0.08] bg-white/[0.035] px-3 py-3 transition-colors duration-300
      hover:border-amber-200/30 hover:bg-amber-200/[0.06] sm:px-4'
      >
        <motion.div
          className='pointer-events-none absolute inset-0 rounded-2xl border border-amber-200/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
          style={{
            maskImage: mask,
            WebkitMaskImage: mask
          }}
        />
        <span className='relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] p-2'>
          <img
            src={icon}
            alt={`${name} icon`}
            className='h-full w-full object-contain transition duration-300 group-hover:scale-110'
          />
        </span>
        <p className='relative text-xs font-medium leading-snug text-white/80 sm:text-sm'>
          {name}
        </p>
      </motion.div>
    </Reveal>
  )
}

export default Skill
