import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// try it with css again useing flex box
// <!DOCTYPE html>
// <html>
// <head>
// <style>
// .flex-container {
//   display: flex;
//   flex-direction: column;
//   background-color: DodgerBlue;
//   justify-content: space-between;
//   height: 100%;
// }

// .flex-container > div {
//   background-color: #f1f1f1;
//   margin: 10px;
//   text-align: center;
//   line-height: 75px;
//   font-size: 30px;
//   transform: rotate(90deg);
// }

// .right-menu {
// 	position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     width: 80px;
//     border: red solid 2px;
// }
// </style>
// </head>
// <body>
// <h1>The flex-direction Property</h1>

// <p>The "flex-direction: column;" stacks the flex items vertically (from top to bottom):</p>
// <div class='right-menu'>
// <div class="flex-container">
//   <div>1</div>
//   <div>2</div>
//   <div>3</div> 
//    <div>4</div> 
// </div>
// </div>

// </body>
// </html>


class MobileMenuHeader extends Component {
  render() {
    let pathName = window.location.pathname;
    let tabHeight = (window.screen.height / 6);
    let tabMiddle = (window.screen.height / 6) / 2;
    let tabWidth = (window.screen.width / 10);

    let styleLi = {
      height: `${tabHeight}px`,
      borderTop: 'solid 1px black',
      borderbottom: 'solid 1px black',
      borderRight: 'solid 1px black',
      textAlign: 'center',
      listStyleType: 'none',
      width: `${tabWidth}px`,
      borderRadius: '0px 10px 10px 0',
      padding: '0'
    }

    let ActiveLinkStyle = {
      borderTop: 'solid 2px black',
      borderBottom: 'solid 2px black',
    };

    let liHome = { ...styleLi};
    let liShop = { ...styleLi, background: '#00abda' };
    let liHowTo = { ...styleLi, background: 'rgb(179 0 97)' };
    let liComingSoon = { ...styleLi, background: 'rgb(12 169 141)' };
    let liArticlesAndFreebies = { ...styleLi, background: 'rgb(149 225 129)' };
    let liAboutUs = { ...styleLi, background: '#ffd4c4' };

    let ActiveLinkStyleHome = { ...liHome, ...ActiveLinkStyle };
    let ActiveLinkStyleShop = { ...liShop, ...ActiveLinkStyle };
    let ActiveLinkStyleHowTo = { ...liHowTo, ...ActiveLinkStyle };
    let ActiveLinkStyleComingSoon = { ...liComingSoon, ...ActiveLinkStyle };
    let ActiveLinkStyleArticlesAndFreebies = { ...liArticlesAndFreebies, ...ActiveLinkStyle };
    let ActiveLinkStyleAboutUs = { ...liAboutUs, ...ActiveLinkStyle };


    let linkStyle = {
      padding: '0',
      fontFamily: 'fantasy',
      font: 'bold',
      textDecoration: 'none',
      fontSize: '12px',
      color: 'white',
      transform: 'rotate(90deg)',
      position: 'absolute',
      display: 'block',
      top: `${tabHeight / 2}px`,
      width: `${tabHeight}px`,
      left: `-${tabWidth}px`
    }

    let linkStyleHome = { ...linkStyle };
    let linkStyleShop = { ...linkStyle, top: `${(tabHeight * 2) - tabMiddle}px` };
    let linkStyleHowTo = { ...linkStyle, top: `${(tabHeight * 3) - tabMiddle}px` };
    let linkStyleComingSoon = { ...linkStyle, top: `${(tabHeight * 4) - tabMiddle}px` };
    let linkStyleArticlesAndFreebies = { ...linkStyle, top: `${(tabHeight * 5) - tabMiddle}px` };
    let linkStyleAboutUs = { ...linkStyle, top: `${(tabHeight * 6) - tabMiddle}px` };



    return (
        <ul style={{ display: 'column', position: 'absolute', right: '0px', top: '0px', width: `${tabWidth}px` }}>

          <li style={pathName !== '/' ? liHome : ActiveLinkStyleHome} className='home-background'>
            <NavLink style={linkStyleHome} exact={true} to='/'>Home</NavLink>
          </li>

          <li style={pathName !== '/shop' ? liShop : ActiveLinkStyleShop}>
            <NavLink style={linkStyleShop} to='/shop'>Shop</NavLink>
          </li>

          <li style={pathName !== '/how_tos' ? liHowTo : ActiveLinkStyleHowTo}>
            <NavLink style={linkStyleHowTo} to='/how_tos'>How To's</NavLink>
          </li>
          <li style={pathName !== '/comming_soon' ? liComingSoon : ActiveLinkStyleComingSoon}>
            <NavLink style={linkStyleComingSoon} to='/comming_soon'>Coming Soon</NavLink>
          </li>

          <li style={pathName !== '/articles_and_freebies' ? liArticlesAndFreebies : ActiveLinkStyleArticlesAndFreebies}>
            <NavLink style={linkStyleArticlesAndFreebies} to='/articles_and_freebies'>Articles &amp; Freebies</NavLink>
          </li>

          <li style={pathName !== '/about_us' ? liAboutUs : ActiveLinkStyleAboutUs}>
            <NavLink style={linkStyleAboutUs} to='/about_us'>About Us</NavLink>
          </li>

        </ul>
    );
  }
}

export default MobileMenuHeader;
