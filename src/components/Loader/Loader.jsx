import React from 'react';
import './Loader.css';
import { images } from '../../constants';

const Loader = () => {
  return (
    <div className="loader-container">      
         <img src={images.loader} alt="spinner" />       
      </div>
  )
}
export default Loader
