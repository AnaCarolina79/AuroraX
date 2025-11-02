import React from 'react'
import './style.scss'
import Navbar from '../../components/navbar'
import Card from '../../components/cardPresentation'
import Hero from './hero';
import About from './about';
import Courses from './courses';
function LandingPage() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Card/>
        <About/>
        <Courses/>
    </>
  )
}

export default LandingPage