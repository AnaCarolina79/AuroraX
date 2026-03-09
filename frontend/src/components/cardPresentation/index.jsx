import React from 'react'
import './style.scss'
import { MdGolfCourse } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";
function Card() {
  return (
    <div className='cards'>
        <div><MdAlarm size={80} color=' rgba(174, 51, 255, 1)'/><p>Aprenda no seu ritmo com conteúdos práticos e objetivos.</p></div>
        <div><MdGolfCourse size={80} color='white'/><p>Desenvolva habilidades hoje e seja referência amanhã.</p></div>
        <div><FaChalkboardTeacher size={80} color=' rgba(174, 51, 255, 1)'/><img src="" alt="" /><p>Conecte-se com especialistas e amplie sua rede de aprendizado.</p></div>
    </div>
  )
}

export default Card