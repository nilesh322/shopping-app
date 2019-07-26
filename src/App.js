import React, { Component } from "react";
// import Router from './Router';
import { Switch, Route, Router, HashRouter } from "react-router-dom";
import { Redirect, hashHistory } from "react-router";
import history from "./routes/customhistory";
import "./App.css";
import Slider from "./component/slider/slider";
import CategoryBar from "./component/categoryBar";
import ViewMore from "../src/component/ViewMore";
import HomePage from "./component/homepage";
import Cart from "./component/cart/index";
import Header from "./component/header";
import Product from "./component/ProductManagementForm/index";
import productListing from "./component/product-listing";
import Login from "./component/login/login";
import SignUp from "./component/login/signUp";
import ForgotPassword from "./component/login/forgot-password";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
      showSlider: true,
      showCategoryBar: true
    };
  }

  hideHeader = () => {
    this.setState({
      showHeader: false,
      showSlider: false,
      showCategoryBar: false
    });
  };

  render() {
    let { showHeader, showSlider, showCategoryBar } = this.state;
    return (
      <div className="App">
        <Header />
        <Slider />
        <CategoryBar />
        <div>
          {/* <Router history={history}> */}
          <Switch>
            <Route exact path="/" component={HomePage} {...this.props} />
            <Route path="/cart" component={Cart} />
            <Route path="/viewmore/:id" component={ViewMore} />
            <Route path="/addproduct" component={Product} />
            <Route path="/product-listing" component={productListing} />
            <Route path="/login" component={Login} />
            <Route path="/Signup" component={SignUp} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
          {/* </Router> */}
        </div>
      </div>
    );
  }
}

export default App;
