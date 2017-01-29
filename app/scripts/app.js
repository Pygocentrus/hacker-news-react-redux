import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import registerEvents from 'serviceworker-webpack-plugin/lib/browser/registerEvents';

import * as routes from './constants/routes';
import configureStore from './store/configureStore';
import LayoutContainer from './containers/LayoutContainer';
import HomeContainer from './containers/HomeContainer';
import SearchContainer from './containers/SearchContainer';

const store = configureStore();

if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
  console.info('register SW');
  const registration = runtime.register();
}

// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () =>
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route component={LayoutContainer}>
          <Route path={routes.HOME} component={HomeContainer} />
          <Route path={routes.SEARCH} component={SearchContainer} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>;

render(<App />, document.getElementById('app'));
