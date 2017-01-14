import React, { PropTypes } from 'react';
import Header from '../components/Header';

const LayoutContainer = ({ children }) =>
  <div>
    <Header />
    <div className="container">
      {children}
    </div>
  </div>;

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutContainer;
