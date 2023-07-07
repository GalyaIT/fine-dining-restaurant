import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import './PageNotFound.css'
import { Navbar } from "../../components";
import Footer from "../../container/Footer/Footer";


const PageNotFound = () => (
  <>
  <Navbar/>
    <div className="app__notfound app__bg flex__center section__padding">     
        <div className="app__notfound-overlay flex__center">
            <img src={images.G} alt="G_overlay" />
        </div>
        <div className="app__notfound-content">
            <div className="app__notfound-content_title">
                <h1>404</h1>
                <img src={images.spoon} alt="about_spoon" className="spoon__img" />
            </div>
            <p className="p__opensans">Oops! The page you are looking for does not exist. It might
                have been moved or deleted.</p>
            <Link to="/"><button type="button" className="custom__button">Back To Home</button></Link>
        </div>    
    </div>    
      <Footer/>    
  </> 
)
export default PageNotFound;