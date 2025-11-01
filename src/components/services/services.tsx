"use client"
import { motion } from "motion/react"
import { ServiceCard } from '@/content/services/servicesCard'
import { useRef } from "react"
const Services = () => {
  const scrollRef = useRef(null)
  return (
    <div className='relative bg-services_bgColor w-full h-fit flex flex-col justify-center items-center'>
      <span className='absolute text-amber-200 font-bold text-[1.2rem] top-8 left-4 lg:text-[2rem] lg:left-15 lg:top-25 lg:text-2xl'>Services We Provide</span>
      <img src="/Images/Services/Service-bg1.png" alt="services background" className='w-full' />
      <div className='absolute top-8 right-4 w-[10rem] h-[10rem]'>
        <img src="/Images/Services/solarbg.webp" alt="services background" className='w-full h-full' />
      </div>
      <div className='p-5 h-fit flex flex-col gap-8 justify-center items-center'>
        {ServiceCard.map((service, index) => (
          //  <div key={index} className='bg-cyan-950 w-fit h-fit p-3 rounded-2xl shadow-cyan-950 shadow-2xl text-justify'>
          <motion.div key={index} className='bg-[url("/Images/Services/cardbg.png")] bg-cover bg-center bg-no-repeat w-fit h-full p-3 text-justify rounded-[0.5rem]'
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once:false, amount: 0.3 }}
          >
            <h4 className='text-amber-50 font-semibold'>{service.title}</h4>
            <p className="text-black bg-card_bgColor/45 backdrop-blur-sm p-2 rounded-[0.5rem]">
              {service.description}
            </p>
          </motion.div>))
        }
      </div>
    </div>
  )
}

export default Services