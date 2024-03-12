import React from 'react'
import Terminal from '../assets/terminal.png'

const Developers = () => {
  return (
    <div className='w-full text-white bg-slate-950'>
        <div className='max-w-[1240px] mx-auto px-4 py-16 md:flex'>
            <div>
            <h1 className='my-2 text-transparent bg-gradient-to-r from-red-400 to-gray-400 bg-clip-text'>Superpowers for DEFI developers</h1>
                <p>
                    Checkout the <span className='text-rose-600'>documentation</span>, the <span className='text-rose-600' >quick start</span> or a guide below to integrate your project with thousands of tokens and billions of liquidity.
                </p>
            </div>
            <div className='flex justify-center w-full py-16'>
                <img className='max-w-[250px] shadow-lg shadow-rose-500/50' src={Terminal} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Developers