import React, { PropTypes, Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import ItemsList from '../news/ItemsList';
import Loader from '../generic/Loader';

class Home extends Component {

  componentDidMount() {
    this.props.getTopStories();
  }

  render() {
    return (
      <div>
        {
          !!this.props.topStories.items.length
            ? <ItemsList items={this.props.topStories.items} />
            : <Loader />
        }
      </div>
    );
  }

}

export default Home;
