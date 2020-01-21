import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import smallLogo from '../../Assets/white-logo.png';
import ChartIcon from '../../Components/SVGs/chart';
import mediaPlaforms from '../../Assets/socials.svg';

export default class Landing extends React.Component {
  render() {
    return (
      <div className='Landing'>
        <div className='Hero'>
          <h1>Are you curious about your social media traffic?</h1>
          <h3>
            Here at{' '}
            <img className='smallLogo' src={smallLogo} alt='trackr logo' /> we
            make that data accessible to you.
          </h3>
        </div>
        <div>
          <div className='curve'></div>
        </div>
        <section className='sources'>
          <h4>all well known platforms</h4>
          <p>We are compatible with all your favorite social media platforms</p>
          <div className='sources-container'>
            <img
              className='media-platforms'
              src={mediaPlaforms}
              alt='social media platforms'
            />
          </div>
        </section>
        <div>
          <div className='curve-black'></div>
        </div>
        <section className='data'>
          <h4>Keep up to date</h4>
          <p>
            Compare your current stats with your past to see if your accounts
            are growing
          </p>
          <div className='chart-svg'>
            <ChartIcon />
          </div>
        </section>
      </div>
    );
  }
}
