import { connect } from 'react-redux';

import { getNewsStories, getTopStories } from '../actions/api';
import Home from '../components/views/Home';

const mapStateToProps = (state) => {
  const { topStories, newsStories } = state;
  return { topStories, newsStories };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getNewsStories: () => dispatch(getNewsStories()),
  getTopStories: () => dispatch(getTopStories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
