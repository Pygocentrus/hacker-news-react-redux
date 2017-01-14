import React, { PropTypes, Component } from 'react';

class Home extends Component {
  componentDidMount() {
    this.props.getNewsStories();
  }
  render() {
    return (
      <div>Hello there!</div>
    );
  }
}

export default Home;
