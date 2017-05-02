import React, { Component } from 'react'

class SearchResults extends Component {
  render() {
    let { temp, loc } = this.props
    return (
      <div>
        <p>It is {temp} rite now in {loc}</p>
      </div>
    );
  }
}

export default SearchResults