import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center page-title">About</h1>
        <h5 className="text-center">This is a weather app built with React</h5>
        <p>
          Here are some of the tools I used to build this app:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react" target="_blank">React </a> Framework used to build app.
          </li>
          <li>
            <a href="http://openweathermap.org/" target="_blank">Open Weather Map </a> used to search for weather data.
          </li>
          <li>
            <a href="https://github.com/ajames20/react-weatherapp" target="_blank">My GitHub </a> used for version control.

          </li>
        </ul>
      </div>
    );
  }
}

export default About