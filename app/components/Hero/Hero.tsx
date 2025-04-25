/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='relative flex flex-row items-center z-20 mx-auto md:gap-[37px] md:mx-10'>
      <div className='flex flex-col gap-[13px] items-center md:gap[34px] md:my-[58px] md:items-start'>
        <h1
          className='text-2xl font-semibold text-center md:text-[40px] md:text-start
        md:ml-5 flex flex-col md:flex-row md:flex-wrap items-center  gap-2'
        >
          Hello im John Doe, I&apos;m a
          <span className='text-[27px] highlight md:mt-0 md:text-[45px]'>
            Software Engineer
          </span>
        </h1>
        <p className='text-center text-sm mx-6 md:text-[22px] md:text-start'>
          I&apos;m obsessed with code and helping startups create unique and
          helpful products.
        </p>
        <a
          href='https://github.com/nxsag100301'
          target='_blank'
          className='self-center bg-primary text-white p-2.5 rounded flex gap-2.5 
          items-center text-sm md:self-start md:text-xl/6 md:ml-5'
        >
          My Github {` `}
          <img src='/arrow_right_icon.svg' alt='Arrow right icon' />
        </a>
      </div>
      <div>
        <Image
          src='/profile_light_purple.png'
          alt='Light purple rectangle'
          width={372}
          height={430}
          className='absolute hidden md:block w-[372px] h-[430px] right-0 -z-10'
        />
        <Image
          src='/profile_dark_purple.png'
          alt='Dark purple rectangle'
          width={372}
          height={430}
          className='absolute hidden md:block w-[372px] h-[430px] right-0 -z-10'
        />
        <Image
          src='/profile_picture.png'
          alt='John Doe profile picture'
          width={357}
          height={417}
          className='hidden md:block min-w-[357px] h-[417px] -z-10 mr-[7.7px] my-[6.5px]'
        />
      </div>
    </section>
  )
}

export default Hero
