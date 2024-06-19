// src/App.tsx
import React from 'react';

import Navbar from './components/Navbar'
import './index.css'
import Hero from './components/Hero'
import About from './components/About'
const App:React.FC=()=> {
 
  return (
    <div >

     <Navbar />
     <Hero/>
     <About/>
    </div>
  )
}

export default App
