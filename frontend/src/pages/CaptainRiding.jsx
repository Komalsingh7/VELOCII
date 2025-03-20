import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const CaptainRiding = () => {

    const [ finishRidePanel, setFinishRidePanel ] = useState(false)
    const finishRidePanelRef = useRef(null)


    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ finishRidePanel ])


    return (
        <div className="h-screen relative">
           
            
            {/* Logout Button Moved to Right */}
            <div className="absolute top-6 right-6">
                <Link 
                    to='/captain-home' 
                    className="h-12 w-12 bg-white flex items-center justify-center rounded-full shadow-lg"
                >
                    <i className="text-2xl ri-logout-box-r-line"></i>
                </Link>
            </div>
            
            {/* Map Image */}
            <div className="h-4/5">
                <img className='h-full w-full object-cover' src="images.jpg" alt="Map" />
            </div>
            
            {/* Bottom Section */}
            <div 
                onClick={() => {
                    setFinishRidePanel(true)
                }}
            className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-400">
            <h5 className='p-1 text-center w-[90%] absolute top-0 ' onClick={()=>{
                   
            }}>
                <i className='text-3xl text-gray-800 ri-arrow-up-wide-line'></i>
            </h5>
                <h4 className="text-xl font-semibold">4 KM away</h4>
                <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
                    Complete Ride
                </button>
            </div>
            <div ref={finishRidePanelRef} className='fixed w-full z-[500] bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
                <FinishRide
                   
                    setFinishRidePanel={setFinishRidePanel} />
            </div>
        </div>
    );
}

export default CaptainRiding;
