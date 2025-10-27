"use client"
import { heroData } from '@/content/hero/data'
import { MissionData } from '@/content/hero/mission'
import { useEffect, useState } from 'react'
const Hero = () => {
  const [data,setData]=useState("")
  useEffect(()=>{
    setData("transition-transform duration-500 ease-in translate-x-0")
  })
  
  return (
    <div>
      <div className='bg-[url("/Images/Hero/BgImage/hero1.jpg")] bg-center bg-cover bg-no-repeat w-full h-[15rem] lg:h-[25rem]'>
        <div className='text-amber-50 font-semibold text-[1rem] text-left'>
          <p className='w-[15rem] lg:w-full'>{heroData.heading}</p>
        </div>
      </div>
      <div className='bg-[url("/Images/Hero/BgImage/herobg1.png")] bg-cover bg-center w-full h-[40rem] flex flex-col items-center gap-6 lg:gap-52'>

        <div className='w-full p-4'>
          <span className='text-green-600 font-bold geistSans'>{MissionData.title}</span>
          <div className='w-[6.9rem] h-[0.2rem] bg-amber-400 mb-2'></div>
          <p className={`text-black text-justify w-full ${data?data:"translate-x-full"}`}>{MissionData.Description}</p>
        </div>

        <div className='relative flex justify-center w-[18rem] h-[12rem] lg:w-[30rem] lg:h-[18rem]'>
          <video src="/Images/Hero/installation_pic/vedio2.mp4" loop muted autoPlay playsInline ></video>
        </div>

      </div>
    </div>
  )
}

export default Hero