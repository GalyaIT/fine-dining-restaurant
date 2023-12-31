import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  if(toggleMenu){
    document.body.style.overflowY = 'hidden';  
    document.body.style.position = 'fixed';  
  }else{
    document.body.style.overflowY = 'visible';   
    document.body.style.removeProperty("position");  
  }

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/"><img src={images.gericht} alt="logo" /></Link>        
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="/">Home</Link></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Register</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><Link to="/">Home</Link></li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#about">About</a></li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#menu">Menu</a></li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#awards">Awards</a></li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );

}

export default Navbar;
