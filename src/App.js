import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import Router from './Router';

import './App.css';
import Slider from './component/slider/slider';
import Header from './component/header';


const Navigation = (props) => <nav>
  <ul>
    <li><NavLink to='/'>Home</NavLink></li>
  </ul>
</nav>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slider />
        <Navigation />
        <Router /> 
      </div>
    );
  }
}

export default App;
