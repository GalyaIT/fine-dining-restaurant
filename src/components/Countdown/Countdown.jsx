import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import moment from "moment";
import './Countdown.css';

const targetTime = moment("2024-12-31");

const Countdown = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));
  

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(moment());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

  return (
    <div className='app__countdown app__bg flex__center section__padding'>    
      <div className='app__countdown-content'>        
            <div className='app__countdown-content_box'>
              <div className='value'>
                <span>{('0' + timeBetween.months()).slice(-2)}</span>
              </div>
              <span className='label'>months</span>
            </div>
            <div className='app__countdown-content_box'>
              <div className='value'>
                <span>{('0' + timeBetween.days()).slice(-2)}</span>
              </div>
              <span className='label'>days</span>
            </div>
            <div className='app__countdown-content_box'>
              <div className='value'>
                <span>{('0' + timeBetween.hours()).slice(-2)}</span>
              </div>
              <span className='label'>hours</span>
            </div>
            <div className='app__countdown-content_box'>
              <div className='value'>
                <span>{('0' + timeBetween.minutes()).slice(-2)}</span>
              </div>
              <span className='label'>minutes</span>
            </div>
            <div className='app__countdown-content_box'>
              <div className='value'>
                <span>{('0' + timeBetween.seconds()).slice(-2)}</span>
              </div>
              <span className='label'>seconds</span>
            </div>
      </div>      
    </div>
  );
}

export default Countdown;
