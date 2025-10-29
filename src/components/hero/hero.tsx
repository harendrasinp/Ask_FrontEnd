"use client"
import { heroData } from '@/content/hero/data'
const Hero = () => {

  return (
    <div>
      {/* -----------------------------Hero Section-------------------------------------------- */}
      <section className="relative w-full h-[15rem] lg:h-[20rem] flex items-center justify-center overflow-hidden">
        <img src="/Images/Hero/BgImage/hero1.jpg"alt="Hero background"
          className="absolute top-0 left-0 w-full h-full object-cover md:object-fill"/>
        <div className='absolute text-blue-950 font-semibold text-[1rem] left-2 top-2 z-2'>
          <p className='w-[15rem] lg:w-full font-semibold'>{heroData.heading}</p>
        </div>
      </section>
    </div>
  )
}

export default Hero