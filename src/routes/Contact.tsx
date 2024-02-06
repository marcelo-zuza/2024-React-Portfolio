import Fiverr from '../assets/img/icons/fiverr.png'
import WhatsApp from '../assets/img/icons/whatsapp.png'
import ShakingHand from '../assets/img/shaking-cut.jpg'
import { useSpring, animated } from '@react-spring/web'

const Contact = () => {

    const LeftSide: any = useSpring({
        from: { opacity: 0, x: -1500 },
        to: { opacity: 1, x: 0 },
        config: { duration: 600 },
    })

    const RightSide: any = useSpring({
        from: { opacity: 0, x: 1500 },
        to: { opacity: 1, x: 0 },
        config: { duration: 600 },
    })

  return (
    <div className='py-8 px-4'>
        <p className="text-4xl text-center md:text-left py-2 text-white">Contato</p>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 py-4 text-white">
            <animated.div style={{...LeftSide}} className="col-span-1 grid place-items-center fade-in-element first-element
            ">
                <img className="h-3/4" src={ShakingHand} alt="" />
            </animated.div>
            <animated.div style={{...RightSide}} className="col-span-1 md:p-4 md:border-2 rounded-xl bg-neutral-900 fade-in-element third-element
            ">
                <p className="text-3xl text-center py-2 font-extrabold">CONTACT</p>
                <div className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols- place-items-center p-4 text-center md:text-left">
                    <div className="col-span-1 py-4 px-4 md:py-0 border-white border-2 md:border-0 rounded-xl flex flex-col justify-center content-center items-center hover:bg-sky-600 duration-500">
                        <div className="grid grid-cols-1 place-items-center">
                            <a className="" href="https://wa.me/5534991646500/"><img className="h-14 md:h-28" src={WhatsApp} alt="whatsapp" /></a>
                        </div>
                        <p className="py-2 text-xl">WhatsApp</p>
                    </div>

                </div>
            </animated.div>

        </div>
        <div className="my-10 grid grid-cols-1 place-items-center">
                <form className='text-white bg-neutral-900 mx-4 px-8 md:w-1/2 rounded-lg py-4'>
                    <h1 className="text-3xl text-center py-4 md:py-4">EMAIL</h1>
                    <div className="flex flex-col items-center text-black">
                        <input className='w-80 md:w-96 py-2 px-2 rounded-lg my-2' type="text" placeholder='Name' />
                        <input className='w-80 md:w-96 py-2 px-2 rounded-lg my-2' type="email" placeholder='Email adress' />
                        <input className='w-80 md:w-96 h-32 py-2 px-2 rounded-lg my-2' type="text" placeholder='Message' />
                        <button className="bg-sky-600 text-white py-2 px-4 text-xl rounded-lg hover:bg-white hover:text-sky-600 duration-500">Enviar</button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Contact