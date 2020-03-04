import React, { Component } from 'react';
import './Shop.css';
import MobileMenuHeader from '../header/MobileMenuHeader.jsx';


class Shop extends Component {
  render() {
    let screenHeight = window.screen.height + 25;
    if (window.screen.width < 600) {
      return (
        <div style={{ height: `${screenHeight}px`, backgroundColor: '#00abda' }}>
          <MobileMenuHeader />
        </div>
      );
    } else {
      return (
        <div style={{ height: `${screenHeight}px`, backgroundColor: '#00abda' }}>

        </div>
      );
    }
  }
}


export default Shop;
