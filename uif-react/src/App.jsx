import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero></Hero>
      <About />
    </>
  )
}

export default App