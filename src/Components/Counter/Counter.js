import React from 'react';

import './Counter.styl';

export default class Counter extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(ev) {
    this.props.increment(this.props.name);
  }

  decrement(ev) {
    this.props.decrement(this.props.name);
  }
  
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <div className="counter">
          <button onClick={this.increment}>+</button>
          <p>{this.props.currentCount}</p>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    )
  }
}

Counter.propTypes = {
  name: React.PropTypes.string,
  currentCount: React.PropTypes.number,
  increment: React.PropTypes.func,
  decrement: React.PropTypes.func
}