import React, { useEffect, useState } from 'react'
import './style.scss'
import logo from '../../assets/auroraxLogo.svg'
import Button from '../button'
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  let scroll = 0;
  useEffect(() => {
    const navbarDisappears = () =>{
      setNavbar(window.scrollY > scroll && window.scrollY > 50);
      scroll = window.scrollY; 
    }  
    window.addEventListener('scroll', navbarDisappears);
    return () => { removeEventListener('scroll', navbarDisappears);
    
    }
  }, [])
  
  return (
    <div className={`navbar ${navbar ? 'hidden' : ''}`}>
    <div className='nav'>
        <img src={logo} alt="Logo" />
        <div className='navbar-center'>
            <a href="">Inicio</a>
            <a href="">Sobre Nós</a>
            <a href="">Alguma Coisa</a>
            <a href="">Contato</a>
        </div>
           <Button text={"Inscreva-se"}/>
    </div>
    </div>
  )
}

export default Navbar