import React, { Component } from 'react';
// import Router from './Router';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router";

import './App.css';
import Slider from './component/slider/slider';
import CategoryBar from './component/categoryBar';
import ViewMore from '../src/component/ViewMore';
import HomePage from './component/homepage';
import Cart from './component/cart/index'
import Header from './component/header';
import Product from './component/ProductManagementForm/index';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Slider />
        <CategoryBar /> 
        <Switch>
          <Route exact path='/' render={HomePage} />
          <Route  path='/cart' component={Cart}/> 
          <Route  path='/viewmore' component={ViewMore}/>
          <Route path='/addproduct' component={Product} />
        </Switch>
      </div>
    );
  }
}

export default (withRouter(App));

