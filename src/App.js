import React, { Component } from 'react';
import './App.css';
import MenuHeader from './components/header/MenuHeader.jsx';
import Home from './components/home/Home.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <MenuHeader />
        <Home />
      </div>
    );
  }
}

export default App;
