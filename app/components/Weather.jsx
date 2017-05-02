import React, { Component } from 'react'

import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
import openWeatherMap from 'openWeatherMap'
import ErrorModal from 'ErrorModal'

class Weather extends Component {
  constructor() {
    super()

    this.state = {
      isLoading: false
    }
  }

  handleSearch = (location) => {
    let that = this

    this.setState({
      isLoading: true,
      errorMessage: undefined
    })

    openWeatherMap.getTemp(location).then((temp) => {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, (e) => {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      })
    })
  }

  render() {
    let { location, temp, isLoading, errorMessage } = this.state

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage loc={location} temp={temp} />
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        )
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
}

export default Weather