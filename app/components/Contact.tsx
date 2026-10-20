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
        className='card relative mx-6 mt-[64px] mb-[42px] overflow-hidden rounded-2xl
      px-6 py-8 z-30 md:px-10 md:py-10 group'
        ref={ref}
      >
        <div className='relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-center md:gap-12'>
          <div className='flex flex-col items-start gap-4'>
            <span className='text-sm font-semibold uppercase tracking-[0.2em] text-primary'>
              Get in touch
            </span>
            <h2 className='max-w-[500px] text-[28px] font-semibold leading-tight md:text-[40px]'>
              Want me on your team? Let&apos;s make it happen.
            </h2>
            <p className='max-w-[440px] text-sm leading-relaxed text-foreground/70 md:text-base'>
              I&apos;m always open to discussing new opportunities and
              interesting projects.
            </p>
            <a
              href='mailto:nguyenxuansang10032001@gmail.com'
              className='mt-1 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3
            font-medium text-white transition hover:opacity-90'
            >
              Send me an email
              <span aria-hidden='true'>-&gt;</span>
            </a>
          </div>

          <div className='flex w-full flex-col gap-3 md:w-[360px]'>
            <a
              href='mailto:nguyenxuansang10032001@gmail.com'
              className='flex min-w-0 items-center gap-4 rounded-xl border border-foreground/10
            bg-background/70 p-4 transition hover:border-primary/50'
            >
              <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                <svg
                  aria-hidden='true'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.8'
                  className='h-5 w-5'
                >
                  <rect x='3' y='5' width='18' height='14' rx='2' />
                  <path d='m4 7 8 6 8-6' />
                </svg>
              </span>
              <span className='min-w-0'>
                <span className='block text-xs text-foreground/60'>Email</span>
                <span className='block break-all text-sm font-medium'>
                  nguyenxuansang10032001@gmail.com
                </span>
              </span>
            </a>

            <a
              href='tel:+84773482059'
              className='flex items-center gap-4 rounded-xl border border-foreground/10
            bg-background/70 p-4 transition hover:border-primary/50'
            >
              <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                <svg
                  aria-hidden='true'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.8'
                  className='h-5 w-5'
                >
                  <path d='M6.6 3.8 9 3.3l2 4.7-1.8 1.5a15 15 0 0 0 5.3 5.3l1.5-1.8 4.7 2-.5 2.4a2 2 0 0 1-2 1.6A15.5 15.5 0 0 1 5 5.8a2 2 0 0 1 1.6-2Z' />
                </svg>
              </span>
              <span>
                <span className='block text-xs text-foreground/60'>
                  Phone
                </span>
                <span className='block text-sm font-medium'>+84773482059</span>
              </span>
            </a>

            <a
              href='https://github.com/nxsag100301'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 self-start px-1 py-2 text-sm
            font-medium text-foreground/70 transition hover:text-primary'
            >
              <Image
                src='/github_logo_dark.svg'
                alt=''
                aria-hidden='true'
                height={16}
                width={17}
              />
              Find me on GitHub
              <span aria-hidden='true'>-&gt;</span>
            </a>
          </div>
        </div>

        <div className='relative z-10 mt-8 border-t border-foreground/10 pt-5'>
          <small className='text-xs text-foreground/50'>
            Copyright &copy; sangnx 2025
          </small>
        </div>
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
