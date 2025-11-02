import React from 'react'
import './style.scss'
import { FaSitemap } from 'react-icons/fa';

function Categories() {
const card = [
    {id:1,text:'Desenvolvimento Web',icon:<FaSitemap size={28}/>},{id:2,text:'Desenvolvimento Mobile',icon:<FaSitemap size={28}/>},
    {id:3,text:'Banco de Dados',icon:<FaSitemap size={28}/>},{id:4,text:'Machine Learning',icon:<FaSitemap size={28}/>},
    {id:5,text:'Inteligência Artificial',icon:<FaSitemap size={28}/>},{id:6,text:'Game Development',icon:<FaSitemap size={28}/>},
    {id:7,text:'UX/UI Design',icon:<FaSitemap size={28}/>},{id:8,text:'Animação Digital',icon:<FaSitemap size={28}/>},
    {id:9,text:'Modelagem e Arte 3D',icon:<FaSitemap size={28}/>},{id:10,text:'Edição de Vídeo',icon:<FaSitemap size={28}/>},
    {id:11,text:'Ilustração Digital',icon:<FaSitemap size={28}/>},{id:11,text:'Motion Graphics', icon:<FaSitemap size={28}/>}];
   
    return (
        <>
        <div className='categories'>

        <h2>Nossos Tópicos</h2>
        <div className='categorie'>
    {card.map((card) => <div className='cards' key={card.id}>{card.icon}<p>
        {card.text}</p></div>)}
        </div>
        </div>
        
        </>
  )
}

export default Categories