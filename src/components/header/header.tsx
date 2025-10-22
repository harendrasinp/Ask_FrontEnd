import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
    return (
        <div className='w-full bg-gray-100 flex items-center justify-between p-2'>
            <div className='relative w-[8rem] h-[2rem]'><Image src="/Images/Logo/logo1.png" alt="logo" fill className='object-contain'/></div>
            <div className='hidden w-[16rem] lg:flex justify-center items-center gap-2'>
                <Link href="/" className='p-1 text-amber-50'>Home</Link>
                <Link href="/about" className='p-1 text-amber-50'>About</Link>
                <Link href="/contact" className='p-1 text-amber-50'>Contact</Link>
                <Link href="/services" className='p-1 text-amber-50'>Services</Link>
            </div>
            <div className='lg:hidden flex flex-col justify-center items-center gap-1.5 border-1 border-cyan-950 rounded p-2'>
               <div className='w-[25px] h-[2px] bg-cyan-950'></div>
               <div className='w-[25px] h-[2px] bg-cyan-950'></div>
               <div className='w-[25px] h-[2px] bg-cyan-950'></div>
            </div>
        </div>
    )
}
 export default Header
