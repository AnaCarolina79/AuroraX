import React from 'react'
import './style.scss'
import logo from '../../assets/imagens/auroraxLogo.svg'
function Footer() {
    const info = [0,1,2,3,4,5,6,7,8] 
  return (
    <div className='footer'>

         <img className='logo' src={logo} alt="" />
         <div className='infos'>
            <div>
            {info.map(()=> <a href="" >teste</a>)}
            </div>
          <div>
            {info.map(()=> <a href="" >teste</a>)}
            </div>
            <div>
            {info.map(()=> <a href="" >teste</a>)}
            </div>
         </div>


    </div>
  )
}

export default Footer