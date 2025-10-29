"use client"
import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { toggleStatus } from '@/redux/counterSclice'
import HeaderMobile from '../sideBare/header'
import { marqueData } from '@/content/header/marque'
const Header = () => {
    const status = useSelector((state: any) => state.counter.status);
    const dispatch = useDispatch();
    const menuRef = useRef<HTMLDivElement | null>(null)
    const openStatus = () => {
        dispatch(toggleStatus(!status))
    }
    return (
        <div className='fixed top-0 z-50 w-screen h-fit bg-gray-100 flex flex-col justify-between p-1'>
            <div className='w-full flex'>
                <div className='w-full flex justify-between items-center'>
                    <div className='relative w-[11rem] h-10 md:h-[3rem] lg:w-[12rem] lg:h-[3rem]'>
                        <Image src="/Images/Logo/logo1.png" alt="logo" fill className='object-contain' />
                    </div>
                    <div className='hidden w-[16rem] lg:flex justify-center items-center gap-2'>
                        <Link href="/" className='p-1 text-blue-950'>Home</Link>
                        <Link href="/about" className='p-1 text-blue-950'>About</Link>
                        <Link href="/contact" className='p-1 text-blue-950'>Contact</Link>
                        <Link href="/services" className='p-1 text-blue-950'>Services</Link>
                    </div>
                </div>
                <div ref={menuRef}
                    className='lg:hidden flex flex-col justify-center items-center gap-1.5 border border-cyan-950 rounded p-2'
                    onClick={openStatus}>
                    {/* Top line */}
                    <div className={`w-[25px] h-[2px] bg-cyan-950 transition-transform duration-300 ${status ? "rotate-45 translate-y-[4.5px]" : ""}`}></div>
                    {/* Middle line (hidden when active) */}
                    {!status && (
                        <div className="w-[25px] h-[2px] bg-cyan-950 transition-all duration-300"></div>
                    )}
                    {/* Bottom line */}
                    <div className={`w-[25px] h-[2px] bg-cyan-950 transition-transform duration-300 ${status ? "-rotate-45 -translate-y-[4.5px]" : ""}`}></div>
                </div>
            </div>
            <div className='w-full text-blue-950 animationOwner text-[13px] lg:text-[1rem]'><span>{marqueData.name} {marqueData.Conatact}</span></div>
            <HeaderMobile menuRefData={menuRef} />
        </div>
    )
}
export default Header
