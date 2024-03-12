import React, {useState}  from 'react'
import Logo from '../assets/logo.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FiMonitor, FiCode, FiUsers, FiInfo } from 'react-icons/fi'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
      setNav(!nav)
  }


  return (
    <div className='w-full h-[90px] bg-slate-950 text-gray-300'>
      <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div>
          {/* <h1 className='text-rose-900'>ROJO</h1> */}
          <img className="w-[100px] h-[100px]" src={Logo} alt="Fire & Ash" />
        </div>

        <div className='hidden md:flex'>
          <ul className='flex items-center text-white'>
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className='ml-4'>Use Fire & Ash</button>
          </ul>
        </div>

        {/* Hamurger Menu */}
        <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
      
        </div>


        {/* Mobile Menu */}
        <div className={ nav ? 'w-full bg-slate-950 text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>
          <ul className="grid grid-cols-auto gap-4 items-center justify-center">
            <li className="flex items-center"><FiMonitor size={20} className="mr-2" /> Platform</li>
            <li className="flex items-center"><FiCode size={20} className="mr-2" /> Developers</li>
            <li className="flex items-center"><FiUsers size={20} className="mr-2" /> Community</li>
            <li className="flex items-center"><FiInfo size={20} className="mr-2" /> About</li>
            <button className='ml-4'>Use Fire & Ash</button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar