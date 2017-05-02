import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'

class Navigation extends Component {
  render() {
    return (
      <div>
        <h2>Navigation</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
        <IndexLink to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</IndexLink>
        <IndexLink to="/example" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Example</IndexLink>
      </div >
    );
  }
}

export default Navigation;