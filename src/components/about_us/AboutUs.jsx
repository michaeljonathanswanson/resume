import React, { Component } from 'react';
import './AboutUs.css';
import MobileMenuHeader from '../header/MobileMenuHeader.jsx';

class AboutUs extends Component {
  render() {
    let screenHeight = window.screen.height + 25;
    if (window.screen.width < 600) {
      return (
        <div style={{ height: `${screenHeight}px`, backgroundColor: '#ffd4c4' }}>
          <MobileMenuHeader />
        </div>
      );
    } else {
      return (
        <div style={{ height: `${screenHeight}px`, backgroundColor: '#ffd4c4' }}>

        </div>
      );
    }
  }
}

export default AboutUs;
