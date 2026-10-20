/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

const TopBackground = () => {
  return (
    <>
      <div
        className='absolute w-full max-w-[360px] md:max-w-screen-lg h-[285px] md:h-[656px] top-[188px] md:top-11 left-1/2
      -translate-x-1/2 pointer-events-none md:overflow-x-hidden z-10 [perspective:900px]'
      >
        <div className='w-full h-full relative'>
          <div className='circle-icon top-0 left-[171px] md:top-28 md:left-72'>
            <Image
              src='/rocket_icon.svg'
              alt='Rocket icon'
              width={23}
              height={23}
            />
          </div>
          <div className='circle-icon top-[162px] left-5 md:top-64 md:left-0'>
            <Image
              src='/bracket_icon.svg'
              alt='Bracket icon'
              width={23}
              height={23}
            />
          </div>
          <div className='circle-icon top-60 left-[149px] md:top-[570px] md:left-44'>
            <Image
              src='/github_icon.svg'
              alt='Github icon'
              width={23}
              height={23}
            />
          </div>
          <div className='hidden md:flex md:absolute md:circle-icon md:top-[592px] md:left-[608px]'>
            <Image
              src='/electricity_icon.svg'
              alt='Electricity icon'
              width={23}
              height={23}
            />
          </div>
          <div className='hidden md:flex md:absolute md:circle-icon md:top-[158px] md:left-[606px]'>
            <Image
              src='/merge_icon.svg'
              alt='Merge icon'
              width={23}
              height={23}
            />
          </div>
          <div className='hidden md:flex md:absolute md:circle-icon md:top-[368px] md:left-[965px]'>
            <Image
              src='/stack_icon.svg'
              alt='Stack icon'
              width={23}
              height={23}
            />
          </div>
        </div>
      </div>
      <div className='pointer-events-none absolute left-1/2 top-20 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full
      bg-amber-300/[0.06] blur-[100px] md:top-24 md:h-[48rem] md:w-[48rem]' />
      <div className='pointer-events-none absolute left-1/2 top-24 -z-10 hidden h-[36rem] w-[36rem] -translate-x-1/2
      animate-[orbit_45s_linear_infinite] rounded-[42%] border border-amber-200/[0.08] md:block' />
      <img
        src='/top_highlight.svg'
        alt='Top darkmode backround hightlight'
        width={809}
        height={877}
        className='pointer-events-none absolute left-1/2 top-[-515px] -z-10 hidden -translate-x-1/2 opacity-50 dark:md:block'
      />
      <img
        src='/top_highlight_mobile.svg'
        alt='Top darkmode backround hightlight mobile'
        width={429}
        height={465}
        className='pointer-events-none absolute left-1/2 top-[-229px] -z-10 hidden -translate-x-1/2 opacity-40 dark:block dark:md:hidden'
      />
      {/* <div className='absolute top-0 w-full h-[795px] bg-repeat-x bg-[url(/top_bg_light.svg)] bg-auto hidden dark:hidden md:block'></div>
      <div className='absolute top-0 w-full h-[600px] bg-repeat-x bg-[url(/top_bg_mobile_light.svg)] bg-auto dark:hidden md:hidden'></div> */}
      <div className='pointer-events-none absolute top-0 -z-20 hidden h-[795px] w-full bg-repeat-x bg-[url(/top_bg_dark.svg)] bg-auto opacity-50 dark:md:block' />
      <div className='pointer-events-none absolute top-0 -z-20 hidden h-[600px] w-full bg-repeat-x bg-[url(/top_bg_mobile_dark.svg)] bg-auto opacity-40 dark:block dark:md:hidden' />
    </>
  )
}

export default TopBackground
