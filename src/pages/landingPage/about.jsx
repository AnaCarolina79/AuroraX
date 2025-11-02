import React from 'react'
import './style.scss'
import course from '../../assets/retratoo.png'
import { BsBriefcase } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
function About() {
  return (
    <>
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
          <IoBookOutline color='white' size={30}/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam libero </p>
            </div>
            <div className='iconDivision'>
           <div className='icon'>
          <BsBriefcase color='white' size={30}/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam libero </p>
            </div>
          
          </div>
          </div>

        </section>
    </>
  )
}

export default About