import React, { Component } from 'react';
import './Shop.css';
import MobileMenuHeader from '../header/MobileMenuHeader.jsx';


class Shop extends Component {
  render() {
    let screenHeight = window.screen.height + 25;
    return (
      <div style={{ height: `${screenHeight}px`, backgroundColor: '#00abda' }}>
        <MobileMenuHeader />
      </div>
    );
  }
}


export default Shop;
