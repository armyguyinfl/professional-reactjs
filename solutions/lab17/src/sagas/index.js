import { call, put, takeEvery } from 'redux-saga/effects';
import submitCart from '../apis/submitCart';

function* checkout(action) {
  try {
    const response = yield call(submitCart, action.payload);
    yield put({ type: 'CHECKOUT_SUCCEEDED', response: response });
    console.log(response);
  } catch (e) {
    yield put({ type: 'CHECKOUT_FAILED', message: e.message });
  }
}

function* mySaga() {
  yield takeEvery('SUBMIT_CART', checkout);
}

export default mySaga;
