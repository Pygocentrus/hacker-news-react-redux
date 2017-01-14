import React, { PropTypes } from 'react';
import Header from '../components/Header';

const LayoutContainer = ({ children }) =>
  <div className="LayoutContainer">
    <Header />
    <div className="LayoutContainer-content">
      {children}
    </div>
  </div>;

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutContainer;
