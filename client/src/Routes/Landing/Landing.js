import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default class Landing extends React.Component {
  render() {
    return (
      <div className='Landing'>
        <h1>Analytic Tracker</h1>
        <Link to='/Home'>Welcome</Link>
      </div>
    );
  }
}
