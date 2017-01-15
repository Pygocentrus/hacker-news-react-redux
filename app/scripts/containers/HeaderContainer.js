import { connect } from 'react-redux';
import { getNewsStories, getTopStories, getShowStories, getAskStories, getJobsStories } from '../actions/api';
import Header from '../components/Header';

const mapDispatchToProps = (dispatch, ownProps) => ({
  getNewsStories: () => dispatch(getNewsStories()),
  getTopStories: () => dispatch(getTopStories()),
  getShowStories: () => dispatch(getShowStories()),
  getAskStories: () => dispatch(getAskStories()),
  getJobsStories: () => dispatch(getJobsStories()),
});

export default connect(null, mapDispatchToProps)(Header);
