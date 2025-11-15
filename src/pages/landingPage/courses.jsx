import React from 'react'
import './style.scss'
import categories from "../../data/categories.json";
import * as Icons from "react-icons/fa";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Courses() {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
    <div className='courses'>

    <h2></h2>
       <div className="slider-container">
      <Slider {...settings}>

          {categories.map(({ id, text, icon, color }) => {
            const Icon = Icons[icon];
            return  <div className='card' key={id}>
              <div className='slider-cards'>
                <span>
                  {Icon && <Icon size={28} color={'rgba(255, 255, 255, 1)'} />}
                </span>
                <p>
                  {text}
                </p>
                </div>
                </div>
          })}

          </Slider>
    </div>
    </div>
    </>
  )
}

export default Courses