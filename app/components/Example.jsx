import React, { Component } from 'react';
import { Link } from 'react-router';

class Example extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Example Searches</h1>
        <p>Here are a few examples to try out:</p>
        <ol>
          <li><Link to="/?location=Phoenix">Phoenix, AZ</Link></li>
          <li><Link to="/?location=Helsinki">Helsinki, Finland</Link></li>
        </ol>
      </div >
    );
  }
}

export default Example;