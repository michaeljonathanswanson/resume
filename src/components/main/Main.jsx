import React from 'react';
import Home from '../home/Home.jsx';
import Shop from '../shop/Shop.jsx';
import HowTos from '../how_tos/HowTos.jsx';
import CommingSoon from '../comming_soon/CommingSoon.jsx';
import ArticlesAndFreebies from '../articles_and_freebies/ArticlesAndFreebies.jsx';
import AboutUs from '../about_us/AboutUs.jsx';
import { Switch, Route } from 'react-router-dom';

export const Main = (props) => {

  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/how_tos' component={HowTos} />
        <Route exact path='/comming_soon' component={CommingSoon} />
        <Route exact path='/articles_and_freebies' component={ArticlesAndFreebies} />
        <Route exact path='/about_us' component={AboutUs} />
        <Route component={Home} />
      </Switch>
    </main>
  );
};

export default Main;
