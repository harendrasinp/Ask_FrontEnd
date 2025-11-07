
import { ServiceCard} from '@/content/services/servicesCard'
import { titleMessage } from '@/content/services/titleMessage'
const Services = () => {
  return (
    <div id="Service" className='scroll-mt-15 relative bg-amber-50 w-full h-full flex flex-col justify-center items-center overflow-hidden'>
      <span className='absolute text-amber-200 font-bold text-[1.2rem] top-8 left-4 lg:text-[2rem] lg:left-15 lg:top-25 lg:text-2xl'>Services We Provide</span>
      <img src="/Images/Services/Service-bg1.png" alt="services background" className='w-full' />
      <div className='absolute top-2 right-1 lg:top-8 lg:right-4 w-[10rem] h-[10rem]'>
        <img src="/Images/Services/solarbg.webp" alt="services background" className='w-[7rem] h-[7rem] lg:w-full lg:h-full' />
      </div>
      <div className='lg:absolute top-[5rem] w-[22rem] lg:top-[25rem] lg:w-[35rem]'>
        <p className='text-justify text-blue-950 lg:text-amber-700 lg:text-[1.2rem]'>{titleMessage.message}</p>
      </div>
      <div className='p-5 h-fit flex flex-col gap-8 justify-center items-center lg:grid lg:grid-cols-3'>
        {ServiceCard.map((service, index) => (
          //  <div key={index} className='bg-cyan-950 w-fit h-fit p-3 rounded-2xl shadow-cyan-950 shadow-2xl text-justify'>
          <div key={index} className='bg-[url("/Images/Services/cardbg.png")] bg-cover bg-center bg-no-repeat w-fit h-full p-3 text-justify rounded-[0.5rem] lg:w-[20rem] lg:h-[18rem]'>
            <h4 className='text-orange-300 font-semibold text-[1.2rem]'>{service.title}</h4>
            <p className="text-white bg-card_bgColor/45 backdrop-blur-sm p-2 rounded-[0.5rem]">
              {service.description}
            </p>
          </div>))
        }
      </div>
    </div>
  )
}

export default Services