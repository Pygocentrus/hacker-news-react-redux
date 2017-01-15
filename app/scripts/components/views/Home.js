import React, { PropTypes, Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import ItemsList from '../news/ItemsList';
import Loader from '../generic/Loader';

class Home extends Component {
  componentDidMount() {
    this.props.getTopStories();
  }

  shouldComponentUpdate(nextProps) {
    return this.props.stories.items !== nextProps.stories.items;
  }

  render() {
    return !!this.props.stories.items.length
      ? <ItemsList items={this.props.stories.items} />
      : <Loader />;
  }
}

Home.propTypes = {
  stories: PropTypes.object,
  getTopStories: PropTypes.func.isRequired,
};

export default Home;
