import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Carousel1() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} interval={2000} >
            <div>
                <img src="pic1.jpg" alt='scene1'/>
                <p className="legend">Scene 1</p>
            </div>
            <div>
                <img src="pic2.jpg" alt='scene2'/>
                <p className="legend">Scene 2</p>
            </div>
            <div>
                <img src="pic3.jpg" alt='scene3'/>
                <p className="legend">Scene 3</p>
            </div>
            <div>
                <img src="pic4.jpg" alt='scene4'/>
                <p className="legend">Scene 4</p>
            </div>
        </Carousel>
    )
};