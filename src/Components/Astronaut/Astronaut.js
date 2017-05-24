import React, {Component} from 'react'

class Astronaut extends Component {
  render () {
    return (
      <li>
        <strong>{this.props.name}</strong> - {this.props.craft}
      </li>
    )
  }
}

Astronaut.propTypes = {
  name: React.PropTypes.string,
  craft: React.PropTypes.string
}
export default Astronaut