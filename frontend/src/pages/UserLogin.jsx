import React, { useState } from 'react';
import { Link } from 'react-router-dom'
const UserLogin = () => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState('')
  const[userData,setUserData] = useState({})

  const submitHandler = (e) =>{
       e.preventDefault();
       setUserData({
        email : email,
        password:password
       })
       setEmail('')
       setPassword('')
  }
     return(
       
         <div className='p-9 h-screen flex flex-col justify-between'>
          <div>
          <img className="absolute top-4 left-4 w-16 z-50 " src="LOGO.png" alt="Logo" />
             <form onSubmit = {(e) =>{
                submitHandler(e)
                
             }}>
               <h3 className='text-lg mb-2 mt-9 font-semibold'>What's your email</h3>
               <input 
               required 
               value = {email}
               onChange={(e)=>{
                   setEmail(e.target.value)
               }}
               className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
               type="email" 
               placeholder='email@example.com'/>
               <h3 className='text-lg mb-2 font-semibold'>Enter Password</h3>
               <input 
               required 
               value = {password}
                onChange={(e)=>{
              setPassword(e.target.value)
          }}
               className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
               type="password" 
               placeholder='password'/>
               <button
          className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'
      >Login</button>
             </form>
             <p className='text-center'>New here? <Link to='/signup'className='text-blue-600'>Create new Account</Link></p>
          </div>
          <div>
            <Link to='/Captain-login'
                className='bg-[#10b461] text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base  flex items-center justify-center'
             >Sign in as Captain</Link>
             </div>
       </div>
     )
}

export default UserLogin