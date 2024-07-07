import React from 'react'
import one1 from '../assets/OurClients/01.svg'
import one2 from '../assets/OurClients/02.svg'
import one3 from '../assets/OurClients/03.svg'
import one4 from '../assets/OurClients/04.svg'
import one5 from '../assets/OurClients/05.svg'
import one6 from '../assets/OurClients/06.svg'
import one7 from '../assets/OurClients/07.svg'
import memb from '../assets/OurClients/down/memb.svg'
import nat from '../assets/OurClients/down/nat.svg'
import club from '../assets/OurClients/down/club.svg'
import secure from '../assets/OurClients/down/secure.svg'

const OurClients = () => {
    return (
        <div className='w-full bg-slate-100 text-center flex flex-col justify-items-center gap-4'>
            <h3 className='text-gray-700 mt-5 text-3xl md:text-5xl font-semibold'>Our Clients</h3>
            <p className='text-gray-700 text-center'>We have been working with some Fortune 500+ clients</p>
            <div className=" icons mx-6 md:mx-2 flex flex-wrap gap-4 mt-4 justify-evenly">
                <img src={one1} alt="client1" />
                <img src={one2} alt="client1" />
                <img src={one3} alt="client1" />
                <img src={one4} alt="" />
                <img src={one5} alt="" />
                <img src={one6} alt="" />
                <img src={one7} alt="" />
            </div>


            {/* this is third section */}
            <h3 className='text-gray-700 text-3xl md:text-5xl font-semibold mt-10'>Manage your entire community</h3>
            <h3 className='text-gray-700 text-3xl md:text-5xl font-semibold'>in a single system</h3>
            <p className='text-gray-700 text-center'>Who is Nextcent suitable for?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
                <div className='flex flex-col items-center w-[80%] m-auto border-t border-l border-b-4 border-r-4  rounded-xl border-gray-500 border-opacity-10'>
                    <img className='w-[10vw] md:w-[5vw]' src={memb} alt="memb" />
                    <h3 className='text-gray-700 text-4xl font-semibold mt-5'>Membership</h3>
                    <h3 className='text-gray-700 text-4xl font-semibold'>Organisations</h3>
                    <div className='w-[45%] md:w-[20vw]'>
                        <p className='text-gray-700 text-center mt-4'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
                <div className='flex flex-col items-center w-[80%] m-auto border-t border-l border-b-4 border-r-4 rounded-xl border-gray-500 border-opacity-10'>
                    <img className='w-[10vw] md:w-[5vw]' src={nat} alt="memb" />
                    <h3 className='text-gray-700 text-4xl font-semibold mt-5'>Membership</h3>
                    <h3 className='text-gray-700 text-4xl font-semibold'>Organisations</h3>
                    <div className='w-[45%] md:w-[20vw]'>
                        <p className='text-gray-700 text-center mt-4'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
                <div className='flex flex-col items-center w-[80%] m-auto border-t border-l border-b-4 border-r-4  rounded-xl border-gray-500 border-opacity-10'>
                    <img className='w-[10vw] md:w-[5vw]' src={club} alt="memb" />
                    <h3 className='text-gray-700 text-4xl font-semibold mt-5'>Membership</h3>
                    <h3 className='text-gray-700 text-4xl font-semibold'>Organisations</h3>
                    <div className='w-[45%] md:w-[20vw]'>
                        <p className='text-gray-700 text-center mt-4'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
            </div>



            {/* this is fourth section */}
            <div className="h-[90vh] w-full flex flex-wrap justify-around items-center text-center">
                <div className="right"><div className="secure w-[55vw] md:w-auto"><img src={secure} alt="hero image" /></div></div>
                <div className="left flex flex-col items-center sm:items-start gap-6">
                    <div><h1 className='text-gray-700 text-2xl md:text-4xl font-semibold'>The unseen of spending three</h1></div>
                    <div><h1 className='text-gray-700 text-2xl md:text-4xl font-semibold'>years at Pixelgrade</h1></div>
                    <div><p className='text-gray-800 mx-4 md:m-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p></div>
                    <div><button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-sm text-lg px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClients
