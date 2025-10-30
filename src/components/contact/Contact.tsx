import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='relative w-full min-h-screen bg-[url("/Images/Contact/contactBg1.png")] bg-cover bg-center bg-no-repeat'>
      <div className='absolute inset-0 bg-black/50'></div>

      <div className='relative z-10 p-6 flex flex-col gap-8'>
        <div className='flex justify-between items-center'>
          <h1 className='text-white text-3xl font-semibold'>Contact Us</h1>
          <img src="/Images/Contact/contactTitle1.png" alt="Contact" className='w-20 h-20' />
        </div>

        <div className='bg-white/10 backdrop-blur-md p-6 rounded-lg z-50'>
          <ul className='flex flex-col gap-2 text-white mb-4'>
            <li><FontAwesomeIcon icon={faUser} className='mr-2' /> Amol Jamadar</li>
            <li><FontAwesomeIcon icon={faPhone} className='mr-2' /> +91 9970044897</li>
            <li><FontAwesomeIcon icon={faEnvelope} className='mr-2' /> amol_jamadar@asksolar.com</li>
            <li><FontAwesomeIcon icon={faLocationDot} className='mr-2' /> Flat-12, Wing2, Shahada (Nandurbar)</li>
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
