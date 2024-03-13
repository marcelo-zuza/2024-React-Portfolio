import { useSpring, animated } from "@react-spring/web"

const Apps = () => {

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
                    <p className="text-2xl text-center py-4">Unsplash API Photo Search</p>
                    <iframe className="w-full h-96 rounded-2xl" src="https://mz-unsplash-search.vercel.app/"></iframe>
                    <div className="flex flex-wrap justify-center gap-4">

                        <a href="https://mz-unsplash-search.vercel.app/" className="bg-sky-600 mt-4 py-2 px-4 md:py-4 md:px-6 rounded-full border-white  text-white hover:bg-white hover:text-sky-600 duration-500" target="_blank" rel="noopener noreferrer">Visit</a>
                        <a href="https://github.com/marcelo-zuza/Unsplash-photo-search" className="bg-sky-600 mt-4 py-2 px-4 md:py-4 md:px-6 rounded-full border-white  text-white hover:bg-white hover:text-sky-600 duration-500" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    </div>
                </animated.div>
              </div>

              <div className="py-4 md:py-4">
                <animated.div style={{...LeftSide}}>
                    <p className="text-2xl text-center py-4">World Clock</p>
                    <iframe className="w-full h-96 rounded-2xl" src="https://mz-worldclock.vercel.app/"></iframe>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://mz-worldclock.vercel.app/" className="bg-sky-600 mt-4 py-2 px-4 md:py-4 md:px-6 rounded-full border-white  text-white hover:bg-white hover:text-sky-600 duration-500" target="_blank" rel="noopener noreferrer">Visit</a>
                        <a href="https://github.com/marcelo-zuza/WorldClock" className="bg-sky-600 mt-4 py-2 px-4 md:py-4 md:px-6 rounded-full border-white  text-white hover:bg-white hover:text-sky-600 duration-500" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    </div>
                </animated.div>
              </div>

              
            </div>
  
            <div className="col-span-1">
              <div className="py-4 md:py-4">
                <animated.div style={{...RightSide}}>
                    <p className="text-2xl text-center py-4">Android/iOS Shopping List App</p>
                    <iframe className="w-full h-96 rounded-2xl" src="https://shopping-list-app-five.vercel.app/"></iframe>
                    <div className="flex flex-wrap justify-center gap-4">

                        <a href="https://shopping-list-app-five.vercel.app/" className="bg-sky-600 mt-4 py-2 px-4 md:py-4 md:px-6 rounded-full border-white  text-white hover:bg-white hover:text-sky-600 duration-500" target="_blank" rel="noopener noreferrer">Visit</a>
                        <a href="https://github.com/marcelo-zuza/expo-shoppingList" className="bg-sky-600 mt-4 py-2 px-4 md:py-4 md:px-6 rounded-full border-white  text-white hover:bg-white hover:text-sky-600 duration-500" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    </div>
                </animated.div>
              </div>
            </div>
    </div>
  )
}

export default Apps