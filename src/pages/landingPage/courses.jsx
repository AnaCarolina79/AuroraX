import React from 'react'
import './style.scss'
function Courses() {
  const cards = [0,1,2]
  return (
    <>
    <div className='courses'>

    <h2></h2>
    
    {cards.map(card => (<div className='card' key={card}>
    <p>teste</p>

    
    </div>))}
    </div>
    </>
  )
}

export default Courses