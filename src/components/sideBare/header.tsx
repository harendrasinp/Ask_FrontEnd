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
    <div ref={clickRefInBar} className={`fixed top-20 md:top-15 right-0 bottom-0 bg-cyan-500/90 w-64 shadow-lg transform transition-transform duration-300 z-40 ${status ? "translate-x-0" : "translate-x-full"}`}>
      <div className='flex flex-col items-start justify-center gap-4 mt-5 px-2 '>
        <Link href={"/"} className='text-white'>Home</Link>
        <Link href={"/"} className='text-white'>Services</Link>
        <Link href={"/"} className='text-white'>AboutUs</Link>
        <Link href={"/"} className='text-white'>ContactUs</Link>
      </div>
    </div>
  )
}
export default HeaderMobile