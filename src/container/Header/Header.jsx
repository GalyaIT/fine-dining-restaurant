import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {images} from '../../constants';
import {SubHeading} from '../../components';
import Carousel from '../../components/Carousel/Carousel';

import './Header.css';
import AOS from "aos";
import "aos/dist/aos.css";

const photos =[images.welcome, images.welcome2, images.welcome3,images.welcome4];

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return(
  <div className="app__header app__wrapper section__padding" id="home">
    <div data-aos="zoom-in-down" className="app__wrapper-info">
      <SubHeading title = "Chase the new flavour" />
      <h1  data-aos="zoom-in"className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin:'2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
      <Link to="*"> <button type="button" className="custom__button">Explore Menu</button></Link>     
    </div>
    <div data-aos="flip-left"className="app__header-img">
      {/* <img src={images.welcome} alt="header_img" /> */}
      <Carousel slides={photos} height='100%'/>
    </div>   
  </div>
);
}
export default Header;
