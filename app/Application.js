import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';
import App from './App';

function mapStateToProps(state){
  return {
    fxData: state.fxData
  }
}

function mapDispathToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Application = connect(mapStateToProps, mapDispathToProps)(App);

export default Application;
