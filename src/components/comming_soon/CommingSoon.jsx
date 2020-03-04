import React, { Component } from 'react';
import './CommingSoon.css';
import MobileMenuHeader from '../header/MobileMenuHeader.jsx';

class CommingSoon extends Component {
  render() {
    let screenHeight = window.screen.height + 25;
    if (window.screen.width < 600) {
      return (
        <div style={{ height: `${screenHeight}px`, backgroundColor: 'rgb(12 169 141)' }}>
          <MobileMenuHeader />
        </div>
      );
    } else {
      return (
        <div style={{ height: `${screenHeight}px`, backgroundColor: 'rgb(12 169 141)' }}>

        </div>
      );
    }
  }
}

export default CommingSoon;
