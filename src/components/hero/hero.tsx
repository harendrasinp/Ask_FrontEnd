"use client"
import { heroData } from '@/content/hero/data'
import { MissionData } from '@/content/hero/mission'
import { useEffect, useState } from 'react'
import { ImagesData } from '@/content/hero/images'
import Image from 'next/image'
const Hero = () => {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (index <= ImagesData.length) {
      const timer = setInterval(() => {
        setIndex((image) => image + 1)
      }, 2000)
      return () => clearInterval(timer)
    } else {
      setIndex(0)
    }
  }, [index])

  return (
    <>
      <div className='bg-[url("/Images/Hero/BgImage/hero1.jpg")] bg-cover bg-center bg-no-repeat w-full 
        h-[15rem] md:h-[25rem] lg:h-[25rem]'>
        <div className='text-amber-50 font-semibold text-[1rem] text-left'>
          <p className='w-[15rem] lg:w-full'>{heroData.heading}</p>
        </div>
      </div>
      <div className='bg-[url("/Images/Hero/BgImage/herobg2.png")] bg-cover bg-center w-full h-screen flex flex-col justify-between items-center'>
       
       <div className='mt-2'>
          <span className='text-green-600 font-bold geistSans'>{MissionData.title}</span>
          <div className='w-[6.9rem] h-[0.2rem] bg-amber-400 mt-2 mb-2'></div>
          <p className='text-black text-justify w-[23rem] lg:w-full'>{MissionData.Description}</p>
        </div>

        <div className='relative flex justify-center w-[30rem] h-[15rem]'>
          {ImagesData[index] ?
            <Image src={ImagesData[index]} alt='installation Image'fill></Image>
            : null}
        </div>

      </div>
    </>
  )
}

export default Hero