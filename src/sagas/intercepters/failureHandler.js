import { put } from 'redux-saga/effects'

function* failureHandler(response, failureType, meta) {
  yield put({ type: failureType, error: true, payload: response, meta })
}

export default failureHandler
