import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import * as routes from '../constants/routes';

const Header = (props, context) =>
  <nav className="Header">
    <img src="https://news.ycombinator.com/y18.gif" alt="logo" className="Header-logo"/>
    <div className="Header-content">
      <h1 className="Header-title">Hacker News</h1>
      <div className="Header-links">
        <Link className="Header-linksItem" to="/">new</Link>&nbsp;|&nbsp;
        <Link className="Header-linksItem" to="/">comments</Link>&nbsp;|&nbsp;
        <Link className="Header-linksItem" to="/">show</Link>&nbsp;|&nbsp;
        <Link className="Header-linksItem" to="/">ask</Link>&nbsp;|&nbsp;
        <Link className="Header-linksItem" to="/">jobs</Link>&nbsp;|&nbsp;
        <Link className="Header-linksItem" to="/">submit</Link>
      </div>
    </div>
    <span className="Header-login"><Link to="/">login</Link></span>
  </nav>;

Header.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default Header;
