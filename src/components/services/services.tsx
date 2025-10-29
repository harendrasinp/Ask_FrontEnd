import React from 'react'

const Services = () => {
  return (
    <div className='relative w-full h-fit flex flex-col justify-center items-center'>
      <img src="/Images/Services/service-bg1.png" alt="services background" className='w-full'/>
      <span className='text-blue-950 font-bold'>Services We Provide</span>
      <div className='p-5'>
        <div className='bg-cyan-950 w-fit h-fit p-2 rounded-2xl shadow-cyan-950 shadow-2xl'>
          <h4 className='text-amber-50'>Solar Panals</h4>
          <p className='text-amber-200'>We provide high quality solar panals for residential and commercial use.</p>
        </div>
      </div>
    </div>
  )
}

export default Services