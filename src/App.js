import React, { Component } from 'react';
import Router from './Router';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router";

import './App.css';
import Slider from './component/slider/slider';
import CategoryBar from './component/categoryBar';
import ViewMore from '../src/component/ViewMore';
import HomePage from './component/homepage';
import Cart from './component/cart/index'
import Header from './component/header';


class App extends Component {


 webRender = () => {
  return (
    <Switch>
        {/* <Route  path='/' render={()=><h1>cart</h1>}/>  */}
        {/* <Route exact path='/' component={HomePage} /> */}
        {/* <Route path='/productlisting' component={ViewMore}/> */}
        {/* <Route exact path='/viewmore' component={ViewMore}/> */}
        {/* <Route exact path='/header' component={Header} /> */}
    </Switch>
  );
};

  render() {
    return (
      <div className="App">
        <Header />
        <Slider />
        <Switch>
          <Route exact path='/' render={HomePage} />
          <Route  path='/cart' component={Cart}/> 
          <Route  path='/viewmore' component={ViewMore}/>
        
        </Switch>
      
        {/* <Header /> */}
        {/* <Slider /> */}
        {/* <CategoryBar /> */}
        {/* <Router  render={this.webRender} /> 
       */}
      </div>
    );
  }
}

export default (withRouter(App));

