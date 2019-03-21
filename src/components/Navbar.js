import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <h1>Navbar</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          {/* <li><a href="/">Home</a></li>
          <li><a href="/about2">About</a></li> */}
        </ul>
      </div>
    );
  }
}

export default Navbar;