import React, { Component } from 'react';
import './Home.css';
import MobileMenuHeader from '../header/MobileMenuHeader.jsx';

class Home extends Component {
  render() {
    let screenHeight = window.screen.height + 25;
    return (
      <div style={{ height: `${screenHeight}px`, backgroundColor: '#9600ff' }}>
        <MobileMenuHeader />
      </div>
    );
  }
}

export default Home;
