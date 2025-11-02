import React from 'react'
import Navbar from '../../components/navbar'
import Card from '../../components/cardPresentation'

import './style.scss'
import Hero from './hero';
import About from './about';
function LandingPage() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Card/>
        <About/>
    </>
  )
}

export default LandingPage