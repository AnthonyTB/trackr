import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import smallLogo from '../../Assets/black-logo.png';
import ChartIcon from '../../Components/SVGs/chart';
import mediaPlaforms from '../../Assets/socials.svg';

function Landing() {
  return (
    <div className='Landing'>
      <div className='Hero'>
        <h1>
          Are you curious about your social media traffic
          <span className='alt-color'>?</span>
        </h1>
      </div>
      <div>
        <div className='curve'></div>
      </div>
      <div className='hero-text'>
        <h3>
          Here at{' '}
          <img className='smallLogo' src={smallLogo} alt='trackr logo' /> we
          make that data accessible to you<span className='alt-color'>.</span>
        </h3>
      </div>
      <section className='sources'>
        <div className='text'>
          <h4>all well known platforms</h4>
          <hr className='underline' />
          <p>We are compatible with all your favorite social media platforms</p>
        </div>
        <div className='sources-container'>
          <img
            className='media-platforms'
            src={mediaPlaforms}
            alt='social media platforms'
          />
        </div>
      </section>

      <section className='data'>
        <div className='text'>
          <h4>Keep up to date</h4>
          <hr className='underline' />
          <p>
            Compare your current stats with your past to see if your accounts
            are growing
          </p>
        </div>
        <div className='chart-svg'>
          <ChartIcon />
        </div>
      </section>
    </div>
  );
}

export default Landing;
