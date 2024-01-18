import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web'
import YourIdea from '../assets/img/yourIdea-cut.jpg'
import Interface from '../assets/img/Interface-sky-700.jpg'
import SmartBoy from '../assets/img/smartBoy-neutral950.jpg'

const Carousel = ({ }) => {
  const [index, setIndex] = useState(0);
  const images: any[] = [
    YourIdea,
    Interface,
    SmartBoy
  ]

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const props = useSpring({
    from: { opacity: 0, transform: 'translateX(100%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
  });

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <animated.div
        style={{
          display: 'flex',
          width: `${images.length * 100}%`,
          transform: `translateX(${-index * (100 / images.length)}%)`,
        }}
      >
        {images.map((image, i) => (
          <animated.div key={i} style={{ ...props, width: '100%' }}>
            <img src={image} alt={`slide-${i}`} style={{ width: '100%' }} />
          </animated.div>
        ))}
      </animated.div>

      <button onClick={prevSlide} style={{ position: 'absolute', top: '50%', left: '10px', zIndex: 1 }}>
        Prev
      </button>
      <button onClick={nextSlide} style={{ position: 'absolute', top: '50%', right: '10px', zIndex: 1 }}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
