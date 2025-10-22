"use client"
import Link from 'next/link'
import { useSelector } from 'react-redux'
const HeaderMobile = () => {
    const status = useSelector((state: any) => state.counter.status);
  return (
    <div className={`fixed bg-cyan-950 right-0 h-full w-64 shadow-lg transform transition-trasform duration-300 z-50
    ${status ? "translate-x-0" : "translate-x-full"}`}>
        <div className='flex flex-col items-center gap-4 mt-5'>
            <Link href={"/"} className='text-white'>Home</Link>
            <Link href={"/"} className='text-white'>Services</Link>
            <Link href={"/"} className='text-white'>AboutUs</Link>
            <Link href={"/"} className='text-white'>ContactUs</Link>
        </div>
    </div>
  )
}

export default HeaderMobile