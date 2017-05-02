import React, { Component } from 'react'

import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
import openWeatherMap from 'openWeatherMap'

class Weather extends Component {
  constructor() {
    super()

    this.state = {
      isLoading: false
    }
  }

  handleSearch = (location) => {
    let that = this
    this.setState({ isLoading: true })
    openWeatherMap.getTemp(location).then((temp) => {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, (errorMessage) => {
      that.setState({ isLoading: false })
      console.log(errorMessage)
    })
  }

  render() {
    let { location, temp, isLoading } = this.state

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching Weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage loc={location} temp={temp} />
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    )
  }
}

export default Weather