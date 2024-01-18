import React from 'react'

const Sites = () => {
  return (

    <div className="md:grid grid-cols-1 md:grid-cols-2 py-4 gap-16 text-white">
        <div className="col-span-1">
            <div className="py-4 md:py-4">
                <p className="text-2xl text-center py-4">Clínica Médica</p>
                <iframe className="w-full h-96 rounded-2xl" src="https://marcelo-zuza.github.io/clinica-sao-patricio/"></iframe>
                <div className="grid grid-cols-1 place-items-center">
                    <a href="https://marcelo-zuza.github.io/clinica-sao-patricio/" className="bg-sky-600 mt-4 py-2 px-4 md:py-4 md:px-6 rounded-full border-white  text-white hover:bg-white hover:text-sky-600 duration-500 ">Visite o site</a>
                </div>
                <div className="py-4 md:py-4">
                    <p className="text-2xl text-center py-4">Escritório de Arquitetura</p>
                    <iframe className="w-full h-96 rounded-2xl" src="https://marcelo-zuza.github.io/imovi-architecture/"></iframe>
                    <div className="grid grid-cols-1 place-items-center">
                        <a href="https://marcelo-zuza.github.io/imovi-architecture/" className="bg-sky-600 mt-4 py-2 px-4 md:py-4 md:px-6 rounded-full border-white  text-white hover:bg-white hover:text-sky-600 duration-500 ">Visite o site</a>
                    </div>
                </div>

            </div>
        </div>
        <div className="col-span-1">
            <div className="py-4 md:py-4">
                <p className="text-2xl text-center py-4">Escola de Línguas</p>
                <iframe className="w-full h-96 rounded-2xl" src="https://marcelo-zuza.github.io/manchester-idiomas/"></iframe>
                <div className="grid grid-cols-1 place-items-center">
                    <a href="https://marcelo-zuza.github.io/manchester-idiomas/" className="bg-sky-600 mt-4 py-2 px-4 md:py-4 md:px-6 rounded-full border-white  text-white hover:bg-white hover:text-sky-600 duration-500 ">Visite o site</a>
                </div>
            </div>
            <div className="py-4 md:py-4">
                <p className="text-2xl text-center py-4">Intensivo de Inglês</p>
                <iframe className="w-full h-96 rounded-2xl" src="https://mzuza-fast-english.vercel.app/"></iframe>
                <div className="grid grid-cols-1 place-items-center">
                    <a href="https://mzuza-fast-english.vercel.app/" className="bg-sky-600 mt-4 py-2 px-4 md:py-4 md:px-6 rounded-full border-white  text-white hover:bg-white hover:text-sky-600 duration-500 ">Visite o site</a>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Sites