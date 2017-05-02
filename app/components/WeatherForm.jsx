import React, { Component } from 'react';

class WeatherForm extends Component {
  onFormSubmit = (e) => {
    e.preventDefault();

    let location = this.refs.location.value

    if (location.length > 0) {
      this.refs.location.value = ''
      this.props.onSearch(location)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="City" ref="location" />
          <button className="button expanded hollow">Search</button>
        </form>
      </div>
    );
  }
}

export default WeatherForm;