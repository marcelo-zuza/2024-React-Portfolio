
import Me from '../assets/img/Me.jpeg'


const AboutMe = () => {
  return (
    <div className='py-8 px-4 text-white'>
        <h1 className='text-4xl'>Sobre mim</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 py-4 gap-14">
            <div className="cols-span-1 text-xl">
                <p className='py-4'>Desenvolvedor Full-Stack e Mobile com foco em React.js, React Native e Node.js</p>
                <p className='py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quisquam impedit, doloremque pariatur amet natus excepturi inventore ut, asperiores at nostrum dolor. Magni expedita fugit sit nisi natus obcaecati alias?</p>
                <div className="grid grid-cols-4">
                <div className="col-span-1">

                </div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>

            </div>
            </div>

            <div className="cols-span-1 flex flex-1 justify-center">
                <img src={Me} alt="Me" className='rounded-3xl h-3/4' />
            </div>

        </div>
    </div>
  )
}

export default AboutMe