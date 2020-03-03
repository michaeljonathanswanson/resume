import React, { Component } from 'react';
import './App.css';
import MenuHeader from './components/header/MenuHeader.jsx';
import Main from './components/main/Main.jsx';

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: 'black'}}>
        <MenuHeader />
        <Main/>
      </div>
    );
  }
}

export default App;
