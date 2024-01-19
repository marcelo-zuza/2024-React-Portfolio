import { Link } from 'react-router-dom'
import YourIdeaCut from '../../assets/img/yourIdea-cut.jpg'
import YourIdea from '../../assets/img/yourIdea-cut.jpg'
import { useSpring, animated } from "@react-spring/web"




const Hero = () => {

    const LeftSide: any = useSpring({
        from: { opacity: 0, x: 50 },
        to: { opacity: 1, x: 0 },
        config: { duration: 400 },
    })

    const RightSide: any = useSpring({
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0 },
        config: { duration: 400 },
    }) 

  return (
    <div className="py-4 px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <animated.div style={{...LeftSide}} className="col-span-1">
                <div className="md:py-24">
                    <p className="hidden md:block text-center md:text-left text-xl font-extrabold md:text-xl text-white py-0 md:py-0 fade-in-element first-element
                    ">MARCELO ZUZA <span className='text-sky-600'>WEB & MOBILE</span></p>
                    <div className="fade-in-element second-element  
                    ">
                        <p className="text-center md:text-left text-4xl md:text-7xl text-white py-0 md:py-0">Transforme</p>
                        <p className="text-center md:text-left text-4xl md:text-7xl text-white py-0 md:py-0">Seu Negócio em</p>
                        <p className="text-center md:text-left text-4xl md:text-7xl text-sky-600 py-0 md:py-0">Realidade Digital</p>
                    </div>

                    <div className=" fade-in-element third-element
                    ">
                        <p className="text-center md:text-left text-lg md:text-2xl py-1 md:py-2 text-white">Coloque sua marca na Rede Mundial de Computadores </p>
                        <div className="hidden md:flex flex-1 gap-6">
                            <a href="/about" className="bg-sky-600 border-1 md:py-4 md:px-6 rounded-full border-white  text-white hover:bg-white hover:text-neutral-900 duration-500">Conheça mais</a>
                        </div>
                    </div>


                </div>
            </animated.div>
            <animated.div style={{...RightSide}} className="hidden cols-span-1 md:flex flex-1 justify-center">
                 {/*<Carousel />*/}
                <img src={YourIdea} className='bg-black h-3/4' alt="youridea" />
            </animated.div>

            <div className="cols-span-1 grid place-items-center -mt-10 md:hidden">
                <img className="h-3/4" src={YourIdeaCut} alt="" />
            </div>

            <div className="grid grid-rows-2 md:hidden place-items-center pt-4 -mt-14">
                <div className="row-span-1 pb-3">
                    <p className="block md:hidden text-center md:text-left text-xl font-extrabold md:text-xl text-white py-0 -mb-2 md:py-0">MARCELO ZUZA</p>
                    <p className="block md:hidden text-center md:text-left text-xl font-extrabold md:text-xl text-white py-0 -mb-2 md:py-0">WEB & MOBILE</p>
                </div>
                <Link to="/about" className="bg-sky-600 text-white py-4 px-4 rounded-full border-white">Conheça mais</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Hero