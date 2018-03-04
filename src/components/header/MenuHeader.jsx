import React, { Component } from 'react';
import './MenuHeader.css';

class MenuHeader extends Component {
  render() {
    return (
      <header>
        <ul>
          <li>Home</li>
          <li>Resume</li>
          <li>Contact</li>
          <li>Word Search</li>
          <li>Memory</li>
        </ul>
      </header>
    );
  }
}

export default MenuHeader;
