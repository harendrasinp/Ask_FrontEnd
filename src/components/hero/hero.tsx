import Image from 'next/image'
import { heroData } from '@/content/hero/data'
const Hero = () => {
  return (
    <div className='relative flex justify-center items-center w-full h-screen'>
      <Image src="/Images/Hero/bg-sky1.jpg" alt="logo" fill  className='object-cover'/>
      <div className='absolute top-5 text-blue-500 font-bold text-[1rem] text-center'>
        <p className='w-[15rem]'>{heroData.heading}</p>
        </div>
    </div>
  )
}

export default Hero