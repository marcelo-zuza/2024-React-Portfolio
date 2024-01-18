import MZ from '../../assets/img/logo-neutral950-cut.jpg'

const Footer = () => {
  return (
    <div className='py-8'>
        <div className="grid grid-cols-1 place-items-center">
            <div className="py-2">
                <img className="h-16" src={MZ} alt="mz" />
            </div>
            <p className="text-white md:text-xl hover:underline duration-700"><a href="https://www.linkedin.com/company/marcelo-zuza-webdevelopment/"><span className="font-bold text-sky-600">MARCELO ZUZA</span></a></p>
            <p className="text-white md:text-xl hover:underline duration-700"><a href="https://www.linkedin.com/company/marcelo-zuza-webdevelopment/"><span className="font-bold text-sky-600">Web & Mobile</span></a></p>
            <p className="text-base text-white">Todos os direitos reservados. <span className="font-bold">2023</span></p>
        </div>
    </div>
  )
}

export default Footer