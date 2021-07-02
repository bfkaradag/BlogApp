import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Paper, Button } from '@material-ui/core'

var items = [
    {
        id:1,
        title: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        id:2,
        title: "Random Name #2",
        description: "Hello World!"
    },
    {
        id:3,
        title: "Random Name #3",
        description: "Hello World!"
    }
]

const HomeCarousel = () => {
    
    return (
        <Carousel
        showStatus = {false}
        showIndicators = {false}
        showThumbs = {false}
        autoPlay
        infiniteLoop
        >
        {
            items.map(item => {
                return(
                    <CarouselItem key = {item} item = {item} />
                )
            })
        }
        
        </Carousel>
    
    )
}

const CarouselItem = (props) =>
{
    return (
        <Paper id="paper" style={{backgroundImage: `url(./static/img/carousel/${props.item.id}.jpg) ` }}>
         
         <div className="carousel-content">
             <div className="carousel-title">
                <h1 style={{color:"#fff"}}>{props.item.title}</h1>
             </div>
             <div className="carousel-description">
                 <h3 style={{color:"#fff"}}>{props.item.description}</h3>
             </div>
         </div>

        </Paper>
    )
}

export default HomeCarousel;