import React, { Component } from 'react';
// import Router from './Router';
import { Switch, Route, Router, HashRouter } from 'react-router-dom';
import { Redirect, hashHistory } from 'react-router';
import './App.css';
import Slider from './component/slider/slider';
import CategoryBar from './component/categoryBar';
import ViewMore from '../src/component/ViewMore';
import HomePage from './component/homepage';
import Cart from './component/cart/index'
import Header from './component/header';
import Product from './component/ProductManagementForm/index';
import productListing from './component/product-listing';
import Login from './component/login/login';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
      showSlider: true,
      showCategoryBar: true
    }
  }

  hideHeader = () => {
    this.setState({
        showHeader: false,
        showSlider: false,
        showCategoryBar: false
    })
}

  render() {
    let { showHeader, showSlider, showCategoryBar} = this.state;
    return (
      <div className="App">
       {showHeader ? <Header />: null}
        {showSlider ?  <Slider />: null }
        { showCategoryBar ? <CategoryBar />: null }
        <div>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route  path='/cart' component={Cart}/> 
              <Route  path='/viewmore/:id' component={ViewMore}/>
              <Route path='/addproduct' component={Product} />
              <Route path='/product-listing' component={productListing} />
              <Route path='/login' render={(props) => <Login {...props} hideHeader={this.hideHeader}  />}/>
              <Redirect to="/login" />        
            </Switch>
          </div> 
      </div>
    );
  }
}



export default App;

