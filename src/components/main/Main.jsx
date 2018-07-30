import React from 'react';
import Home from '../home/Home.jsx';
import Resume from '../resume/Resume.jsx';
import References from '../references/References.jsx';
import Portfolio from '../portfolio/Portfolio.jsx';
import { Switch, Route } from 'react-router-dom';

export const Main = (props) => {
  let style = {};

  if (window.location.href.endsWith('resume') && window.screen.width < 600) {
    style.overflow = 'auto';
    style.height = '300vh';
    style.width = '100vw';
  }

  return (
    <main style={style}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/references' component={References} />
        <Route exact path='/portfolio' component={Portfolio} />
      </Switch>
    </main>
  );
};

export default Main;
