import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ViewMore from '../src/component/ViewMore';
import ProductListing from '../src/component/product-listing'
import HomePage from './component/homepage';
// import Cart from './component/cart';
import Header from './component/header';

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/productlisting' component={ViewMore}/>
        <Route path='/viewmore' component={ViewMore}/>
        <Route exact path='./header' component={Header} />
        {/* <Route exact path='./cart' component={Cart} />  */}
    </Switch>
)

export default Router;