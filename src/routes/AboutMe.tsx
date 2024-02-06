import Me from '../assets/img/Me.jpeg'
import { useSpring, animated } from "@react-spring/web"



const AboutMe = () => {

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

const DownUp: any = useSpring({
    from: { opacity: 0, y: 500 },
    to: { opacity: 1, y: 0 },
    config: { duration: 600 },
})

  return (
    <div className='py-8 px-4 text-white'>
        <h1 className='text-4xl'>About me</h1>
        <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-2 py-2 gap-14">
            <animated.div style={{...LeftSide}} className="cols-span-1 text-base md:text-lg">
                <p className='py-0 text-2xl font-bold'>Full-Stack Web and Mobile Developer</p>
                <p className='py-0 text-2xl font-bold'>React.js | Node.Js | React Native</p>
                <p className='py-2 text-justify'>
                As a web and mobile developer who's deeply immersed in technologies like React and Node.js, my journey revolves around crafting digital solutions that truly stand out. I'm driven by a genuine passion for innovation and problem-solving, constantly seeking ways to turn concepts into tangible, user-friendly experiences. From brainstorming ideas to bringing them to life through code, I thrive on the creative process of building web and mobile applications. With each project, my aim is not just to meet expectations but to exceed them, infusing each product with creativity, efficiency, and a touch of excellence.</p>
 
                <div className="my-4">
                  <a className='bg-sky-600 text-white py-3 px-5 rounded-full hover:bg-white hover:text-sky-600 duration-500' href="https://www.linkedin.com/in/marcelo-zuza/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                </div>


            </animated.div>
       
            <animated.div style={{...RightSide}} className="cols-span-1 flex flex-1 justify-center">
                <img src={Me} alt="Me" className='rounded-3xl h-96' />
            </animated.div>

        </div>
    </div>
  )
}

export default AboutMe