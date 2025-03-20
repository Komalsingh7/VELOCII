import React from "react";

const CaptainDetails = () => {
     return(
        <div>

<div className='flex items-center justify-between'>
               <div className='flex items-center justify-between gap-3'>
                   <img className='h-15 w-15 rounded-full object-cover'src="profile.png" alt=""/>
                   <h4 className='text-lg font-medium'>Arti Singh</h4>
               </div>
                 <div>
                 
                   <h4 className='text-xl font-semibold'>$345</h4>
                   <p className='text-sm text-gray-600'>Earned</p>
                 </div>
              </div>



              <div className='flex p-3 bg-gray-100 mt-8 rounded-xl justify-center gap-5 items-center'>
              <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
              </div>

        </div>
     )
}

export default CaptainDetails