import Me from '../assets/img/Me.jpeg'
import { useSpring, animated } from "@react-spring/web"
import { Link } from 'react-router-dom'
// icons
import ReactJs from '../assets/img/icons/reactjs.png'
import ReactNative from '../assets/img/icons/reactNative.png'
import Typescript from '../assets/img/icons/typescript.png'
import NodeJs from '../assets/img/icons/nodeJS.png'
import DockerIcon from '../assets/img/icons/docker.png'
import AwsIcon from '../assets/img/icons/aws.png'
import MongoDBIcon from '../assets/img/icons/mongo.png'



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



  return (
    <div className='py-8 px-4 text-white'>
        <h1 className='text-4xl text-center md:text-left'>About me</h1>
        <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-2 py-2 gap-14">
            <animated.div style={{...LeftSide}} className="cols-span-1 text-base md:text-lg">
                <p className='py-0 text-2xl'>Full-Stack Web and Mobile Developer</p>

                <div className="flex justify-center content-center py-2 md:py-4 gap-0 md:gap-4">
                    <div className="flex flex-col">
                      <img className='h-12 w-12 md:h-20 md:w-20' src={Typescript} alt="" />
                      <p className='hidden md:block text-center text-sm'>TypeScript</p>
                    </div>
                    <div>
                      <img className='h-12 w-12 md:h-20 md:w-20' src={ReactJs} alt="" />
                      <p  className='hidden md:block text-center text-sm'>React.js</p>
                    </div>
                    <div className="flex flex-col">
                      <img className='h-12 w-12 md:h-20 md:w-20' src={ReactNative} alt="" />
                      <p className='hidden md:block text-center text-sm'>React Native</p>
                    </div>
                    <div className="flex flex-col">
                      <img className='h-12 w-12 md:h-20 md:w-20' src={NodeJs} alt="" />
                      <p className='hidden md:block text-center text-sm'>Node.JS</p>
                    </div>
                    <div className="flex flex-col">
                      <img className='h-12 w-12 md:h-20 md:w-20' src={MongoDBIcon} alt="" />
                      <p className='hidden md:block text-center text-sm'>MongoDB</p>
                    </div>
                    <div className="flex flex-col">
                      <img className='h-12 w-12 md:h-20 md:w-20' src={AwsIcon} alt="" />
                      <p className='hidden md:block text-center text-sm'>AWS</p>
                    </div>
                    <div className="flex flex-col">
                      <img className='h-12 w-12 md:h-20 md:w-20' src={DockerIcon} alt="" />
                      <p className='hidden md:block text-center text-sm'>Docker</p>
                    </div>


                </div>
                <p className='py-2 text-justify font-light'>
                As a web and mobile developer who's deeply immersed in technologies like React and Node.js, my journey revolves around crafting digital solutions that truly stand out. I'm driven by a genuine passion for innovation and problem-solving, constantly seeking ways to turn concepts into tangible, user-friendly experiences. From brainstorming ideas to bringing them to life through code, I thrive on the creative process of building web and mobile applications. With each project, my aim is not just to meet expectations but to exceed them, infusing each product with creativity, efficiency, and a touch of excellence.</p>
 
                <div className="my-4 flex flex-row justify-center content-center md:justify-start md:content-start gap-2">
                  <a className='bg-sky-600 text-white py-3 px-5 rounded-full hover:bg-white hover:text-sky-600 duration-500' href="https://www.linkedin.com/in/marcelo-zuza/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                  <Link className='bg-sky-600 text-white py-3 px-5 rounded-full hover:bg-white hover:text-sky-600 duration-500' to="/projects" target="_blank" rel="noopener noreferrer">My projects</Link>
                </div>


            </animated.div>
       
            <animated.div style={{...RightSide}} className="cols-span-1 flex flex-1 justify-center">
                <img src={Me} alt="Me" className='rounded-3xl md:h-96' />
            </animated.div>

        </div>
    </div>
  )
}

export default AboutMe