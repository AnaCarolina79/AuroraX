import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
function Button({text, path}) {

const navigate = useNavigate()

  return (
    <button onClick={() => navigate(path)} className='button' type='text'>{text}</button>
  )
}

export default Button