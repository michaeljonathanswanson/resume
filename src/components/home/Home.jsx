import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='c-home background-image'>
        <div className='background-container'></div>
        <div className='content-component'>
          <h1>Developer.</h1>
          <div className='buttons-container'>
            <div className='button-container'>
              <a href='/references'>References</a>
            </div>
            <div className='button-container'>
              <a href='/resume'>Resume</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
