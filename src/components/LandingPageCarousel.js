import React, { useState } from 'react';
import './LandingPageCarousel.css';

import carouselimg1 from '../images/carouselimg1.jpg';
import carouselimg2 from '../images/carouselimg2.jpg';
//import carouselimg3 from '../images/carouselimg3.jpg';

const carouselItems = [
  {
    image: carouselimg1,
    title: 'Learn Anytime, Anywhere',
    description: 'Access high-quality courses from your device, whenever you want.',
  },
  {
    image: carouselimg2,
    title: 'Expert Instructors',
    description: 'Learn from industry experts and experienced teachers.',
  },
  // {
  //   image: carouselimg3,
  //   title: 'Track Your Progress',
  //   description: 'Monitor your learning journey and achieve your goals.',
  // },
];

const LandingPageCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img
          src={carouselItems[current].image}
          alt={carouselItems[current].title}
          className="carousel-image"
        />
        <div className="carousel-text">
          <h2>{carouselItems[current].title}</h2>
          <p>{carouselItems[current].description}</p>
        </div>
      </div>
      <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous Slide">&#10094;</button>
      <button className="carousel-btn next" onClick={nextSlide} aria-label="Next Slide">&#10095;</button>
      <div className="carousel-indicators">
        {carouselItems.map((_, idx) => (
          <span
            key={idx}
            className={`indicator ${current === idx ? 'active' : ''}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPageCarousel;