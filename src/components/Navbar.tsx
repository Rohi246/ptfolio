import React from 'react'
import '../index.css'
import logo from '../assets/logo.svg'
const Navbar = () => {
  return (
    <nav className=' relative sticky w-full overflow-hidden flex flex-row items-center justify-between ms-[20px] text-white'  >
        
        <div className=' m-0 ps-52'>
        <img src={logo} alt="logo" />
        </div>
        
        <ul className=' flex flex-row items-center list-none gap-[60px] font-outfit '>

            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className=' bg-gradient-to-r from-[#DA7C25] to-[#B923E1] ps-[20px] pe-[40px] me-20 rounded-md
          font-medium cursor-pointer hover:scale-105'>Connect with me</div>
        </nav>
  )
}

export default Navbar