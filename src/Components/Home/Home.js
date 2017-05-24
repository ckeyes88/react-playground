import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/astros">Astronauts</Link></li>
        </ul>
      </div>
    )
  }
}