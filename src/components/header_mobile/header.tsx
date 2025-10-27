"use client"
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { useRef, useEffect } from 'react'
import { toggleStatus } from '@/redux/counterSclice'

interface HeaderMobileProps {
  menuRefData: React.RefObject<HTMLDivElement | null>;
}

const HeaderMobile = ({ menuRefData }: HeaderMobileProps) => {
  const status = useSelector((state: any) => state.counter.status);
  const dispatch = useDispatch()
  const clickRefInBar = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (clickRefInBar.current && clickRefInBar.current.contains(event.target as Node) || menuRefData.current && menuRefData.current.contains(event.target as Node)) {
        return
      }
      dispatch(toggleStatus(false))

    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [])
  return (
    <div ref={clickRefInBar}className={`fixed bg-black/90 top-18 right-0 h-full w-64 shadow-lg transform transition-transform duration-500 ease-in-out z-50 ${status ? 'translate-x-0' : 'translate-x-full'}`}>
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