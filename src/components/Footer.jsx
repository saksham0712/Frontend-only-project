import React from 'react'
import logo from '../assets/Footer/logo.svg'
import insta from '../assets/Footer/insta.svg'
import dot from '../assets/Footer/dot.svg'
import twitter from '../assets/Footer/twitter.svg'
import youtube from '../assets/Footer/youtube.svg'
import send from '../assets/Footer/send.svg'

const Footer = () => {
    return (
        <div className='bg-[#263238] h-[110vh] md:h-[70vh] text-white flex flex-col md:flex-row items-center justify-around content-center'>
            <div className='w-[60vw] md:w-auto'>
                <div className='flex flex-col gap-4 w-auto md:w-[55%] text-center md:text-start'>

                    <img src={logo} className='w-52 h-20' alt="footer logo" />
                    <p>Copyright :&copy;2020 Saksham Verma. All rights reserved</p>
                    <div className='flex gap-4 mt-3 mx-auto md:m-2 text-center'>
                        <img src={insta} alt="instagram" />
                        <img src={dot} alt="dot" />
                        <img src={twitter} alt="twitter" />
                        <img src={youtube} alt="youtube" />
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[50vw] grid grid-cols-1 md:grid-cols-3 gap-0 gap-y-8'>
                <div className="row-auto md:row-span-3 text-center md:text-start">
                    <div>
                        <h1 className='text-2xl font-semibold mb-4'>Company</h1>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>Contact Us</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>
                </div>
                <div className="row-auto md:row-span-3 text-center md:text-start">
                    <div>
                        <h1 className='text-2xl font-semibold mb-4'>Support</h1>
                        <p>Help Center</p>
                        <p>Terms of Service</p>
                        <p>Legal</p>
                        <p>Privacy Policy</p>
                        <p>Status</p>
                    </div>
                </div>
                <div className="md:row-span-4 text-center md:text-start">
                    <div>
                        <h1 className='text-2xl font-semibold mb-4'>Stay up to date</h1>

                        <form className="max-w-md mx-auto">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email address" required />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">send</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer
