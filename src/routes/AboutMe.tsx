import Me from '../assets/img/Me.jpeg'


const AboutMe = () => {
  return (
    <div className='py-8 px-4 text-white'>
        <h1 className='text-4xl'>Sobre mim</h1>
        <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-2 py-2 gap-14">
            <div className="cols-span-1 text-base md:text-lg">
                <p className='py-2 text-2xl font-bold'>Desenvolvedor Full-Stack e Mobile com foco em React.js, React Native e Node.js</p>
                <p className='py-2'>Desenvolvo sites e aplicações Web e Mobile para emprendedores que pretendem expandir seu raio de atuação através da rede mundial de computadores. Meu trabalho consiste em traduzir para o meio digital o sonho de cada enpresário de inserir seu negócio na internet com sofisticação e desempenho.</p>
                <p className='py-2'>Através das tecnologias mais utilizadas atualmente no meio tecnológico, desenvolvo minusciosamente interfaces de usabilidade e interatividade que proporcionem ao cliente uma experiência marcante</p>
                <div className="my-4">
                  <a className='bg-sky-600 text-white py-3 px-5 rounded-full hover:bg-white hover:text-sky-600 duration-500' href="https://www.linkedin.com/in/marcelo-zuza/" target="_blank" rel="noopener noreferrer">Acesse meu Linkedin</a>
                </div>



                <div className="grid grid-cols-4">
                <div className="col-span-1">

                </div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>

            </div>
            </div>

            <div className="cols-span-1 flex flex-1 justify-center">
                <img src={Me} alt="Me" className='rounded-3xl h-96' />
            </div>

        </div>
    </div>
  )
}

export default AboutMe