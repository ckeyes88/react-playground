import React, {Component} from 'react'
import { Link } from 'react-router';

import Astronaut from '../Astronaut';

import './Astronauts.styl';

class Astronauts extends Component {
  constructor (props, context) {
    super(props, context)
    this.renderAstronauts = this.renderAstronauts.bind(this);
  }
  
  componentWillMount () {
    this.props.getAstros();
  }

  renderAstronauts() {
    return this.props.astros.map((cur, i) => {
      return <Astronaut 
                name={this.props.astros[i].name} 
                craft={this.props.astros[i].craft} 
                key={i}/>
    });
  }
  
  render () {
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>Astronauts on the ISS</h1>
        <ul>
          {this.renderAstronauts()}
        </ul>
      </div>
    )
  }
}

export default Astronauts