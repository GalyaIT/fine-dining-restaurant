import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

// import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Loader, BackToTop } from './components';
import './App.css';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import ScrollToTop from "../src/hooks/ScrollToTop";
import ComingSoon from './pages/ComingSoon/ComingSoon';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
if(loading){
  return  <Loader />
}
  return (
    <div>    
      <ScrollToTop/>
      <BackToTop />  
      <Routes>   
        <Route path="/" element={<Home /> }/>    
        <Route path="*" element={<PageNotFound /> }/>
        <Route path="/coming-soon" element={<ComingSoon /> }/>
      </Routes> 
    
    </div>
  );
}

export default App;
