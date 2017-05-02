import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">About</h1>
        <h5 className="text-center">This is a weather app built with React</h5>
        <p>
          Here are some of the tools I used to build this app:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React </a> Framework used to build app.
          </li>
          <li>
            <a href="http://openweathermap.org/">Open Weather Map </a> used to search for weather data.
          </li>
          <li>
            <a href="https://github.com/ajames20/react-weatherapp">GitHub </a> used for version control.

          </li>
        </ul>
      </div>
    );
  }
}

export default About