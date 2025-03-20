import React , { useRef, useState }from 'react'
import {Link} from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
const CaptainHome = () => {

   const [ ridePopupPanel, setRidePopupPanel ] = useState(true)
   const [ confirmRidePopupPanel, setConfirmRidePopupPanel ] = useState(false)
   
   const ridePopupPanelRef = useRef(null)
   const confirmRidePopupPanelRef = useRef(null)
   
   useGSAP(function () {
      if (ridePopupPanel) {
          gsap.to(ridePopupPanelRef.current, {
              transform: 'translateY(0)'
          })
      } else {
          gsap.to(ridePopupPanelRef.current, {
              transform: 'translateY(100%)'
          })
      }
  }, [ ridePopupPanel ])

  useGSAP(function () {
   if (confirmRidePopupPanel) {
       gsap.to(confirmRidePopupPanelRef.current, {
           transform: 'translateY(0)'
       })
   } else {
       gsap.to(confirmRidePopupPanelRef.current, {
           transform: 'translateY(100%)'
       })
   }
}, [ confirmRidePopupPanel ])

     return(
      <div className="h-screen">
      <div >
      {/* <img className="absolute top-2 left-3 w-16 z-50" src="LOGO.png" alt="Logo" /> */}
         <Link to = '/home' className="fixed h-10 w-10 bg-white items-center justify-center rounded-full mt-8 ml-4">
          <i className=" h-3 text-lg font-bold p-2 pt-15 pl-3  ri-logout-box-r-line "></i>
      </Link>
      </div>
    <div className="h-3/5">
    <img className ='h-full w-full object-cover'src="images.jpg" alt=""/>
    </div>
     <div className="h-2/5 p-6"> 
            <CaptainDetails/>
     </div>
     <div ref={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
                    <RidePopUp  setRidePopupPanel = {setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/> 
              </div>
              <div ref={confirmRidePopupPanelRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
                <ConfirmRidePopUp
                  
                    setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
            </div>
 </div>
     )
}

export default CaptainHome