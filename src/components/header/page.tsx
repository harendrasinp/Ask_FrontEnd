import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export const Header = () => {
    return (
        <div className='w-full bg-cyan-950 flex items-center justify-between p-2'>
            <div><Image src="/Images/Logo/logo2.png" alt="logo" width={80} height={0} className='rounded-full'/></div>
            <div className='w-[16rem] flex justify-center items-center gap-2'>
                <Link href="/" className='p-1 text-amber-50'>Home</Link>
                <Link href="/about" className='p-1 text-amber-50'>About</Link>
                <Link href="/contact" className='p-1 text-amber-50'>Contact</Link>
                <Link href="/services" className='p-1 text-amber-50'>Services</Link>
            </div>
        </div>
    )
}
