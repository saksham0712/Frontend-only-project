import React from 'react'
import section6left from '../assets/Section/section6left.svg'
import section7 from '../assets/Section/section7.svg'
import one1 from '../assets/OurClients/01.svg'
import one2 from '../assets/OurClients/02.svg'
import one3 from '../assets/OurClients/03.svg'
import one4 from '../assets/OurClients/04.svg'
import one5 from '../assets/OurClients/05.svg'
import one6 from '../assets/OurClients/06.svg'
import one7 from '../assets/OurClients/07.svg'
import arrow from '../assets/Section/arrow.svg'
import arrow1 from '../assets/Section/Section8/arrow.svg'
import one from '../assets/Section/Section8/one.svg'
import two from '../assets/Section/Section8/two.svg'
import three from '../assets/Section/Section8/three.svg'

const Section = () => {
    return (
        <>

            {/* this is section 6 */}
            <div className=" h-[100vh] md:h-[90vh] dark:bg-[#31363F] w-full flex flex-col md:flex-row justify-around items-center">
                <div className="left"><div className="secure w-[60vw] md:w-auto"><img src={section6left} alt="hero image" /></div></div>
                <div className="right w-auto md:w-[40vw] flex flex-col items-center md:items-start gap-6">
                    <div className='text-center md:text-start'>
                        <h1 className='text-gray-700 dark:text-gray-100 text-2xl md:text-4xl font-semibold'>How to design your site footer like we did</h1>
                    </div>
                    <div className='text-center md:text-start'>
                        <p className='text-gray-800 dark:text-gray-100 mx-4 md:m-1'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    </div>
                    <div>
                        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-sm text-lg px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Learn More</button>
                    </div>
                </div>
            </div>


            {/* this is section 7 */}
            <div className="bg-slate-100 dark:bg-[#222831] h-auto my-6 py-4 md:h-[90vh] w-auto flex flex-col md:flex-row justify-around items-center">
                <div className="left"><div className="secure w-[60vw] md:w-auto"><img src={section7} alt="hero image" /></div></div>
                <div className="right w-auto md:w-[60vw] flex flex-col items-center md:items-start gap-6">
                    <div className='text-center md:text-start'>
                        <p className='text-gray-800 dark:text-gray-100 mx-4 md:m-1'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    </div>
                    <div>
                        <h3 className='text-green-600'>Saksham Verma</h3>
                        <p className='text-gray-700 dark:text-gray-100'>British Dragon Boat Racing Association</p>
                    </div>
                    <div className=" icons mx-6 md:mx-2 flex flex-wrap gap-4 mt-4 justify-evenly items-center">
                        <img src={one1} alt="client1" />
                        <img src={one2} alt="client1" />
                        <img src={one3} alt="client1" />
                        <img src={one4} alt="" />
                        <img src={one5} alt="" />
                        <img src={one6} alt="" />
                        <img src={one7} alt="" />
                        <div className='flex gap-2'>

                            <h3 className='text-green-600'>Meet all customers</h3>
                            <img src={arrow} className='w-6 h-6' alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>



            {/* section 8 */}
            <div className='h-auto my-5 md:h-[100vh] w-full bg-white dark:dark:bg-[#31363F] text-center flex flex-col justify-items-center gap-4'>
                <h3 className='text-gray-700 dark:text-gray-100 text-3xl md:text-5xl font-semibold mt-10'>Caring is the new marketing</h3>
                <div className=' mx-auto my-4 w-auto md:w-[50vw]'>

                    <p className='text-gray-700 dark:text-gray-100 text-center'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">

                    <div className='flex flex-col relative items-center w-[80%] min-w-[26vw] m-auto py-6'>
                        <img className='w-auto md:w-auto' src={one} alt="memb" />
                        <div className='absolute flex flex-col items-center gap-4 bg-slate-100 text-center border rounded-lg bottom-[-5px] w-5/6 shadow-md'>
                            <h3 className='text-gray-700 text-large md:text-large font-semibold mt-5'>Creating Streamlined Safeguarding Processes with OneRen</h3>
                            <div className='flex gap-2'>

                                <h3 className='text-green-600 text-center'>Read More</h3>
                                <img src={arrow} className='w-6 h-6' alt="arrow" />
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col relative items-center w-[80%] min-w-[26vw] m-auto py-6'>
                        <img className='w-auto md:w-auto' src={two} alt="memb" />
                        <div className='absolute flex flex-col items-center gap-4 bg-slate-100 text-center border rounded-lg bottom-[-5px] w-5/6 shadow-md'>
                            <h3 className='text-gray-700 text-large md:text-large font-semibold mt-5'>What are your safeguarding responsibilities and how can you manage them?</h3>
                            <div className='flex gap-2'>

                                <h3 className='text-green-600 text-center'>Read More</h3>
                                <img src={arrow} className='w-6 h-6' alt="arrow" />
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col relative items-center w-[80%] min-w-[26vw] m-auto py-6'>
                        <img className='w-auto md:w-auto' src={three} alt="memb" />
                        <div className='absolute flex flex-col items-center gap-4 bg-slate-100 text-center border rounded-lg bottom-[-5px] w-5/6 shadow-md'>
                            <h3 className='text-gray-700 text-large md:text-large font-semibold mt-5'>Revamping the Membership Model with Triathlon Australia</h3>
                            <div className='flex gap-2'>

                                <h3 className='text-green-600 text-center'>Read More</h3>
                                <img src={arrow} className='w-6 h-6' alt="arrow" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>


            {/* Section 9 */}

            <div className='bg-slate-100 flex flex-col gap-4 flex-wrap justify-center items-center h-auto md:h-auto'>
                <div className="left flex flex-col gap-3 text-center mt-4 mb-4 md:text-start w-[80vw]">
                    <h1 className='text-gray-500 text-5xl md:text-8xl mt-4 font-semibold text-center'>Pellentesque suscipit fringilla libero eu.</h1>
                </div>
                <div className='mb-6'>
                    <button type="button" className=" flex gap-2 items-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-sm text-lg px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <p>Get Demo</p>
                        <img src={arrow1} className='w-6 h-6 items-center' alt="arrow" />
                    </button>

                </div>
            </div>
        </>
    )
}

export default Section
