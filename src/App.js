import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import Router from './Router';

import './App.css';
import Slider from './component/slider/slider';
import Header from './component/header';
import CategoryBar from './component/categoryBar';


const Navigation = (props) => <nav>
       <ul>
         {/* <li><NavLink to='/'>Home</NavLink></li> */}
       </ul>

      {/* <div className="container">
      <div className="row">
        <div className="col-sm-3">
         <Sidebar />
        </div>
        <div className="col-sm-9">
        <ul>
          <li>content</li>
        </ul>
        </div>
      </div>
    </div> */}
</nav>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slider />
        <CategoryBar />
        <Router /> 
      </div>
    );
  }
}

export default App;
