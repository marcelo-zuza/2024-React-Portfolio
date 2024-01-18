import React from 'react'
import WebDev from '../assets/img/WebDeveloping-sky700-neutral950.jpg'

const Services = () => {
  return (
    <div className='md:h-screen'>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 px-2 md:px-4 text-white">
            <div className="">
                <p className="text-4xl text-center md:text-left py-2">Serviços</p>
                <div className="order-last md:order-first col-span-1 md:grid grid-cols-2 gap-8 place-items-center fade-in-element first-element
                ">
                    <div className="col-span-1 rounded-full">
                        <div className="border-white border-2 px-8 py-4 my-4 rounded-xl text-center hover:bg-sky-600 duration-500 h-44">
                            <p className="font-bold text-xl">Website Empresarial</p>
                            <p>Coloque sua empresa na rede, divulgue serviços, esteja ao alcance de um click do seu cliente</p>
                        </div>
                        <div className="border-white border-2 px-8 py-4 my-4 rounded-xl text-center hover:bg-sky-600 duration-500 h-44">
                            <p className="font-bold text-xl">Landing page</p>
                            <p>Promova seu produto, seu curso, seu pacote através de uma sofisticada página que mostrará detalhadamente o que será vendido</p>
                        </div>   
                    </div>
                    <div className="col-span-1">
                        <div className="border-white border-2 px-8 py-4 my-4 rounded-xl text-center hover:bg-sky-600 duration-500 h-44">
                            <p className="font-bold text-xl">Portfólio Pessoal</p>
                            <p>Tenha uma página pessoal aonde seu feitos e realizações como profissional ou artista serão divulgados</p>                     
                        </div>
                        <div className="border-white border-2 px-8 py-4 my-4 rounded-xl text-center hover:bg-sky-600 duration-500 h-44">
                            <p className="font-bold text-xl">Blog Pessoal</p>
                            <p>Crie um Blog postagens sobre seu tema predileto e divulgue seu conteúdo na rede</p>
                        </div>
                    </div>

    
                </div>


            </div>
            <div className="order-first md:order-last col-span-1 text-center md:text-left fade-in-element third-element
            ">
                <img src={WebDev} alt="webdev" />
            </div>
        </div>
    </div>
  )
}

export default Services