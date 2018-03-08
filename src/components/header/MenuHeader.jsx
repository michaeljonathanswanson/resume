import React, { Component } from 'react';
import './MenuHeader.css';
import { Link } from 'react-router-dom'

class MenuHeader extends Component {
  render() {
    return (
      <header>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/resume'>Resume</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/word-search'>Word Search</Link></li>
          <li><Link to='/memory'>Memory</Link></li>
        </ul>
      </header>
    );
  }
}

export default MenuHeader;
