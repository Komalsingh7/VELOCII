import React from "react";

const VehiclePanel = (props) => {
     return(
        <div>
             <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
                    props.setVehiclePanel(false)
               }}><i className='text-3xl text-gray-300 ri-arrow-down-wide-line'></i></h5>
                    <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
                      <div onClick={()=>{
                          props.setConfirmRidePanel(true)
                      }} className=' flex border-2 border-gray-100 active:border-black  mb-2 rounded-xl w-full p-3 items-center justify-between'>
                          <img className='h-12' src="car.png " alt=""/>
                          <div className= 'w-1/2'>
                             <h4 className='font-medium text-base'>Car <span><i className='ri-user-3-fill'></i>4</span></h4>
                             <h5 className='font-medium text-sm'>2 mins away</h5>
                             <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                          </div>
                          <h2 className='text-lg font-semibold'>$120</h2>
                      </div>

                      <div 
                          onClick={()=>{
                            props.setConfirmRidePanel(true)
                          }}
                      className=' flex border-2  border-gray-100 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
                          <img className='h-12' src="auto.png " alt=""/>
                          <div className= 'w-1/2'>
                             <h4 className='font-medium text-base'>Auto<span><i className='ri-user-3-fill'></i>3</span></h4>
                             <h5 className='font-medium text-sm'> mins away</h5>
                             <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
                          </div>
                          <h2 className='text-lg font-semibold'>$90</h2>
                      </div>

                      <div 
                          onClick={()=>{
                            props.setConfirmRidePanel(true)
                          }}
                      className=' flex border-2  border-gray-100 active:border-black   mb-2 rounded-xl w-full p-3 items-center justify-between'>
                          <img className='h-12' src="moto.png " alt=""/>
                          <div className= 'ml-2 w-1/2'>
                             <h4 className='font-medium text-base'>Moto<span><i className='ri-user-3-fill'></i>1</span></h4>
                             <h5 className='font-medium text-sm'>3 mins away</h5>
                             <p className='font-normal text-xs text-gray-600'>Affordable Motorcycle rides</p>
                          </div>
                          <h2 className='text-lg font-semibold'>$57</h2>
                      </div>
        </div>
     )
}

export  default VehiclePanel