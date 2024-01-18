import { useState } from 'react'
import Sites from '../components/Projects/Sites'
import Apps from '../components/Projects/Apps'

const Projects = () => {

    const [sites, setSites] = useState<boolean>(true)
    const [apps, setApps] = useState<boolean>(false)

    const toApps = () => {
        setSites(false)
        setApps(true)
    }

    const toSites = () => {
        setApps(false)
        setSites(true)
    }

  return (
    <div className='px-4 md:px-8 h-full'>
        <p className="text-4xl text-center md:text-left py-2 text-white">Conheça meus Projetos</p>
        <div className="flex flex-row justify-center items-center gap-4 py-4">
            <button className="bg-sky-600 mt-4 py-2 px-4 md:py-4 md:px-6 rounded-full border-white  text-white hover:bg-white hover:text-sky-600 duration-500" onClick={toSites}>Sites</button>
            <button className="bg-sky-600 mt-4 py-2 px-4 md:py-4 md:px-6 rounded-full border-white  text-white hover:bg-white hover:text-sky-600 duration-500" onClick={toApps}>Aplicações Web</button>
        </div>

        {sites &&
            <Sites />
        }
        {apps &&
            <Apps />
        }

    </div>
  )
}

export default Projects