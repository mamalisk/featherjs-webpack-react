import { createAction } from 'redux-actions';
import * as Actions from '../actions/actionTypes';

function fxData(state = [], action){
  switch(action.type) {
    case Actions.UPDATE_FX_DATA :
       return [
          ...state,
          action.payload
       ]
    default:
       return state;
  }
  return state;
}

export default fxData;

export const updateCurrentFxData = createAction(Actions.UPDATE_FX_DATA);
