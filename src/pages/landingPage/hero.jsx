import React from 'react'
import './style.scss'
import presentation from '../../assets/presentation.png'
import Button from '../../components/button'

function Hero() {
  return (
    <>
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
    </>
  )
}

export default Hero