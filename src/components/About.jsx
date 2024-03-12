import React from 'react'
import { SiHiveBlockchain, SiFsecure, SiStrapi } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
import AboutCard from './AboutCard';

const About = () => {
    return (
        <div className='w-full bg-slate-950 text-white text-center'>
            <div className='max-w-[1240px] mx-auto px-4 py-16 '>
                <div>
                    <h1 className='py-4 bg-gradient-to-r from-rose-200 to-pink-700 text-transparent bg-clip-text'>A Growing Protocol System</h1>
                    <p className='py-4 text-xl'>
                        The defi protocol system empowers developers, liquidity providers, and traders to participate in a financial marketplace that is open and accessible to all.
                    </p>

                    {/* Card Container */}
                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>

                        {/* Card */}
                        <AboutCard icon={<SiHiveBlockchain className='animate-spin' size={40} />} heading='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and cryptographic proods to conenct highly accurate and available data/APIs to any smart contract.' />

                        <AboutCard icon={<SiStrapi className='animate-spin' size={40} />} heading='Securing Data Flow' text='Utilize Strapi to build powerful APIs quickly and easily, ensuring reliability and security for your network.' />

                        <AboutCard icon={<SiFsecure className='animate-spin' size={40} />} heading='Safeguarding Network Assets'
                            text='Employ Fsecures advanced security solutions to safeguard your network against tampering and unauthorized access.' />

                        <AboutCard icon={<VscServerProcess className='animate-spin' size={40} />} heading='Optimizing Data Handling'
                            text='Optimize server processing for reliability and performance, ensuring seamless integration with smart contracts and data/APIs.' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About