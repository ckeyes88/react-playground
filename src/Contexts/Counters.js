import { connect } from 'react-redux';
import Counters from '../Components/Counters';
import { incrementCount, decrementCount, addCounter } from '../Actions/Counter';

function mapStateToProps(state) {
  return {
    counters: state.counters.toJS()
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    increment: (name) => dispatch(incrementCount(name)),
    decrement: (name) => dispatch(decrementCount(name)),
    addCounter: (name) => dispatch(addCounter(name))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Counters);
