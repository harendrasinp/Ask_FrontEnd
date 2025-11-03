import About from "@/components/about/About"
import Hero from "@/components/hero/hero"
import Services from "@/components/services/services"
import Contact from "@/components/contact/Contact"
import Plans from "@/components/plans/Plans"
const Home = () => {
  return (
    <>
     <Hero />
     <About/>
     <Services/>
     <Plans/>
     <Contact/>
    </>
  )
}

export default Home