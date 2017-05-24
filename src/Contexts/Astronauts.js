import { connect } from 'react-redux';
import Astronauts from '../Components/Astronauts';
import { getAstros } from '../Actions/Astronauts';
function mapStateToProps(state) {
  return {
    astros: state.astronauts.toJS()
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    getAstros: () => getAstros()(dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Astronauts);
