import { connect } from 'react-redux';

import { getNewsStories, getTopStories } from '../actions/api';
import Home from '../components/views/Home';

const mapStateToProps = (state) => {
  const { stories } = state;
  return { stories };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getTopStories: () => dispatch(getTopStories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
