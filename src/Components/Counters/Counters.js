import React, {Component} from 'react'
import Counter from '../Counter';
import { Link } from 'react-router';

class Counters extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: ""
    }

    this.renderCounters = this.renderCounters.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.addCounter = this.addCounter.bind(this);
  }
  
  renderCounters() {
    return Object.keys(this.props.counters).map((cur,i) => {
      return (
        <Counter 
          key={i}
          name={cur} 
          currentCount={this.props.counters[cur]} 
          increment={this.props.increment}
          decrement={this.props.decrement}/>
      )
    }); 
  }

  onInputChange(ev) {
    this.setState({
      [ev.target.id]: ev.target.value
    });
  }

  addCounter() {
    this.props.addCounter(this.state.name);
  }

  render () {
    return (
      <div>
        <Link to="/">Home</Link>
        <h2>Add Counter</h2>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" onChange={this.onInputChange} />
        </div>
        <button onClick={this.addCounter}>Add Counter</button>
        {this.renderCounters()}
      </div>
    )
  }
}

export default Counters