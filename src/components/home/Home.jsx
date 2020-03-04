import React, { Component } from 'react';
import './Home.css';
import MobileMenuHeader from '../header/MobileMenuHeader.jsx';

class Home extends Component {
  render() {
    let screenHeight = window.screen.height + 25;
    if (window.screen.width < 600) {
      return (
        <div style={{ height: `${screenHeight}px`, backgroundColor: '#9600ff' }}>
          <MobileMenuHeader />
        </div>
      );
    } else {
      return (
        <div style={{ height: `${screenHeight}px`, backgroundColor: '#9600ff' }}>

        </div>
      );
    }
  }
}

export default Home;
