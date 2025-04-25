/* eslint-disable @next/next/no-img-element */
'use client'
import cn from 'classnames'
import React, { useCallback, useEffect, useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  useEffect(() => {
    setActiveSection('home')
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
    <div className='fixed top-12 right-6 mx-auto flex flex-col justify-center gap-2.5 z-50'>
      <button
        className='bg-background card-shadow p-3 rounded justify-items-end justify-end md:hidden cursor-pointer md:right-auto md:left-1/2
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
      <nav
        className={cn(
          'bg-background card-shadow p-3 rounded md:block duration-300 ease-in-out',
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
                'rounded p-1 cursor-pointer duration-300 ease-in-out',
                {
                  'bg-primary text-white': activeSection === 'home'
                }
              )}
              onClick={() => {
                setActiveSection('home')
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
                setActiveSection('skills')
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
                setActiveSection('projects')
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
                setActiveSection('experience')
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
                setActiveSection('contact')
                scollToSection('contact')
                setIsOpen(false)
              }}
            >
              Contact me
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
