import React from 'react';
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoPlay:true,
  
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoPlay:true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};
const ReferencesCarousel = () => {
  return (
    <div className="reference-container">
      <h2> Başlıca Referanslarımız </h2>
      <Slider {...settings}>
      <img className="carousel-img" src="./static/img/references/thy.png" />
        <img className="carousel-img" src="./static/img/references/thytech.png" />
        <img className="carousel-img" src="./static/img/references/medicalparkref.png" />
        <img className="carousel-img" src="./static/img/references/kocakfarma.png" />
        <img className="carousel-img" src="./static/img/references/intercityref.png" />        
        <img className="carousel-img" src="./static/img/references/multitekref.png" />       
        <img className="carousel-img" src="./static/img/references/livhospital.png" />        
        <img className="carousel-img" src="./static/img/references/medicana.png" />        
        <img className="carousel-img" src="./static/img/references/isuref.png" />        
        <img className="carousel-img" src="./static/img/references/unicoref.png" />   
      </Slider>
    </div>
  );
}

export default ReferencesCarousel;