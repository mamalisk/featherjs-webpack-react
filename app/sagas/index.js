import { takeEvery } from 'redux-saga';
import * as Actions from '../actions/actionTypes';
import { put, call, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { updateCurrentFxData } from '../reducers/fxData';

export function* onUpdateFxData() {
  yield put(updateCurrentFxData);
}

export default function* rootSaga() {
  yield [
    takeEvery(Actions.UPDATE_FX_DATA, onUpdateFxData);
  ]
}
