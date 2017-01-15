import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import HeaderContainer from './HeaderContainer';

const LayoutContainer = ({ children }) =>
  <div className="LayoutContainer">
    <HeaderContainer />
    <div className="LayoutContainer-child">
      {children}
    </div>
  </div>;

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutContainer;
