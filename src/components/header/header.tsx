"use client"
import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { toggleStatus } from '@/redux/counterSclice'
import HeaderMobile from '../sideBare/header'
import { marqueData } from '@/content/header/marque'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    const status = useSelector((state: any) => state.counter.status);
    const dispatch = useDispatch();
    const menuRef = useRef<HTMLDivElement | null>(null)
    const openStatus = () => {
        dispatch(toggleStatus(!status))
    }
    return (
        <div className='fixed top-0 z-50 w-full h-fit bg-gray-100'>
            <div className='w-full flex p-2'>
                <div className='w-full flex justify-between items-center'>
                    <div className='relative w-[11rem] h-11 md:h-[3rem] lg:w-[12rem] lg:h-[3rem]'>
                        <Image src="/Images/Logo/Logo2.png" alt="logo" fill className='object-contain' />
                    </div>
                    <div className=' absolute right-[10rem] hidden w-[16rem] lg:flex justify-center items-center gap-2'>
                        <Link href="/" className='p-1 text-blue-950'>Home</Link>
                        <Link href="/#Service" className='p-1 text-blue-950'>Services</Link>
                        <Link href="/#plans" className='p-1 text-blue-950'>Plans</Link>
                        <Link href="/#aboutUs" className='p-1 text-blue-950'>About</Link>
                        <Link href="/#contactus" className='p-1 text-blue-950'>Contact</Link>
                    </div>
                </div>
                <div ref={menuRef}
                    className='lg:hidden flex flex-col justify-center items-center gap-1.5 border border-cyan-950 rounded p-3'
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
            <div className="w-full text-blue-950 animationOwner whitespace-nowrap text-[14px] lg:text-[1rem] flex items-center gap-2">
                <span>{marqueData.name}</span>
                <FontAwesomeIcon icon={faPhone}/>
                <span>{marqueData.Conatact},</span>
                <FontAwesomeIcon icon={faEnvelope}/>
                <span>{marqueData.email}</span>
            </div>
            <HeaderMobile menuRefData={menuRef} />
        </div>
    )
}
export default Header
