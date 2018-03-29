import React, { Component } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className='c-home background-image'>
        <div className='background-container'></div>
        <div className='content-component'>
          <h1>Developer.</h1>
          <div className='buttons-container'>
            <div className='button-container' style={{ display: 'none' }}>
              <NavLink activeClassName='active-link-style' className='link-style' to='/portfolio'>Resume</NavLink>
            </div>
            <div className='button-container'>
              <NavLink activeClassName='active-link-style' className='link-style' to='/resume'>Resume</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
