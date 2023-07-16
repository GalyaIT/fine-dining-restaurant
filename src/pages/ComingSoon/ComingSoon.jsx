import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Countdown } from "../../components";
import Footer from "../../container/Footer/Footer";
import './ComingSoon.css';

const ComingSoon = () => {

  return (
    <>    
      <Navbar />
      <div className='app__comingsoon app__bg flex__center section__padding'>
      <div className='app__comingsoon-title'>
          <h2>Coming soon</h2>
      </div>
      <Countdown />
      <Link to="/"><button type="button" className="custom__button">Back To Home</button></Link>
      </div>
      <Footer />
    </>   
  )
}

export default ComingSoon
