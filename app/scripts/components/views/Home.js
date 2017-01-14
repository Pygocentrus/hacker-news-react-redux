import React, { PropTypes, Component } from 'react';
import ItemsList from '../news/ItemsList';

class Home extends Component {

  componentDidMount() {
    this.props.getTopStories();
  }

  render() {
    return (
      <div>
        <div>Hello there!</div>
        <ItemsList items={this.props.topStories.items} />
      </div>
    );
  }

}

export default Home;
