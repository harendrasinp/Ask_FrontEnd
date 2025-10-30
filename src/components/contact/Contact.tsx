import React from 'react'

const Contact = () => {
    return (
       <div className='bg-gray-600/50 w-full h-[45rem] lg:h-[55rem] bg-[url("/Images/Contact/contactBg1.png")] bg-cover bg-center bg-no-repeat'>
            <div className='relative'>
                <h1 className='absolute top-8 right-[6rem] text-shadow-yellow-800 text-[1.5rem]'>Contact Us</h1>
            </div>
            <div className='relative'>
                <img src="/Images/Contact/contactTitle1.png" alt="Contact-title-logo" 
                className='absolute top-8 w-45 h-40 lg:right-[12rem] lg:w[18rem] lg:h-[18rem]'/>
            </div>
       </div>
    )
}

export default Contact