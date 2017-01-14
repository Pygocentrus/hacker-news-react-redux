import { connect } from 'react-redux';

import { getNewsStories } from '../actions/api';
import Home from '../components/Home';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getNewsStories: () => dispatch(getNewsStories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
