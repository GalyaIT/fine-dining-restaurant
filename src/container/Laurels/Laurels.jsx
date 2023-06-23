import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

// This component is created here because we won't reuse it. We'll use it only in Laurels component.
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  
  <div className="app__laurels_awards-card">    
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div style={{position:"relative"}} className="app__bg app__wrapper section__padding" id="awards">    
    <div style={{marginTop:"100px"}}className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
      <img className="app__lauers_awards-logo" src={images.logo} alt="awards" />
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;
