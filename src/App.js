import React, {useState, useEffect} from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar, BackToTop, Loader } from './components';
import './App.css';

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
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
      <BackToTop/>    
    </div>
  );
}

export default App;
