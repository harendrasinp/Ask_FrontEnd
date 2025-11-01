import { MissionData } from '@/content/hero/mission'
import { whoweare } from '@/content/hero/whoweare'
import React from 'react'

const About = () => {
  return (
    <div>
         {/* ----------------------------Mission Section------------------------------------ */}
      <section className='relative w-full h-[25rem] flex justify-center'>
        <img src="/Images/Hero/BgImage/herobg1.png" alt="png image blue flow"
        className='w-full h-full' />
        <div className='z-10 absolute w-[24rem] py-1 px-3 lg:w-[55rem] lg:p-5'>
          <span className='text-green-600 font-bold geistSans'>{MissionData.title}</span>
          <div className='w-[6.9rem] h-[0.2rem] bg-blue-950 mb-2'></div>
          <p className='text-black text-justify pompiere-regular '>{MissionData.Description}</p>
        </div>
      </section>
      {/* -----------------------------------WHO WE ARE Section------------------------- */}
      <section className='w-full flex flex-col items-center'>
        <video src="/Images/Hero/installation_pic/vedio2.mp4" loop muted autoPlay playsInline className='w-[18rem] 
        h-[11rem] lg:w-[35rem] lg:h-[18rem]'>
        </video>
        <div className='w-full lg:w-[55rem] lg:p-5'>
         <div className='ml-2'>
           <span className='text-green-600 font-bold geistSans'>{whoweare.heading}</span>
          <div className='w-[6.9rem] h-[0.2rem] bg-orange-400 mb-2'></div>
         </div>
          <p className='text-justify text-amber-50 pompiere-regular bg-who_we_are_bgColor p-2'>{whoweare.description}</p>
        </div>
      </section>
    </div>
  )
}

export default About