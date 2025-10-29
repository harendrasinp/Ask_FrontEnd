import React from 'react'
import { ServiceCard } from '@/content/services/servicesCard'
const Services = () => {
  return (
    <div className='relative bg-orange-200/50 w-full h-fit flex flex-col justify-center items-center'>
      <img src="/Images/Services/Service-bg1.png" alt="services background" className='w-full'/>
      <div className='absolute top-8 right-4 w-[10rem] h-[10rem]'>
        <img src="/Images/Services/solarbg.webp" alt="services background" className='w-full h-full'/>
      </div>
      <span className='text-blue-950 font-bold'>Services We Provide</span>
      <div className='p-5 h-fit flex flex-col gap-8 justify-center items-center'>
       {ServiceCard.map((service,index)=>(
         <div key={index} className='bg-cyan-950 w-fit h-fit p-5 rounded-2xl shadow-cyan-950 shadow-2xl'>
          <h4 className='text-amber-50'>{service.title}</h4>
          <p className='text-amber-200'>{service.description}</p>
        </div>))
       }
      </div>
    </div>
  )
}

export default Services