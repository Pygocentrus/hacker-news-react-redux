import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import * as routes from './constants/routes';
import configureStore from './store/configureStore';
import LayoutContainer from './containers/LayoutContainer';
import HomeContainer from './containers/HomeContainer';

const store = configureStore();

console.log('ENV:', process.env.NODE_ENV);

const App = () =>
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={LayoutContainer}>
        <Route path={routes.HOME} component={HomeContainer} />
      </Route>
    </Router>
  </Provider>;

render(<App />, document.getElementById('app'));
