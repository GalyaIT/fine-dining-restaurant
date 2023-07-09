import React, {useState, useEffect} from 'react';
import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from 'react-icons/md';
import './Carousel.css';  


const Carousel = ({ slides }) => {  
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const timeout = setTimeout(
      () => setCurrent((current + 1 + length) % length),
      8000
    );
    return () => clearTimeout(timeout);
  }, [current, length]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div
      className='app__carousel'>
      <div className='app__carousel-inner'>
        {slides.map((slide, index) => {
          return (
            <div          
            className='app__carousel-item'
              key={index}
            >
              {index === current && (         
                <div className='app__carousel-wrapper fade'>
                <div className='overlay-x flow'></div>
                  <img src={slide} alt='welcome-photos' />
                </div>              
             )}             
            </div>
          );
        })}
      </div>
      
      <div className='app__carousel_arrows'>
      <MdKeyboardArrowLeft className="app__carousel_arrow-icon" onClick={prevSlide} />
          <MdKeyboardArrowRight className="app__carousel_arrow-icon" onClick={nextSlide} />      
      </div>
    </div>
  );
};

export default Carousel;