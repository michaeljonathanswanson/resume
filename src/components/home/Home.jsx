import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='c-home'>
        <h1>Developer.</h1>
        <div className='buttons-container'>
          <div className='button-container'>
            <a href='#'>Contact</a>
          </div>
          <div className='button-container'>
            <a href='#'>Resume</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
