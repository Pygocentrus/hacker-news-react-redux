import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Header from '../components/Header';

const LayoutContainer = ({ children }) =>
  <div className="LayoutContainer">
    <Header />
    <div className="LayoutContainer-child">
      {children}
    </div>
  </div>;

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutContainer;
