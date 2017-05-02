import React, { Component } from 'react';

import Navigation from 'Navigation'


class Main extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h1>Weather App</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Main;