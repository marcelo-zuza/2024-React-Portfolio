import Website from '../assets/img/responsiveWebSite-sky700-neutral950.jpg'
import whatsApp from '../assets/img/icons/whatsapp.png'
import { Link } from 'react-router-dom'
import { useSpring, animated } from '@react-spring/web'

const About = () => {

  const showImage = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 3000 },
  })

  const textRight = useSpring({
    from: { opacity: 0, x: 500 },
    to: { opacity: 1, x: 0 },
    config: { duration: 500 },
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 py-0 md:py-20 px-2 pb-0 md:px-4">
        <animated.div style={{...showImage}} className="col-span-1 grid grid-cols-1 place-items-center md:place-content-start fade-in-element first-element
        ">
            <img className="md:h-full" id="animateDiv" src={Website} alt="website" />
        </animated.div>

        <animated.div style={{...textRight}} className="col-span-1 text-center md:text-left md:pt-12 fade-in-element third-element text-white
        ">
            <p className="text-4xl py-2">Faça parte desta Rede Mundial</p>
            <p className="text-base py-2"><span className="font-bold">Seja você um empreendedor que busca estabelecer sua presença online, uma empresa que deseja renovar seu site corporativo ou um indivíduo em busca de uma página pessoal impressionante,</span> estamos aqui para ajudar. Ofereço soluções sob medida que unem design moderno, funcionalidade eficiente e uma experiência do usuário excepcional.</p>
            <p className="text-base py-2">Juntos, vamos criar uma homepage que reflete sua visão e alcança seus objetivos online. Comece a sua jornada conosco e descubra como podemos fazer a diferença no mundo digital!</p>
            <div className="py-4">
                <Link to="/aboutme" className="bg-sky-600 my-4 py-4 px-4 md:py-4 md:px-6 rounded-full border-white  text-white hover:bg-white hover:text-neutral-900 duration-500">Sobre mim</Link>
            </div>
        </animated.div>
        <div className="fixed bottom-52 right-2 md:bottom-4 md:right-4 z-10">
          <a href="https://wa.me/5534991646500/"><img className="h-10 md:h-16 hover:h-24 duration-700" src={whatsApp} alt="whatsapp" /></a>
        </div>  
    </div>
  )
}

export default About