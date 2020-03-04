import React, { Component } from 'react';
import MobileMenuHeader from '../header/MobileMenuHeader.jsx';

class ArticlesAndFreebies extends Component {
  render() {
    let screenHeight = window.screen.height + 25;
    if (window.screen.width < 600) {
      return (
        <div style={{ height: `${screenHeight}px`, backgroundColor: 'rgb(149 225 129)' }}>
          <MobileMenuHeader />
        </div>
      );
    } else {
      return (
        <div style={{ height: `${screenHeight}px`, backgroundColor: 'rgb(149 225 129)' }}>

        </div>
      );
    }
  }
}

export default ArticlesAndFreebies;
