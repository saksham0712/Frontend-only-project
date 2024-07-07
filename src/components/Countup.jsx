import React from 'react'
import CountUp from "react-countup";
import member from '../assets/Countup/people.svg'
import club from '../assets/Countup/clubs.svg'
import events from '../assets/Countup/Events.svg'
import Payment from '../assets/Countup/Payment.svg'

const Countup = () => {
  return (
    <div className='bg-slate-100 flex flex-wrap justify-around'>
      <div className="left flex flex-col gap-3 text-center mt-4 mb-4 md:text-start">
        <h1 className='text-gray-500 text-2xl md:text-4xl mt-4 font-semibold'>Helping a local</h1>
        <h1 className='text-green-600 text-2xl md:text-4xl font-semibold'>business reinvent itself</h1>
        <p className='text-gray-800 mx-4 md:m-1'>We reached here with our hard work and dedication</p>
      </div>
      <div className="right grid gap-10 grid-cols-1 md:grid-cols-2 md:grid-rows-2 mt-6 mb-6">
        <div className='flex gap-2'>
          <img src={member} alt="mem" />
          <div>
            <h1 className='text-gray-500 text-xl md:text-3xl font-semibold'><CountUp start={0} end={2245341} duration={5}/></h1>
            <p className='text-sm text-black opacity-55'>Members</p>
          </div>
        </div>
        <div className='flex gap-2'>
          <img src={club} alt="mem" />
          <div>
            <h1 className='text-gray-500 text-xl md:text-3xl font-semibold'><CountUp start={0} end={46328} duration={5}/></h1>
            <p className='text-sm text-black opacity-55'>Clubs</p>
          </div>
        </div>
        <div className='flex gap-2'>
          <img src={events} alt="mem" />
          <div>
            <h1 className='text-gray-500 text-xl md:text-3xl font-semibold'><CountUp start={0} end={828867} duration={5}/></h1>
            <p className='text-sm text-black opacity-55'>Event booking</p>
          </div>
        </div>
        <div className='flex gap-2'>
          <img src={Payment} alt="mem" />
          <div>
            <h1 className='text-gray-500 text-xl md:text-3xl font-semibold'><CountUp start={0} end={1926436} duration={5}/></h1>
            <p className='text-sm text-black opacity-55'>Payments</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countup
