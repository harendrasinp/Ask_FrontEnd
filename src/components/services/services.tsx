import React from 'react'
import { ServiceCard } from '@/content/services/servicesCard'
const Services = () => {
  return (
    <div className='relative bg-orange-200/50 w-full h-fit flex flex-col justify-center items-center'>
       <span className='absolute text-amber-200 font-bold text-[1.2rem] top-8 left-4 lg:text-[2rem] lg:left-15 lg:top-25 lg:text-2xl'>Services We Provide</span>
      <img src="/Images/Services/Service-bg1.png" alt="services background" className='w-full'/>
      <div className='absolute top-8 right-4 w-[10rem] h-[10rem]'>
        <img src="/Images/Services/solarbg.webp" alt="services background" className='w-full h-full'/>
      </div>
      <div className='p-5 h-fit flex flex-col gap-8 justify-center items-center'>
       {ServiceCard.map((service,index)=>(
        //  <div key={index} className='bg-cyan-950 w-fit h-fit p-3 rounded-2xl shadow-cyan-950 shadow-2xl text-justify'>
         <div key={index} className='bg-[url("/Images/Services/cardbg.png")] bg-cover bg-center bg-no-repeat w-fit h-full p-3 text-justify rounded-[0.5rem]'>
          <h4 className='text-amber-50 font-semibold'>{service.title}</h4>
          <p className='text-amber-200 bg-black/35 backdrop-blur-lg p-2 rounded-[0.5rem]'>{service.description}</p>
        </div>))
       }
      </div>
    </div>
  )
}

export default Services