import React, { useEffect } from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./AboutUs.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  return (
    <div
      className='app__aboutus app__bg flex__center section__padding'
      id='about'
    >
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt='G_overlay' />
      </div>
      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 data-aos="fade-right" className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img' data-aos="zoom-in"/>
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <Link to='/coming-soon'>
            <button type='button' className='custom__button'>
              Know More
            </button>
          </Link>
        </div>

        <div className='app__aboutus-content_knife flex__center'>
          <img data-aos='flip-right' src={images.knife} alt='image_knife' />
        </div>
        <div className='app__aboutus-content_history'>
          <h1 data-aos="fade-left"className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img' data-aos="zoom-in"/>
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <Link to='/coming-soon'>           
            <button type='button' className='custom__button'>
              Know More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
