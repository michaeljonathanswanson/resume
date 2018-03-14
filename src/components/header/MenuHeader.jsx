import React, { Component } from 'react';
import './MenuHeader.css';
import { NavLink } from 'react-router-dom'

class MenuHeader extends Component {

  render() {
    return (
      <header>
        <ul>
          <li><NavLink activeClassName='active-link-style' className='link-style' exact={true} to='/'>Home</NavLink></li>
          <li><NavLink activeClassName='active-link-style' className='link-style' to='/resume'>Resume</NavLink></li>
          <li><NavLink activeClassName='active-link-style' className='link-style' to='/references'>References</NavLink></li>
          <li><NavLink activeClassName='active-link-style' className='link-style' to='/portfolio'>Portfolio</NavLink></li>
        </ul>
      </header>
    );
  }
}

export default MenuHeader;
