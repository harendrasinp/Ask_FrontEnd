import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContactData } from '../../content/contact/contactData'
import Image from 'next/image'
const Contact = () => {
  return (
    <div  className='relative w-full min-h-screen bg-[url("/Images/Contact/contactBg1.png")] bg-cover bg-center bg-no-repeat'>
      <div className='absolute inset-0 bg-black/50'></div>

      <div className='relative z-10 p-4 flex flex-col items-center gap-8'>
        <div className='relative  w-full h-55 flex justify-between '>
          <h1 id='contactus' className='text-white text-3xl font-semibold scroll-mt-22'>Contact Us</h1>
          <Image src="/Images/Contact/contactTitle1.png" fill alt="Contact" className='object-contain' />
        </div>

        <div className='bg-white/10 backdrop-blur-md p-6 rounded-lg z-50'>
          <ul className='flex flex-col gap-2 text-[1rem] text-white mb-4'>
            {ContactData.map((data,index)=>(
              <li key={index}><FontAwesomeIcon icon={data.iconData} className='mr-2 text-justify' />{data.detail}</li>
            ))}
          </ul>

          <form className='flex flex-col gap-3'>
            <input type="text" placeholder='Your Name' className='p-2 rounded border border-white bg-black/40 text-white placeholder-white' />
            <input type="email" placeholder='Your Email' className='p-2 rounded border border-white bg-black/40 text-white placeholder-white' />
            <textarea placeholder='Your Message' className='p-2 rounded border border-white bg-black/40 text-white placeholder-white h-24'></textarea>
            <button type='submit' className='bg-blue-950 text-white p-2 rounded w-40 hover:bg-blue-800'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
