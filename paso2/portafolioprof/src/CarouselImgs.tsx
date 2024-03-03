import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import Image1 from './1000_F_218727336_yFWOEXi4dqc01tCWSNZg2JSa0TPHtz4h.jpg';

import './ProjectCarousel.css'; 

const ProjectCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true} 
        showThumbs={false} 
        infiniteLoop={true} 
        autoPlay={true} 
        interval={3000} 
      >
        <div>
          <img src={Image1} alt="Project 1" />
        </div>
        <div>
          <img src={Image1} alt="Project 2" />
        </div>
        <div>
          <img src={Image1} alt="Project 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;