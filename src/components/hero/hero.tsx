"use client"
import { heroData } from '@/content/hero/data'
import { MissionData } from '@/content/hero/mission'
import { whoweare } from '@/content/hero/whoweare'
const Hero = () => {

  return (
    <div>
      {/* -----------------------------Hero Section-------------------------------------------- */}
      <section className="relative w-full h-[15rem] lg:h-[20rem] flex items-center justify-center overflow-hidden">
        <img src="/Images/Hero/BgImage/hero1.jpg"alt="Hero background"
          className="absolute top-0 left-0 w-full h-full object-cover md:object-fill"/>
        <div className='absolute text-blue-950 font-semibold text-[1rem] left-2 top-2 z-50'>
          <p className='w-[15rem] lg:w-full'>{heroData.heading}</p>
        </div>
      </section>
      {/* ----------------------------Mission Section------------------------------------ */}
      <section className='relative w-full h-[25rem] flex justify-center'>
        <img src="/Images/Hero/BgImage/herobg1.png" alt="png image blue flow"
        className='w-full h-full' />
        <div className='z-10 absolute w-[24rem] py-1 px-3 lg:w-[55rem] lg:p-5'>
          <span className='text-green-600 font-bold geistSans'>{MissionData.title}</span>
          <div className='w-[6.9rem] h-[0.2rem] bg-blue-950 mb-2'></div>
          <p className='text-black text-justify oooh-baby-regular'>{MissionData.Description}</p>
        </div>
      </section>
      {/* -----------------------------------WHO WE ARE Section------------------------- */}
      <section className='w-full flex flex-col items-center mb-5'>
        <video src="/Images/Hero/installation_pic/vedio2.mp4" loop muted autoPlay playsInline className='w-[18rem] 
        h-[11rem] lg:w-[35rem] lg:h-[18rem]'>
        </video>
        <div className='w-full px-4'>
          <span className='text-green-600 font-bold geistSans'>{whoweare.heading}</span>
          <div className='w-[6.9rem] h-[0.2rem] bg-blue-950'></div>
          <p className='text-justify text-blue-500 pompiere-regular'>{whoweare.description}</p>
        </div>
      </section>

    </div>
  )
}

export default Hero