import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Header from './Header';
import HomePage from './Home';
import MainPage from './Main';
import AdminPage from './Admin';


import { Provider } from "react-redux";
import configureStore from "../redux/store";

import * as ROUTES from '../constants/routes';

const App = () => (
  <Provider store={configureStore()}>
    <Router>
      <div><Header /></div>
      <div>
          <div>
          <Route exact path={ROUTES.LANDING} component={HomePage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.MAIN} component={MainPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          </div>
      </div>
      </Router>
  </Provider>
);
export default App;