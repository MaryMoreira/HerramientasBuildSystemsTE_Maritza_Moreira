import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Header from './Header';
import HomePage from './Home';
import AccountPage from './Account';
import AdminPage from './Admin';

import * as ROUTES from '../constants/routes';

const App = () => (
  <Router>
    <div><Header /></div>
    <div>
        <div>
        <Route exact path={ROUTES.LANDING} component={HomePage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
    </div>
    </Router>
);
export default App;