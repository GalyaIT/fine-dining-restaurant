import React from 'react';
import { Link } from 'react-router-dom';
import {images} from '../../constants';
import {SubHeading} from '../../components';

import './Header.css';
const photos =[
  { id: 'p1',
    title: 'Photo One',
    url: `${images.welcome}`
  }
]
console.log(photos);

const Header = () => {
  return(
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper-info">
      <SubHeading title = "Chase the new flavour"/>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin:'2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
      <Link to="*"> <button type="button" className="custom__button">Explore Menu</button></Link>     
    </div>
    <div className="app__header-img">
      <img src={images.welcome} alt="header_img" />
    </div>
   
  </div>
);
} 

export default Header;
