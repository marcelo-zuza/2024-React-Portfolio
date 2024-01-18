// components
import Hero from "../components/Index/Hero"
import whatsApp from '../assets/img/icons/whatsapp.png'


const Index = () => {
  return (
    <div className="h-full md:h-full">
        <Hero />
        <div className="fixed bottom-72 right-2 md:bottom-4 md:right-4 z-10">
          <a href="https://wa.me/5534991646500/"><img className="h-10 md:h-16 hover:h-24 duration-700" src={whatsApp} alt="whatsapp" /></a>
        </div>
    </div>
  )
}

export default Index