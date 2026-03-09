import React from 'react'
import './style.scss'
import course from '../../assets/imagens/retratoo.png'
import { BsBriefcase } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
import Button from '../../components/button';
function About() {
  return (
    <>
    <div className='titulo'>
          <h2 >Nosso propósito</h2>
          <p className='subtitle'>Aprender é o primeiro passo para <span>transformar o mundo.</span></p>
        </div>
        <section className="about">
          <img src={course} alt="" />
          <div>
            <h2>Acreditamos que o conhecimento é a base para transformar ideias em realidade.</h2>
          <p>  
          Nosso espaço foi criado para quem deseja ir além, aprender de forma prática e construir um futuro com propósito.
          Oferecemos cursos desenvolvidos por profissionais experientes, voltados para o mercado atual e suas constantes mudanças.</p>  
          <p>Aqui, você aprende, aplica e evolui — no seu ritmo, com o apoio de uma comunidade que cresce junto com você.</p>
          <div className='icons'>
            <div className='iconDivision'>
            <div className='icon'>
          <IoBookOutline color='white' size={27}/>
            </div>
            <p>Construa seu futuro com propósito, evoluindo a cada novo aprendizado.</p>
            </div>
            <div className='iconDivision'>
           <div className='icon'>
          <BsBriefcase color='white' size={27}/>
            </div>
            <p>Aprenda de forma prática e envolvente, com cursos criados para o mundo real.</p>
            </div>

          </div>
          <div className='explorer'>

          <Button text={'Explorar Cursos'}/>
          </div>
          </div>

        </section>
    </>
  )
}

export default About