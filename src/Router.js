import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ViewMore from '../src/component/ViewMore';
import ProductListing from '../src/component/product-listing'
import HomePage from './component/homepage';

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/viewmore' component={ViewMore}/>
        <Route path='/productlisting' component={ViewMore}/>
        
    </Switch>
)

export default Router;