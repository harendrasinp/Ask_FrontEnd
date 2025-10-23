
import { heroData } from '@/content/hero/data'
const Hero = () => {
  
  return (
    <div className='bg-[url("/Images/Hero/hero1.jpg")] bg-cover bg-no-repeat flex w-full 
    h-[15rem] md:h-[25rem] lg:h-[25rem]'>
      <div className='text-amber-50 font-semibold mt-2 text-[1rem] text-left'>
        <p className='w-[15rem]'>{heroData.heading}</p>
        </div>
    </div>
  )
}

export default Hero