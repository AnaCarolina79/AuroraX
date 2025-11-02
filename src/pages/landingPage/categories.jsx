import React from 'react'


function Categories() {
const card = [
    {id:1,text:'Desenvolvimento Web'},{id:2,text:'Desenvolvimento Mobile'},
    {id:3,text:'Banco de Dados'},{id:4,text:'Machine Learning'},
    {id:5,text:'Segurança da Informação'},{id:6,text:'Game Development'},
    {id:7,text:'UX/UI Design'},{id:8,text:'Animação Digital'},
    {id:9,text:'Modelagem e Arte 3D'},{id:10,text:'Edição de Vídeo'},
    {id:11,text:'Ilustração Digital'},{id:11,text:'Motion Graphics'}];
   
    return (
        <>
    {card.map((card) => <div key={card.id}>{card.text}</div>)}
        
        </>
  )
}

export default Categories