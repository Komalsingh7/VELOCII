import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
     return(
      <div>
      <div className='h-screen w-full flex justify-between flex-col  '>
      <img className="h-screen w-full "src="/home2.png" alt="Home" />

          <div className='bg-white pb-7 py-4 px-4'>
              
              <h2 className='text-3xl font-bold'>Get Started with Veloci</h2>
              <Link to= '/login' className=' flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 font-semibold'>Continue</Link>
          </div>
      </div>
  </div>
     )
}

export default Start