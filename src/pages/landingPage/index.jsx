import React from 'react'
import Navbar from '../../components/navbar'
import Card from '../../components/cardPresentation'
import course from '../../assets/retratoo.png'
import { IoBookOutline } from "react-icons/io5";
import presentation from '../../assets/presentation.png'
import './style.scss'
function LandingPage() {
  return (
    <>
        <Navbar/>
        <img className='presentation' src={presentation} alt="presentation" />
        <div className='textPresentation'>
            <div className='text'>

            <h1>Um <span>espaço</span> feito para o seu <span>crescimento.</span></h1>
            <p>Comece hoje sua jornada e descubra do que é capaz!</p>           
            <div className='botoes'>

            <button className='inscreva-se'>Inscreva-se</button>
            <button className='inscreva-se'>Como funciona</button>
            </div>
            </div>
        </div>
        <Card/>
        <div className='titulo'>
          <h1 >Algo muito daoraaaa</h1>
          <p>Algo muito daoraaaa</p>
        </div>
        <section className="about">
          <img src={course} alt="" />
          <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio hic quae nihil! In, quia error molestias iste ipsam perspiciatis dignissimos repellendus, vero expedita sit voluptas necessitatibus voluptatibus nisi cupiditate amet!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio hic quae nihil! In, quia error molestias iste ipsam perspiciatis dignissimos repellendus, vero expedita sit voluptas necessitatibus voluptatibus nisi cupiditate amet!</p>
          <div className='icons'>
            <div className='iconDivision'>
            <div className='icon'>
          <IoBookOutline color='white' size={35}/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam libero </p>
            </div>
            <div className='iconDivision'>
           <div className='icon'>
          <IoBookOutline color='white' size={35}/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam libero </p>
            </div>
          
          </div>
          </div>

        </section>
    </>
  )
}

export default LandingPage