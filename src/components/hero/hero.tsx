
import { heroData } from '@/content/hero/data'
import { MissionData } from '@/content/hero/mission'
const Hero = () => {

  return (
    <>
      <div className='bg-[url("/Images/Hero/hero1.jpg")] bg-cover bg-center bg-no-repeat w-full 
        h-[15rem] md:h-[25rem] lg:h-[25rem]'>
        <div className='text-amber-50 font-semibold text-[1rem] text-left'>
          <p className='w-[15rem] lg:w-full'>{heroData.heading}</p>
        </div>
      </div>
      <div className='bg-green-100 h-screen w-full flex justify-center '>
        <div className='absolute mt-2'>
          <span className='text-green-600 font-bold geistSans'>{MissionData.title}</span>
          <div className='w-[6.9rem] h-[0.2rem] bg-amber-400 mt-2 mb-2'></div>
          <p className='text-black text-justify w-[23rem] lg:w-full'>{MissionData.Description}</p>
        </div>
      </div>
    </>
  )
}

export default Hero