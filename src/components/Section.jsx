import React from 'react'
import section6left from '../assets/Section/section6left.svg'
import section7 from '../assets/Section/section7.svg'
const Section = () => {
    return (
        <>

        {/* this is section 6 */}
            <div className=" h-[100vh] md:h-[90vh] w-full flex flex-col md:flex-row justify-around items-center">
                <div className="left"><div className="secure w-[60vw] md:w-auto"><img src={section6left} alt="hero image" /></div></div>
                <div className="right w-auto md:w-[40vw] flex flex-col items-center md:items-start gap-6">
                    <div className='text-center md:text-start'>
                        <h1 className='text-gray-700 text-2xl md:text-4xl font-semibold'>How to design your site footer like we did</h1>
                    </div>
                    <div className='text-center md:text-start'>
                        <p className='text-gray-800 mx-4 md:m-1'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    </div>
                    <div>
                        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-sm text-lg px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Learn More</button>
                    </div>
                </div>
            </div>


            {/* this is section 7 */}
            <div className="bg-slate-100 h-[100vh] md:h-[90vh] w-full flex flex-col md:flex-row justify-around items-center">
                <div className="left"><div className="secure w-[60vw] md:w-auto"><img src={section7} alt="hero image" /></div></div>
                <div className="right w-auto md:w-[60vw] flex flex-col items-center md:items-start gap-6">
                    <div className='text-center md:text-start'>
                        <p className='text-gray-800 mx-4 md:m-1'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    </div>
                    <div>
                        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-sm text-lg px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Learn More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section
