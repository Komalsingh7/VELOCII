import React from "react";
import { Link } from "react-router-dom";
const FinishRide = (props) => {
    
    return (
        <div className='h-[90%] '>
                 <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
                      props.setFinishRidePanel(false)
              }}><i className='text-3xl text-gray-300 ri-arrow-down-wide-line'></i></h5>
                   <h3 className='text-2xl font-semibold mb-5'>Finish this ride </h3>
                    <div className="flex items-center justify-between p-3 border-2 border-yellow-400 rounded-lg mt-4">
                             <div className="flex items-center gap-3 ">
                             <img className='h-15 w-15 rounded-full object-cover'src="profile.png" alt=""/>
                             <h2 className="text-lg  font-medium">Komal Singh</h2>
                             </div>
                             <h5 className="text-lg font-semibold" >2.2 KM</h5>
                    </div>
                  <div className='flex flex-col gap-2 justify-between items-center'>
                
                  <div className='w-full mt-5'>
                         <div className='flex items-center gap-5 p-3 border-b-2'>
                           <i className='text-lg ri-map-pin-user-fill'></i>
                           <div>
                               <h3 className='text-lg font-medium'>562/11-A</h3>
                               <p className='text-sm mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                           </div>
                         </div>
                         <div className='flex items-center gap-5 p-3 border-b-2'>
                         <i className='text-lg ri-map-pin-2-fill'></i>
                           <div>
                               <h3 className='text-lg font-medium'>562/11-A</h3>
                               <p className='text-sm mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                           </div>
                         </div>
                         <div className='flex items-center gap-5 p-3 '>
                         <i className='text-lg ri-currency-line'></i>
                           <div>
                               <h3 className='text-lg font-medium'>$120</h3>
                               <p className='text-sm mt-1 text-gray-600'>Cash</p>
                           </div>
                         </div>
                  </div>

                   <div className='mt-6 w-full'>
                       <Link to='/captain-home'
                    
                    className='w-full mt-10 flex justify-center bg-green-600 text-white text-lg font-semibold p-2 rounded-lg'>
                       Finish Ride
                    </Link>
     <p className=" mt-10 text-xs">Click on finish ride button if you have completed the payment</p>
                    
                   </div>
                  </div>
        </div>
    )
}


export default FinishRide