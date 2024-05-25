import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {FETCH_DATA} from '../actions/actionTypes';
import {fetchDataSuccess, fetchDataFailure} from '../actions/dataAction';
import {api} from '../../services/ApiService';

// Saga worker function
function* fetchDataSaga() {
  try {
    const response: any = yield call(
      api,
      'https://jsonplaceholder.typicode.com/todos/1',
      'GET',
      null,
      null,
    );
    yield put(fetchDataSuccess(response.data));
  } catch (error: any) {
    yield put(fetchDataFailure(error.message));
  }
}

// Saga watcher function
export function* dataSaga() {
  yield takeLatest(FETCH_DATA, fetchDataSaga);
}
