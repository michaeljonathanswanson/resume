import React, { Component } from 'react';
import MobileMenuHeader from '../header/MobileMenuHeader.jsx';
import ClearDragonImage from "../../media/ClearDragon.png";
import PropTypes from 'prop-types';


class ClearDragon extends Component {

  render() {
    let style = {
      justifyContent: 'center',
      textAlign: 'center',
      height: '200px',
      width: '200px'
    }
    this.props.style ? style = this.props.style : style;
    let screenHeight = window.screen.height + 25;
    let screenWidth = window.screen.width;
    if (window.screen.width < 600) {
      return (
        <div style={{ justifyContent: 'center', textAlign: 'center', height: `${screenHeight}px`, width: `${screenWidth}px` }}>
          <img src={ClearDragonImage} style={{ width: '100%', height: '100%' }} alt="" />
        </div>
      );
    } else {
      return (
        <div>
          <img src={ClearDragonImage} alt="" />
        </div>
      );
    }
  }
}

export default ClearDragon;

ClearDragon.propTypes = {
  style: PropTypes.object
};
