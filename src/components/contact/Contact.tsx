import React from 'react'

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
                <div className='w-full h-full bg-gray-100/15'>
                </div>
            </div>
        </div>
    )
}

export default Contact