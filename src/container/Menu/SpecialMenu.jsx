import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';

import './SpecialMenu.css';
import AOS from "aos";
import "aos/dist/aos.css";

const SpecialMenu = () =>{

  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  return(
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits your palatte' />
      <h1 data-aos="flip-left" className='headtext__cormorant'>Today&apos;s Special</h1>
    </div>
    <div className='app__specialMenu-menu'>      
      <div className='app__specialMenu-menu_wine flex__center'>
        <p data-aos="fade-down-left" className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div data-aos="fade-right" className='app__specialMenu-menu_items'>
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
          ))}
        </div>
       </div>
       <div className="app__specialMenu-menu_img">
            <img src={images.menu} alt="menu_img" />
       </div>
       <div className='app__specialMenu-menu_cocktails flex__center'>
        <p data-aos="fade-down-right"  className='app__specialMenu-menu_heading'>Coctails</p>
        <div data-aos="fade-left" className='app__specialMenu-menu_items'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ))}
        </div>
       </div>
    </div>
   <div style={{marginTop:"15px"}}>
    <Link to="*"> <button type="button" className="custom__button">View More</button></Link>           
   </div>
  </div>
);
} 
export default SpecialMenu;
