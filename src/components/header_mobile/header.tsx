"use client"
import React from 'react'
import { useSelector } from 'react-redux'
const HeaderMobile = () => {
    const status = useSelector((state: any) => state.counter.status);
  return (
    <div className={`bg-cyan-950 h-screen w-full shadow-lg transform transition-trasform duration-300 z-50
    ${status ? "translate-x-0" : "translate-x-full"}`}>
        
    </div>
  )
}

export default HeaderMobile