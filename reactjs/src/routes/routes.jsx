import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from '../view/Login';
import HomePage from '../view/Home';
import ItemPage  from '../view/Item';
import PurchasePage from '../view//Purchase';

import * as ROUTE from './const';


const AppRoutes = () => (

      <div>
          <Switch>
            <Route path={ROUTE.LOGIN}    component={LoginPage} exact/>
            <Route path={ROUTE.HOME}     component={HomePage} exact/>
            <Route path={ROUTE.ITEM}     component={ItemPage} exact/>
            <Route path={ROUTE.PURCHASE} component={PurchasePage} exact/>
            <Route path={ROUTE.INIT}     component={LoginPage} />
          </Switch>
      </div>

);

export default AppRoutes;