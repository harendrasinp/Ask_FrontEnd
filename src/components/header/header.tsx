"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { toggleStatus } from '@/redux/counterSclice'
const Header = () => {
    const status = useSelector((state: any) => state.counter.status);
    const dispatch = useDispatch();

    const openStatus = () => {
        dispatch(toggleStatus(!status))

    }
    return (
        <div className='w-full bg-gray-100 flex items-center justify-between p-3'>
            <div className='relative w-[11rem] h-[3rem] lg:w-[12rem] lg:h-[3rem]'><Image src="/Images/Logo/logo1.png" alt="logo" fill className='object-contain' /></div>
            <div className='hidden w-[16rem] lg:flex justify-center items-center gap-2'>
                <Link href="/" className='p-1 text-amber-50'>Home</Link>
                <Link href="/about" className='p-1 text-amber-50'>About</Link>
                <Link href="/contact" className='p-1 text-amber-50'>Contact</Link>
                <Link href="/services" className='p-1 text-amber-50'>Services</Link>
            </div>
            <div
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
    )
}
export default Header
