import React from 'react'
import profile from '../assets/profile_img.svg'
import { Constants } from '../COSTANTS'
const Hero:React.FC = () => {
  return (
    <div className=' flex flex-col items-center gap-[35px]' >

    <div className=' flex flex-col  text-center h-[150px] w-[150px] mt-[150px]'>
        <img src={profile} alt="profile" />
    </div>
    <div className=' text-white text-center text-6xl font-bold'> <h1>
       <span className='tg bg-gradient-to-r from-[#DA7C25] to-[#B923E1] bg-clip-text'> I am Rohit Chakraborty,</span>
       {Constants.title}</h1></div>
    <div className=' text-white'> <h1>{Constants.description}</h1></div>



    <div className=' text-white flex flex-row  items-center mb-[50px] gap-[25px] '>
      <div className=' p-5 rounded-xl border-2 border-white cursor-pointer hover:scale-105'><p>My Resume</p></div>
      <div className=' bg-gradient-to-r from-[#DA7C25] to-[#B923E1] ps-[20px] pe-[40px] me-20 rounded-xl
           p-5 font-medium cursor-pointer hover:scale-105'><p>Connect with me</p></div>
      
    </div>
    </div>
  )
}

export default Hero