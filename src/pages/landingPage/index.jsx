import React from 'react'
import './style.scss'
import Navbar from '../../components/navbar'
import Card from '../../components/cardPresentation'
import Hero from './hero';
import About from './about';
import Courses from './courses';
import Categories from './categories';
import Footer from './footer';
function LandingPage() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Card/>
        <About/>
        <Categories/>
        <Courses/>
        <Footer/>
      

    </>
  )
}

export default LandingPage