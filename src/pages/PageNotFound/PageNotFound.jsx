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
         <div className="app__notfound-content">
            <div className="app__notfound-content_title">
                <img src={images.notFound} alt="404" />
                <img src={images.spoon} alt="about_spoon" className="spoon__img" style={{marginTop:"15px"}}/>
            </div>
            <div className="app__notfound-content_info">
                <h4 className="p__cormorant">Oops! This page is not found.</h4>
            <p className="p__opensans">The requested page does not exist.</p> 
            </div>  

            <Link to="/"><button type="button" className="custom__button">Back To Home</button></Link>
        </div>    
    </div>    
      <Footer/>    
  </> 
)
export default PageNotFound;