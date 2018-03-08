import React, { Component } from 'react';
import Home from '../home/Home.jsx';
import Resume from '../resume/Resume.jsx';
import Contact from '../contact/Contact.jsx';
import WordSearch from '../wordsearch/WordSearch.jsx';
import Memory from '../memory/Memory.jsx';
import { Switch, Route } from 'react-router-dom';

export const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/resume' component={Resume}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/word-search' component={WordSearch}/>
        <Route exact path='/memory' component={Memory}/>
      </Switch>
    </main>
);

export default Main;
