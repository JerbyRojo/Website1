import React from 'react'
import bgVid from '../assets/video.mp4'

const Hero = () => {
    return (
        <div className='w-full h-[90vh] top-[90px]'>
            <video className='object-cover h-full w-full absolute z-[-1]' src={bgVid} autoPlay loop muted />
            
            <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
                <h1 className='bg-gradient-to-r from-red-400 to-gray-400 text-transparent bg-clip-text'>Fire & Ash</h1>
                <h1 className='py-2'><span className='text-rose-800'>Trading </span>Protocol</h1>
                <p className='text-xl py-4'>Guaranteed liquidity trading for millions of users.</p>
                <div>
                    <button className='m-2'>Use Fire & Ash</button>
                    <button className='m-2'>FAQ</button>
                </div>
            </div>
            <div>
                <p className='text-center text-white text-2xl font-bold'>Total Volume Secured: $156,194,783,284.50</p>
            </div>
        </div>
    )
}

export default Hero