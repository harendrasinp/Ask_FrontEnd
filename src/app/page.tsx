import React from 'react'
import Image from 'next/image'
const Home = () => {
  return (
    <div className='relative flex justify-center items-center w-full h-screen'>
      <Image src="/Images/Hero/bg-sky1.jpg" alt="logo" fill />
    </div>
  )
}

export default Home