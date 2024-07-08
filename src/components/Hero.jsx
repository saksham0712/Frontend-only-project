import React from 'react'
import leftImg from '../assets/hero/rightimg.svg'


const Hero = () => {
    return (
        <>
            <div className="h-[90vh] w-full bg-slate-100 dark:bg-[#222831] flex flex-wrap justify-around items-center text-center">
                <div className="left flex flex-col items-center md:items-start gap-6">
                    <div><h1 className='text-gray-700 text-5xl md:text-7xl font-semibold dark:text-gray-100'>Lessons and insights</h1></div>
                    <div><h1 className='text-green-600 text-5xl md:text-7xl font-semibold'>from 8 years</h1></div>
                    <div><p className='text-gray-800 mx-4 md:m-1 dark:text-gray-100'>Where to grow business as a photographer: site or social media?</p></div>
                    <div><button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-sm text-lg px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Register</button>
                    </div>
                </div>
                <div className="right"><div className="rightImg w-[55vw] md:w-auto"><img src={leftImg} alt="hero image" /></div></div>
            </div>
        </>
    )
}

export default Hero
