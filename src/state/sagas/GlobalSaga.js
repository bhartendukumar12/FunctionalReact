import { call, put, all, takeEvery, takeLatest } from 'redux-saga/effects';
import { GlobalService } from '../../services';


/**
 * Exposes saga definition for all workflows within the app.
 */
export default function* globalSaga() {
  yield all([
    takeLatest('REQUEST_USERS', fetchUsers),
    takeLatest('REQUEST_USER', fetchUser),
  ]);
}


export function* fetchUsers() {
  try {
      const fetchDataStoresResponse = yield call(GlobalService.fetchUsers, 'https://jsonplaceholder.typicode.com/users');
      yield put({ type: 'USERS_RECEIVE', data: fetchDataStoresResponse })
  } catch (e) {
    // LoggerService.reportError(e);
  }
}

export function* fetchUser(payload) {
  try {
      const fetchDataStoresResponse = yield call(GlobalService.fetchUsers, `https://jsonplaceholder.typicode.com/users/${payload.data.id}`);
      yield put({ type: 'USER_RECEIVE', data: fetchDataStoresResponse })
  } catch (e) {
    // LoggerService.reportError(e);
  }
}