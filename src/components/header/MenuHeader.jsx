import React, { Component } from 'react';
import './MenuHeader.css';
import { NavLink } from 'react-router-dom'
import BackgroundHeader from "../../media/BackgroundHeader.png";
// import LeasCriticalDesigns from "../../media/LeasCriticalDesigns.svg";
import LeasCriticalDesigns from "../../media/Svg.png";
class MenuHeader extends Component {

  render() {
    // this will be for mobile
    if (window.screen.width < 600) {
     return null;
    } else {
      return (
        <header>
          <h1 style={{ textAlign: 'center' }} > Lea's Critical Designs</h1>
          <ul style={{ display: 'flex', paddingTop: '' }}>
            <li style={{ width: '16.67%', borderTop: 'solid 1px black', borderLeft: 'solid 1px black', borderRight: 'solid 1px black', background: '#9600ff', textAlign: 'center' }}>
              <NavLink activeClassName='active-link-style' className='link-style' exact={true} to='/'>Home</NavLink>
            </li>
            <li style={{ width: '16.67%', borderTop: 'solid 1px black', borderLeft: 'solid 1px black', borderRight: 'solid 1px black', textAlign: 'center', background: '#00abda' }}>
              <NavLink activeClassName='active-link-style' className='link-style' to='/shop'>Shop</NavLink>
            </li>
            <li style={{ width: '16.67%', borderTop: 'solid 1px black', borderLeft: 'solid 1px black', borderRight: 'solid 1px black', textAlign: 'center', background: 'rgb(179 0 97)' }}>
              <NavLink activeClassName='active-link-style' className='link-style' to='/how_tos'>How To's</NavLink>
            </li>
            <li style={{ width: '16.67%', borderTop: 'solid 1px black', borderLeft: 'solid 1px black', borderRight: 'solid 1px black', textAlign: 'center', background: 'rgb(12 169 141)' }}>
              <NavLink activeClassName='active-link-style' className='link-style' to='/comming_soon'>Coming Soon</NavLink>
            </li>
            <li style={{ width: '16.67%', borderTop: 'solid 1px black', borderLeft: 'solid 1px black', borderRight: 'solid 1px black', textAlign: 'center', background: 'rgb(149 225 129)' }}>
              <NavLink activeClassName='active-link-style' className='link-style' to='/articles_and_freebies'>Articles &amp; Freebies</NavLink>
            </li>
            <li style={{ width: '16.67%', borderTop: 'solid 1px black', borderLeft: 'solid 1px black', borderRight: 'solid 1px black', textAlign: 'center', background: '#ffd4c4' }}>
              <NavLink activeClassName='active-link-style' className='link-style' to='/about_us'>About Us</NavLink>
            </li>
          </ul>
        </header>
      );
    }
  }
}

export default MenuHeader;
