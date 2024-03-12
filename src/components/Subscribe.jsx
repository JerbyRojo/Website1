import React from 'react'
import Sub from '../assets/subscribe.jpg'

const Subscribe = () => {
  return (
    <div className='w-full text-white bg-slate-950 px-4 py-16 text-center relative'>
      {/* Image background */}
      <img src={Sub} alt="/" className="absolute inset-0 w-full h-full object-cover opacity-25" />
      
      {/* Content */}
      <div className="relative z-10">
        <h1>Join Our DeFi Community</h1>
        <div className='py-4'>
          <input className='p-3 rounded-full mr-4 text-black' type="email" placeholder='Enter Email' />
          <button>Sign up</button>
        </div>
        <div className='flex items-center justify-center py-2'>
          <input className='mr-2' type="checkbox" />
          <p>Yes, I agree to receive email communications from DeFi.</p>
        </div>
      </div>
    </div>
  )
}

export default Subscribe