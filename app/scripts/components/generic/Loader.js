import React, { PropTypes, Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Loader = () =>
  <div className="Loader">
    <CircularProgress color="#FF6600" />
  </div>;

export default Loader;
