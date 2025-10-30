import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faUser,faLocationDot} from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
    return (
        <div className='bg-gray-600/50 w-full h-[45rem] lg:h-[55rem] bg-[url("/Images/Contact/contactBg1.png")] bg-cover bg-center bg-no-repeat'>
            <div className='flex justify-between items-center px-5 lg:p-10'>
                <div className=''>
                    <h1 className=' text-shadow-yellow-800 text-[1.5rem]'>Contact Us</h1>
                </div>
                <div className=''>
                    <img src="/Images/Contact/contactTitle1.png" alt="Contact-title-logo"
                        className='w-45 h-40' />
                </div>
            </div>

            <div className='absolute w-full h-[35rem] p-4'>
                <div className='w-full h-full bg-gray-100/15 flex flex-col justify-evenly p-5'>
                   <div className=''>
                     <ul className='flex flex-col justify-between items-start gap-2'>
                        <li className='text-white'>
                            <FontAwesomeIcon icon={faUser}/>
                            Amol Jamadar
                        </li>

                        <li className='text-white'>
                            <FontAwesomeIcon icon={faPhone}/>
                            +91-997-004-489-7
                        </li>

                        <li className='text-white'>
                            <FontAwesomeIcon icon={faEnvelope}/>
                            amol_jamadar@asksolar.com
                        </li>
                        <li className='text-white'>
                            <FontAwesomeIcon icon={faLocationDot}/>
                            flat-12,wing2,shahada(Nandurbar)
                        </li>
                    </ul>
                   </div>
                   <div>
                    <form className='flex flex-col gap-3'>
                        <input type="text" placeholder='Your Name' className=' text-amber-50 p-2 rounded border border-amber-50 bg-amber-50/50'/>
                        <input type="email" placeholder='Your Email' className='text-amber-50 p-2 rounded ounded border border-amber-50 bg-amber-50/50'/>
                        <textarea placeholder='Your Message' className='text-amber-50 p-2 rounded h-24 ounded border border-amber-50 bg-amber-50/50'></textarea>
                        <button type='submit' className='bg-blue-950 text-white p-2 rounded w-32'>Send Message</button>
                    </form>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Contact