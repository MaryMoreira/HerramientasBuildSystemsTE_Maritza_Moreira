import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from '../view/Login';
import HomePage from '../view/Home';
import ItemPage  from '../view/Item';
import PurchasePage from '../view//Purchase';


const AppRoutes = () => (

      <div>
          <Switch>
            <Route path="/login" component={LoginPage} exact/>
            <Route path="/home" component={HomePage} exact/>
            <Route path="/item" component={ItemPage} exact/>
            <Route path="/purchase" component={PurchasePage} exact/>
            <Route path="/" component={LoginPage} />
          </Switch>
      </div>

);

export default AppRoutes;