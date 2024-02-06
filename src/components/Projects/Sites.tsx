import { useSpring, animated } from "@react-spring/web"

const Sites = () => {

    const LeftSide: any = useSpring({
            from: { opacity: 0, x: -1500 },
            to: { opacity: 1, x: 0 },
            config: { duration: 800 },
    })

    const RightSide: any = useSpring({
            from: { opacity: 0, x: 1500 },
            to: { opacity: 1, x: 0 },
            config: { duration: 800 },
    })

  return (

    <div className="md:grid grid-cols-1 md:grid-cols-2 py-4 gap-16 text-white">
        <div className="col-span-1">
            <div className="py-4 md:py-4">
                <animated.div style={{...LeftSide}}>
                    <p className="text-2xl text-center py-4">Clinic</p>
                    <iframe className="w-full h-96 rounded-2xl" src="https://marcelo-zuza.github.io/clinica-sao-patricio/"></iframe>
                    <div className="grid grid-cols-1 place-items-center">
                        <a href="https://marcelo-zuza.github.io/clinica-sao-patricio/" className="bg-sky-600 mt-4 py-2 px-4 md:py-4 md:px-6 rounded-full border-white  text-white hover:bg-white hover:text-sky-600 duration-500 ">Visit</a>
                    </div>
                </animated.div>
                <animated.div style={{...LeftSide}} className="py-4 md:py-4">
                    <p className="text-2xl text-center py-4">Architectural Firm</p>
                    <iframe className="w-full h-96 rounded-2xl" src="https://marcelo-zuza.github.io/imovi-architecture/"></iframe>
                    <div className="grid grid-cols-1 place-items-center">
                        <a href="https://marcelo-zuza.github.io/imovi-architecture/" className="bg-sky-600 mt-4 py-2 px-4 md:py-4 md:px-6 rounded-full border-white  text-white hover:bg-white hover:text-sky-600 duration-500 ">Visit</a>
                    </div>
                </animated.div>

            </div>
        </div>
        <div className="col-span-1">
            <animated.div style={{...RightSide}} className="py-4 md:py-4">
                <p className="text-2xl text-center py-4">Language School</p>
                <iframe className="w-full h-96 rounded-2xl" src="https://marcelo-zuza.github.io/manchester-idiomas/"></iframe>
                <div className="grid grid-cols-1 place-items-center">
                    <a href="https://marcelo-zuza.github.io/manchester-idiomas/" className="bg-sky-600 mt-4 py-2 px-4 md:py-4 md:px-6 rounded-full border-white  text-white hover:bg-white hover:text-sky-600 duration-500 ">Visit</a>
                </div>
            </animated.div>
            <animated.div style={{...RightSide}} className="py-4 md:py-4">
                <p className="text-2xl text-center py-4">English Course</p>
                <iframe className="w-full h-96 rounded-2xl" src="https://mzuza-fast-english.vercel.app/"></iframe>
                <div className="grid grid-cols-1 place-items-center">
                    <a href="https://mzuza-fast-english.vercel.app/" className="bg-sky-600 mt-4 py-2 px-4 md:py-4 md:px-6 rounded-full border-white  text-white hover:bg-white hover:text-sky-600 duration-500 ">Visit</a>
                </div>
            </animated.div>
        </div>
    </div>

  )
}

export default Sites