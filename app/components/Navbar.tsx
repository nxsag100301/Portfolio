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
    <div className='fixed top-12 right-6 mx-auto flex flex-col gap-2.5 z-50 min-w-[137px]'>
      <Reveal initialY={-20} duration={0.5}>
        <button
          className='bg-background card-shadow p-3 rounded md:hidden cursor-pointer relative -right-23.5
        md:-translate-x-1/2 w-10'
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
            'bg-background card-shadow p-3 rounded md:block duration-300 ease-in-out hidden',
            {
              'opacity-100': isOpen,
              'opacity-0 md:opacity-100': !isOpen
            }
          )}
        >
          <ul
            className='flex flex-col items-center gap-4 text-lg font-normal
        md:flex-row'
          >
            <li>
              <div
                className={cn(
                  'rounded p-1 cursor-pointer duration-300 ease-in-out px-2',
                  {
                    'bg-primary text-white': activeSection === 'home'
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
                  'rounded p-1 cursor-pointer duration-300 ease-in-out px-2',
                  {
                    'bg-primary text-white': activeSection === 'skills'
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
                  'rounded p-1 cursor-pointer duration-300 ease-in-out px-2',
                  {
                    'bg-primary text-white': activeSection === 'experience'
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
                  'rounded p-1 cursor-pointer duration-300 ease-in-out px-2',
                  {
                    'bg-primary text-white': activeSection === 'contact'
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
        <nav className='bg-background card-shadow p-3 rounded md:hidden duration-300 ease-in-out block'>
          <ul
            className='flex flex-col items-center gap-4 text-lg font-normal
      md:flex-row'
          >
            <li>
              <div
                className={cn(
                  'rounded p-1 cursor-pointer duration-300 ease-in-out',
                  {
                    'bg-primary text-white': activeSection === 'home'
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
                  'rounded p-1 cursor-pointer duration-300 ease-in-out',
                  {
                    'bg-primary text-white': activeSection === 'skills'
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
                  'rounded p-1 cursor-pointer duration-300 ease-in-out',
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
            </li>
            <li>
              <div
                className={cn(
                  'rounded p-1 cursor-pointer duration-300 ease-in-out',
                  {
                    'bg-primary text-white': activeSection === 'experience'
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
                  'rounded p-1 cursor-pointer duration-300 ease-in-out',
                  {
                    'bg-primary text-white': activeSection === 'contact'
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
