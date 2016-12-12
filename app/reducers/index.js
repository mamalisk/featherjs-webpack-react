import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import fxData from './fxData';
import others from './others';

const rootReducer = combineReducers({fxData, others, routing: routerReducer});

export default rootReducer;
