import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

// import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Loader } from './components';
import './App.css';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';

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
      {/* <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
      <BackToTop/>  */}
      
      <Routes>   
      <Route path="/" element={<Home /> }/>    
      <Route path="*" element={<PageNotFound /> }/>
    </Routes>   
    </div>
  );
}

export default App;
