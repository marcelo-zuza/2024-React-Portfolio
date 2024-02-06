import { Link } from "react-router-dom"
import { useState } from "react"
//images
import Logo from '../assets/img/logo-neutral900-cut.jpg'
import GHLogo from '../assets/img/icons/github.png'
import Menu from '../assets/img/menu.png'



const NavBar = () => {

    const [open, setOpen] = useState(false)

    const openMenu = () => {
        if(open === false){
            setOpen(true)
        }else{
            setOpen(false)
        }
    }


  return (
    <div className="py-0 md:px-4 bg-neutral-900">
            <div className="flex flex-1 items-center justify-start absolute -my-2 md:-my-0 md:top-3">
                    <Link to="/"><img className="h-20 md:h-14 px-2 py-3 md:py-0 md:px-0" src={Logo} alt="logo" /></Link>
            </div>
            <div className="hidden md:block content-center flex-1 text-xl py-6">
                <nav className="flex flex-1 content center">
                    <ul className="flex flex-1 justify-end content-center gap-4 text-white">
                        <li><Link className="hover:underline duration-500" to="/">Home</Link></li>
                        <li><Link className="hover:underline duration-500" to="/about">About</Link></li>
                        <li><Link className="hover:underline duration-500" to="/services">Serviços</Link></li>
                        <li><Link className="hover:underline duration-500" to="/projects">Projects</Link></li>
                        <li><Link className="hover:underline duration-500" to="/contact">Contact</Link></li>
                        <div className="-my-3">
                            <li><a href="https://github.com/marcelo-zuza" target="_blank" rel="noopener noreferrer"><img className="bg-white h-16 rounded-lg" src={GHLogo} alt="" /></a></li>
                        </div>

                    </ul>
                </nav>
            </div>
            <div className="flex md:hidden items-end text-xl">
                <nav className="flex-1">
                    <div className="flex flex-1 justify-end">
                        <div className="flex flex-col">
                            <button onClick={openMenu} className="items-end"><img className="h-16 px-0" src={Menu} alt="fabar" /></button>
                            {open && (
                                <div>
                                    <ul className="flex flex-col w-full justify-end content-center gap-4 text-white absolute top-20 left-4 bg-neutral-950">
                                        <li><Link onClick={openMenu} className="hover:underline duration-500" to="/">Home</Link></li>
                                        <li><Link onClick={openMenu} className="hover:underline duration-500" to="/about">About</Link></li>
                                        <li><Link onClick={openMenu} className="hover:underline duration-500" to="/services">Services</Link></li>
                                        <li><Link onClick={openMenu} className="hover:underline duration-500" to="/projects">Projects</Link></li>
                                        <li><Link onClick={openMenu} className="hover:underline duration-500" to="/contact">Contact</Link></li>
                                        <div className="-my-3">
                                            <li><a href="https://github.com/marcelo-zuza" target="_blank" rel="noopener noreferrer"><img className="bg-white h-16 rounded-lg" src={GHLogo} alt="" /></a></li>
                                        </div>
                                    </ul>
                                </div>
                            )}
                        </div>

                    </div>
                </nav>
            </div>        
    </div>
  )
}

export default NavBar