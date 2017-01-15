import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import * as routes from './constants/routes';
import configureStore from './store/configureStore';
import LayoutContainer from './containers/LayoutContainer';
import HomeContainer from './containers/HomeContainer';

const store = configureStore();

// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

console.log('ENV:', process.env.NODE_ENV);

const App = () =>
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route component={LayoutContainer}>
          <Route path={routes.HOME} component={HomeContainer} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>;

render(<App />, document.getElementById('app'));
