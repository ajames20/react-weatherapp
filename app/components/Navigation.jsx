import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'

class Navigation extends Component {
  onSearch = (e) => {
    e.preventDefault();
    let location = this.refs.search.value
    let encodedLocation = encodeURIComponent(location)

    if (location.length > 0) {
      this.refs.search.value = ''
      window.location.hash = `#/?location=${encodedLocation}`
    }
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink></li>
            <li><IndexLink to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</IndexLink></li>
            <li><IndexLink to="/example" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Example</IndexLink></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search Weather by City" ref="search" />
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Navigation;