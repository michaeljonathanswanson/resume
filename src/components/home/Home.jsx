import React, { Component } from 'react';
import './Home.css';
import MobileMenuHeader from '../header/MobileMenuHeader.jsx';
import HomeBackground from "../../media/HomeBackground.png";

import ClearDragon from "../images/ClearDragon.jsx";


class Home extends Component {
  render() {
    let screenHeight = window.screen.height + 25;
    if (window.screen.width < 600) {
      return (
        <div style={{ height: `${screenHeight}px`}} className='home-background'>
          <div>
            <img src={ClearDragon} alt=""/>
          </div>
          <MobileMenuHeader />
          <ClearDragon />
        </div>
      );
    } else {
      return (
        <div style={{ height: `${screenHeight}px`}} className='home-background'>
          <ClearDragon />
        </div>
      );
    }
  }
}

export default Home;
