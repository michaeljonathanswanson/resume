import React, { Component } from 'react';
import './HowTos.css';
import ColorScheme from "../../media/ColorScheme.png";
import MobileMenuHeader from '../header/MobileMenuHeader.jsx';

class HowTos extends Component {
  render() {
    let screenHeight = window.screen.height + 25;
    return (
      <div style={{ height: `${screenHeight}px`, backgroundColor: 'rgb(179 0 97)' }}>
        <MobileMenuHeader />
      </div>
    );
  }
}

export default HowTos;
