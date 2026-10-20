/* eslint-disable @next/next/no-img-element */
'use client'
import cn from 'classnames'
import React, { useCallback, useEffect, useState } from 'react'
import Reveal from './Reveal'

const SECTION_IDS = [
  'home',
  'skills',
  'projects',
  'experience',
  'contact'
] as const

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const updateActiveSection = () => {
      const activationPoint = window.scrollY + window.innerHeight * 0.35
      let currentSection: (typeof SECTION_IDS)[number] = 'home'

      for (const sectionId of SECTION_IDS) {
        const section = document.getElementById(sectionId)
        const sectionTop = section
          ? section.getBoundingClientRect().top + window.scrollY
          : Infinity
        if (sectionTop <= activationPoint) {
          currentSection = sectionId
        }
      }

      const isAtPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2

      if (isAtPageBottom) {
        currentSection = SECTION_IDS[SECTION_IDS.length - 1]
      }

      setActiveSection(currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  const scollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [])
  return (
    <div className='fixed left-1/2 top-4 z-50 flex w-max -translate-x-1/2 flex-col items-center gap-2.5'>
      <Reveal initialY={-20} duration={0.5}>
        <button
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          className='relative z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full
        border border-white/10 bg-[#13111c]/85 p-3 shadow-xl backdrop-blur-xl md:hidden'
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img
            className='block dark:hidden'
            src='/menu_icon_light.svg'
            alt='menu icon'
          />
          <img
            className='hidden dark:block'
            src='/menu_icon_dark.svg'
            alt='menu icon'
          />
        </button>
      </Reveal>
      {/* Desktop */}
      <Reveal initialY={-20} duration={0.5}>
        <nav
          className={cn(
            'hidden rounded-full border border-white/10 bg-[#13111c]/75 p-2 shadow-[0_20px_70px_rgb(0,0,0,0.4)] backdrop-blur-2xl transition-all duration-300 md:block',
            {
              'opacity-100': isOpen,
              'opacity-0 md:opacity-100': !isOpen
            }
          )}
        >
          <ul
            className='flex flex-col items-center gap-1 text-sm font-medium md:flex-row'
          >
            <li>
              <div
                className={cn(
                  'cursor-pointer rounded-full px-4 py-2 transition duration-300 hover:bg-white/[0.07]',
                  {
                    'bg-amber-200/15 text-amber-100 shadow-[inset_0_0_0_1px_rgb(253,230,138,0.18)]': activeSection === 'home'
                  }
                )}
                onClick={() => {
                  scollToSection('home')
                  setIsOpen(false)
                }}
              >
                Home
              </div>
            </li>
            <li>
              <div
                className={cn(
                  'cursor-pointer rounded-full px-4 py-2 transition duration-300 hover:bg-white/[0.07]',
                  {
                    'bg-amber-200/15 text-amber-100 shadow-[inset_0_0_0_1px_rgb(253,230,138,0.18)]': activeSection === 'skills'
                  }
                )}
                onClick={() => {
                  scollToSection('skills')
                  setIsOpen(false)
                }}
              >
                Skills
              </div>
            </li>
            {/* <li>
              <div
                className={cn(
                  'rounded p-1 cursor-pointer duration-300 ease-in-out px-2',
                  {
                    'bg-primary text-white': activeSection === 'projects'
                  }
                )}
                onClick={() => {
                  scollToSection('projects')
                  setIsOpen(false)
                }}
              >
                Projects
              </div>
            </li> */}
            <li>
              <div
                className={cn(
                  'cursor-pointer rounded-full px-4 py-2 transition duration-300 hover:bg-white/[0.07]',
                  {
                    'bg-amber-200/15 text-amber-100 shadow-[inset_0_0_0_1px_rgb(253,230,138,0.18)]': activeSection === 'experience'
                  }
                )}
                onClick={() => {
                  scollToSection('experience')
                  setIsOpen(false)
                }}
              >
                Experience
              </div>
            </li>
            <li>
              <div
                className={cn(
                  'cursor-pointer rounded-full px-4 py-2 transition duration-300 hover:bg-white/[0.07]',
                  {
                    'bg-amber-200/15 text-amber-100 shadow-[inset_0_0_0_1px_rgb(253,230,138,0.18)]': activeSection === 'contact'
                  }
                )}
                onClick={() => {
                  scollToSection('contact')
                  setIsOpen(false)
                }}
              >
                Contact me
              </div>
            </li>
          </ul>
        </nav>
      </Reveal>
      {/* Mobile */}
      {isOpen && (
        <nav className='w-56 rounded-2xl border border-white/10 bg-[#13111c]/90 p-3 shadow-2xl backdrop-blur-2xl md:hidden'>
          <ul
            className='flex flex-col items-stretch gap-1 text-sm font-medium'
          >
            <li>
              <div
                className={cn(
                  'cursor-pointer rounded-xl px-4 py-3 transition hover:bg-white/[0.07]',
                  {
                    'bg-amber-200/15 text-amber-100': activeSection === 'home'
                  }
                )}
                onClick={() => {
                  scollToSection('home')
                  setIsOpen(false)
                }}
              >
                Home
              </div>
            </li>
            <li>
              <div
                className={cn(
                  'cursor-pointer rounded-xl px-4 py-3 transition hover:bg-white/[0.07]',
                  {
                    'bg-amber-200/15 text-amber-100': activeSection === 'skills'
                  }
                )}
                onClick={() => {
                  scollToSection('skills')
                  setIsOpen(false)
                }}
              >
                Skills
              </div>
            </li>
            <li>
              <div
                className={cn(
                  'cursor-pointer rounded-xl px-4 py-3 transition hover:bg-white/[0.07]',
                  {
                    'bg-amber-200/15 text-amber-100': activeSection === 'projects'
                  }
                )}
                onClick={() => {
                  scollToSection('projects')
                  setIsOpen(false)
                }}
              >
                Projects
              </div>
            </li>
            <li>
              <div
                className={cn(
                  'cursor-pointer rounded-xl px-4 py-3 transition hover:bg-white/[0.07]',
                  {
                    'bg-amber-200/15 text-amber-100': activeSection === 'experience'
                  }
                )}
                onClick={() => {
                  scollToSection('experience')
                  setIsOpen(false)
                }}
              >
                Experience
              </div>
            </li>
            <li>
              <div
                className={cn(
                  'cursor-pointer rounded-xl px-4 py-3 transition hover:bg-white/[0.07]',
                  {
                    'bg-amber-200/15 text-amber-100': activeSection === 'contact'
                  }
                )}
                onClick={() => {
                  scollToSection('contact')
                  setIsOpen(false)
                }}
              >
                Contact me
              </div>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}

export default Navbar
