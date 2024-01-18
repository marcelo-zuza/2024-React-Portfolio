import Fiverr from '../assets/img/icons/fiverr.png'
import WhatsApp from '../assets/img/icons/whatsapp.png'
import ShakingHand from '../assets/img/shaking-cut.jpg'

const Contact = () => {
  return (
    <div className='py-8 px-4'>
        <p className="text-4xl text-center md:text-left py-2 text-white">Contato</p>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 py-4 text-white">
            <div className="col-span-1 grid place-items-center fade-in-element first-element
            ">
                <img className="h-3/4" src={ShakingHand} alt="" />
            </div>
            <div className="col-span-1 md:p-4 md:border-2 rounded-xl bg-neutral-900 fade-in-element third-element
            ">
                <p className="text-2xl text-center py-2">Entre em contato para um orçamento</p>
                <div className="grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-2 place-items-center p-4 text-center md:text-left">
                    <div className="col-span-1 py-4 px-4 md:py-0 border-white border-2 md:border-0 rounded-xl h-80 md:h-60">
                        <div className="grid grid-cols-1 place-items-center">
                            <a className="" href="https://wa.me/5534991646500/"><img className="h-14 md:h-28" src={WhatsApp} alt="" /></a>
                        </div>
                        <p className="py-2 text-xl">Fale diretamente pelo WhatsApp</p>
                    </div>
                    <div className="col-span-1 py-4 px-4 md:py-0 border-white border-2 md:border-0 rounded-xl h-80 md:h-60">
                        <div className="grid grid-cols-1 place-items-center py-4">
                            <a className="" href="https://br.fiverr.com/marcelo_zuza"><img className="h-14 md:h-28" src={Fiverr} alt="" /></a>
                        </div>
                        <p className="pt-2 text-xl">Conheça minha seção no Fiverr</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact