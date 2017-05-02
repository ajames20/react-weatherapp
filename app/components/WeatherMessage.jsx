import React, { Component } from 'react'

class SearchResults extends Component {
  render() {
    let { temp, loc } = this.props
    return (
      <div>
        <h3 className="text-center">It is {temp} rite now in {loc}</h3>
      </div>
    );
  }
}

export default SearchResults