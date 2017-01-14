import { connect } from 'react-redux';

import * as apiActions from '../actions/api';
import Home from '../components/Home';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
