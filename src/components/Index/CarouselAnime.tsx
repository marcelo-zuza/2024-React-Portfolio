import YourIdea from '../assets/img/yourIdea-cut.jpg'
import Interface from '../assets/img/Interface-sky-700.jpg'
import SmartBoy from '../assets/img/smartBoy-neutral950.jpg'
import { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';

const CarouselAnime = () => {
    useEffect(() => {
        const carousel = document.getElementById('carousel');
    
        const animConfig = {
          targets: carousel,
          translateX: ['-100%', '0%'],
          duration: 1000,
          easing: 'easeInOutSine',
          autoplay: true,
          loop: true
        };
    
        anime(animConfig);
      }, []);
    
      return (
        <div id="carousel">
          <img src={YourIdea} alt="Slide 1" />
          <img src={Interface} alt="Slide 2" />
          <img src={SmartBoy} alt="Slide 3" />
        </div>
      )
}

export default CarouselAnime