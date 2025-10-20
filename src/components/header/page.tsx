import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export const Header = () => {
    return (
        <div className='w-[80%] flex items-center justify-between gap-4 border-2 border-amber-300 rounded-3xl px-6'>
            <div><Image src="/Images/Logo/logo4.png" alt="logo" width={100} height={0} className='rounded-full'/></div>
            <div className='w-[25rem] flex justify-center items-center gap-6'>
                <Link href="/" className='bg-blue-300 p-2 px-4 rounded-2xl'>Home</Link>
                <Link href="/about"className='bg-blue-300 p-2 px-4 rounded-2xl'>About</Link>
                <Link href="/contact"className='bg-blue-300 p-2 px-4 rounded-2xl'>Contact</Link>
                <Link href="/services"className='bg-blue-300 p-2 px-4 rounded-2xl'>Services</Link>
            </div>
        </div>
    )
}
