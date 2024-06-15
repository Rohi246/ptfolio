import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NAvbar'
import logo from './assets/logo.svg'
function App() {
 
  return (
    <div>

      <img src={logo} alt="logo" />
      <Navbar/>
    </div>
  )
}

export default App
