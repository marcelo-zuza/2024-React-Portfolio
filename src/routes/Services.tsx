import WebDev from '../assets/img/WebDeveloping-sky700-neutral950.jpg'
import { useSpring, animated } from '@react-spring/web'




const Services = () => {
    // const firstBlock = useSpring({
    //     from: { x: -200},
    //     to: {x: 0},
    //     config: { duration: 300}
    
    // })
    // const secondBlock = useSpring({
    //     from: { x: -300},
    //     to: {x: 0},
    //     config: { duration: 300}
    
    // })
    // const thirdBlock = useSpring({
    //     from: { x: -400},
    //     to: {x: 0},
    //     config: { duration: 300}
    
    // })
    // const fourthBlock = useSpring({
    //     from: { x: -500},
    //     to: {x: 0},
    //     config: { duration: 300}
    
    // })

    const toUp = useSpring({
        from: { y: 500 },
        to: { y: 0 },
        config: { duration: 500 },
    })

    const showImage = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 2000 },
      })


  return (
    <div className='md:h-screen'>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 px-2 md:px-4 text-white">
            <div className="">
                <p className="text-4xl text-center md:text-left py-2">Serviços</p>
                <animated.div style={{...showImage}} className="order-last md:order-first col-span-1 md:grid grid-cols-2 gap-8 place-items-center fade-in-element first-element
                ">
                    <div className="col-span-1 rounded-full">
                        <animated.div className="border-white border-2 px-8 py-4 my-4 rounded-xl text-center hover:bg-sky-600 duration-500 h-44">
                            <p className="font-bold text-xl">Business Website</p>
                            <p>Put your company online, promote services, be just a click away from your customer</p>
                        </animated.div>
                        <animated.div className="border-white border-2 px-8 py-4 my-4 rounded-xl text-center hover:bg-sky-600 duration-500 h-44">
                            <p className="font-bold text-xl">Landing page</p>
                            <p>Promote your product, your course, your package through a sophisticated page that will show in detail what will be sold</p>
                            </animated.div>   
                    </div>
                    <div className="col-span-1">
                        <animated.div className="border-white border-2 px-8 py-4 my-4 rounded-xl text-center hover:bg-sky-600 duration-500 h-44">
                            <p className="font-bold text-xl">Personal Portfolio</p>
                            <p>Create a personal page where your accomplishments and achievements as a professional or artist will be showcased</p>                     
                            </animated.div>
                        <animated.div className="border-white border-2 px-8 py-4 my-4 rounded-xl text-center hover:bg-sky-600 duration-500 h-44">
                            <p className="font-bold text-xl">Blog Pessoal</p>
                            <p>Create a blog with posts about your favorite topic and share your content online</p>
                            </animated.div>
                    </div>
                </animated.div>
            </div>
            <animated.div style={{...toUp}} className="order-first md:order-last col-span-1 text-center md:text-left fade-in-element third-element
            ">
                <img src={WebDev} alt="webdev" />
            </animated.div>
        </div>
    </div>
  )
}

export default Services