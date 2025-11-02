import React from 'react';
import './style.scss';

import logo from '../../assets/auroraxLogo.svg'
import Button from '../../components/button';
function Login() {
  return (
    <div className='login-page'>
        <div className='login-image'></div>
            <form action="" className='form-login'>
              <img className='logo' src={logo} alt="" />
              <div className='login-input'>
                <input type="text" placeholder='Nome'/>
                <input type="text" placeholder='Senha'/>
              </div>
              <div className='password'>

                <a href="">Esqueceu a Senha?</a>
              </div>
              <Button text={'Entrar'}/>
              <div className='cadastre-se'>
              <div className='novo-cadastro'> <p>Novo por aqui? </p> <a href="">Cadastre-se</a></div>
              </div>
            </form>

    </div>
  )
}

export default Login