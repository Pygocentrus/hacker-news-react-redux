import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import * as routes from '../constants/routes';

const Header = (props, context) =>
  <nav className="navbar navbar-default">
    HN Clone app
  </nav>;

Header.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default Header;
